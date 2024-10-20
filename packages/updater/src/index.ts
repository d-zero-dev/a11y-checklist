import type { WCAGVersion, SC, Locale } from '@d-zero/db-wcag';

import fs from 'node:fs/promises';
import path from 'node:path';

import { format, resolveConfig } from 'prettier';

import { fetchSC, fetchSC_v2_0 } from './fetch-sc.js';
import { links } from './links.js';

const packageName = 'db-wcag';
const packageDir = path.resolve(process.cwd(), '..', '@d-zero', packageName);

const sc = {
	'wcag_2.0': {
		en: await fetchSC_v2_0(links.wcag['2.0'].en),
		ja: await fetchSC_v2_0(links.wcag['2.0'].ja, 'ja'),
	},
	'wcag_2.1': {
		en: await fetchSC(links.wcag['2.1'].en),
		ja: await fetchSC(links.wcag['2.1'].ja, 'ja'),
	},
	'wcag_2.2': {
		en: await fetchSC(links.wcag['2.2'].en),
		ja: await fetchSC(links.wcag['2.2'].ja, 'ja'),
	},
} as const as Record<`wcag_${WCAGVersion}`, Record<Locale, Record<string, SC>>>;

const scFilePath = path.resolve(packageDir, 'src', 'sc.ts');
const options = await resolveConfig(scFilePath);
const tsSC = `export const sc = ${JSON.stringify(sc, null, '\t')} as const;`;
const tsSCFormatted = await format(tsSC, { ...options, parser: 'typescript' });

await fs.writeFile(scFilePath, tsSCFormatted, 'utf8');

const numbers = new Set(
	Object.values(sc).flatMap((v) => {
		return Object.keys(v.en);
	}),
);

const schema = {
	$schema: 'http://json-schema.org/draft-07/schema#',
	definitions: {
		number: {
			type: 'string',
			enum: [...numbers],
		},
	},
};

await fs.writeFile(
	path.resolve(packageDir, 'schema.json'),
	JSON.stringify(schema, null, '\t') + '\n',
	'utf8',
);
