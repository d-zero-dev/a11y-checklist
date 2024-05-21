import type { Locale, WCAGVersion } from '@d-zero/db-wcag/types';

export const links = {
	wcag: {
		'2.0': {
			en: 'https://www.w3.org/TR/WCAG20/',
			ja: 'https://waic.jp/translations/WCAG20/',
		},
		'2.1': {
			en: 'https://www.w3.org/TR/WCAG21/',
			ja: 'https://waic.jp/translations/WCAG21/',
		},
		'2.2': {
			en: 'https://www.w3.org/TR/WCAG22/',
			ja: 'https://waic.jp/translations/WCAG22/',
		},
		'3': {
			en: 'https://www.w3.org/TR/WCAG3/',
			ja: null,
		},
	},
} as const satisfies {
	wcag: Record<WCAGVersion, Record<Locale, string | null>>;
};
