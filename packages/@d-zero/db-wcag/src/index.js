import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sc = require('./sc.json');

export const wcag = {
	info: {
		description: 'This API follows the guidelines provided by W3C.',
		note: 'This content is based on W3C documentation.',
	},
	successCriterions: sc,
};
