import type { Level, Locale, SC } from '@d-zero/db-wcag/types';

import { minify } from 'html-minifier-terser';
import { JSDOM } from 'jsdom';
// @ts-ignore
import turndown from 'turndown';

const turndownService = new turndown({
	bulletListMarker: '-',
	hr: '---',
});
turndownService.keep(['dl', 'dt', 'dd']);

export async function fetchSC(url: string, locale: Locale = 'en') {
	const dom = await JSDOM.fromURL(url);
	const document = dom.window.document;

	const $scCollection = [...document.querySelectorAll('.guideline .conformance-level')]
		.map((el) => el.parentElement)
		.filter((el): el is HTMLElement => el !== null);

	const scList = await Promise.all(
		[...$scCollection].map<Promise<SC>>(async ($sc) => {
			// Replace relative URLs with absolute URLs
			for (const $a of $sc.querySelectorAll('a')) {
				const href = $a.href;
				$a.setAttribute('href', new URL(href, url).href);
			}

			const fullTitle = $sc.querySelector('h4')?.textContent?.trim();

			if (!fullTitle) {
				throw new Error(`Title not found in ${url}`);
			}

			const level = $sc
				.querySelector('.conformance-level')
				?.textContent?.trim()
				.match(/\((?:Level|レベル)\s+(?<level>A{1,3})\)$/)?.groups?.level;

			if (!level) {
				throw new Error(`Level not found: ${fullTitle} in ${url}`);
			}

			let understanding = [
				...$sc.querySelectorAll<HTMLAnchorElement>('.doclinks a'),
			].find((el) => el.textContent?.trim()?.startsWith('Understanding'))?.href;

			if (!understanding) {
				throw new Error(`Understanding URL not found: ${fullTitle} in ${url}`);
			}

			if (locale === 'ja') {
				understanding = understanding.replace(
					'//www.w3.org/WAI/',
					'//waic.jp/translations/',
				);
			}

			$sc.querySelector('.header-wrapper')?.remove();
			$sc.querySelector('.doclinks')?.remove();
			$sc.querySelector('.conformance-level')?.remove();

			const $body = $sc;

			const bodyHTML = await minify($body.innerHTML.replaceAll(/\s+/g, ' ').trim() ?? '');
			const bodyPlain =
				$body.textContent
					?.trim()
					?.replaceAll(/ +/g, ' ')
					.replaceAll(/\n[\t ]*/g, '\n')
					.replaceAll(/\n{3,}/g, '\n\n') ?? '';

			if (!bodyHTML || !bodyPlain) {
				throw new Error(`Description not found: ${fullTitle} in ${url}`);
			}

			const { id, title } =
				fullTitle.match(
					/^(?:success criterion|達成基準)\s+(?<id>(?:\d+\.){2}\d+)\s+(?<title>\S.*)/i,
				)?.groups ?? {};

			if (!id || !title) {
				throw new Error(`ID or title not found: ${fullTitle} in ${url}`);
			}

			const bodyMarkdown = turndownService.turndown(bodyHTML);

			return {
				id,
				title,
				level: level as Level,
				bodyHTML,
				bodyMarkdown,
				bodyPlain,
				understanding,
			};
		}),
	);

	const result: Record<string, SC> = {};

	for (const sc of scList) {
		result[sc.id] = sc;
	}

	return result;
}

export async function fetchSC_v2_0(url: string, locale: Locale = 'en') {
	const dom = await JSDOM.fromURL(url);
	const document = dom.window.document;

	const $scCollection = document.querySelectorAll('.sc');

	const scList = await Promise.all(
		[...$scCollection].map<Promise<SC>>(async ($sc) => {
			// Replace relative URLs with absolute URLs
			for (const $a of $sc.querySelectorAll('a')) {
				const href = $a.href;
				$a.setAttribute('href', new URL(href, url).href);
			}

			const fullTitle = $sc.querySelector('.sc-handle')?.textContent?.trim();

			if (!fullTitle) {
				throw new Error(`Title not found in ${url}`);
			}

			const level = $sc
				.querySelector('.sctxt') // cspell: disable-line
				?.textContent?.trim()
				.match(/\((?:Level|レベル)\s+(?<level>A{1,3})\)$/)?.groups?.level;

			if (!level) {
				throw new Error(`Level not found: ${fullTitle} in ${url}`);
			}

			let understanding = [
				...$sc.querySelectorAll<HTMLAnchorElement>('.doclinks a'),
			].find((el) => el.title?.startsWith('Understanding'))?.href;

			if (!understanding) {
				throw new Error(`Understanding URL not found: ${fullTitle} in ${url}`);
			}

			if (locale === 'ja') {
				understanding = understanding.replace(
					'//www.w3.org/TR/UNDERSTANDING-WCAG20/',
					'//waic.jp/translations/UNDERSTANDING-WCAG20/',
				);
			}

			const $body = $sc.querySelector('.scinner'); // cspell: disable-line

			if (!$body) {
				throw new Error(`Description element not found: ${fullTitle} in ${url}`);
			}

			const bodyHTML = await minify($body.innerHTML.replaceAll(/\s+/g, ' ').trim() ?? '');
			const bodyPlain =
				$body.textContent
					?.trim()
					?.replaceAll(/ +/g, ' ')
					.replaceAll(/\n[\t ]*/g, '\n')
					.replaceAll(/\t{3,}/g, '\n\n') ?? '';

			if (!bodyHTML || !bodyPlain) {
				throw new Error(`Description not found: ${fullTitle} in ${url}`);
			}

			const { id, title } =
				fullTitle.match(/^(?<id>(?:\d+\.){2}\d+)\s+(?<title>[^\s:][^:]*):/)?.groups ?? {};

			if (!id || !title) {
				throw new Error(`ID or title not found: ${fullTitle} in ${url}`);
			}

			const bodyMarkdown = turndownService.turndown(bodyHTML);

			return {
				id,
				title,
				level: level as Level,
				bodyHTML,
				bodyMarkdown,
				bodyPlain,
				understanding,
			};
		}),
	);

	const result: Record<string, SC> = {};

	for (const sc of scList) {
		result[sc.id] = sc;
	}

	return result;
}
