import type { ScNumber } from '@d-zero/a11y-checklist';
import type { SC, WCAGVersion } from '@d-zero/db-wcag/types';

const mod = await import('@d-zero/db-wcag/json');
const wcag = mod.default;

type SCMultilingual = {
	en: SC;
	ja: SC;
};

export function wcagSc(scNumber: ScNumber, version: WCAGVersion): SCMultilingual | null {
	if (version === '3') {
		return null;
	}

	const ver = wcag[`wcag_${version}`];

	// @ts-ignore
	const ja: SC | null = ver.ja[scNumber] ?? null;

	// @ts-ignore
	const en: SC | null = ver.en[scNumber] ?? null;

	if (!ja || !en) {
		return null;
	}

	return {
		en,
		ja,
	};
}
