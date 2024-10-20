export type * from './types.js';

import { sc } from './sc.js';

export const wcag = {
	info: {
		description: 'This API follows the guidelines provided by W3C.',
		note: 'This content is based on W3C documentation.',
	},
	successCriterions: sc,
} as const;
