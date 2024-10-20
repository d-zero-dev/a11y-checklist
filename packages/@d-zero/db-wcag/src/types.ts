export type WCAGVersion = '2.0' | '2.1' | '2.2' | '3';

export type Locale = 'en' | 'ja';

export type Level = 'A' | 'AA' | 'AAA';

export type SC = {
	id: string;
	title: string;
	level: Level;
	bodyHTML: string;
	bodyMarkdown: string;
	bodyPlain: string;
	understanding: string;
};
