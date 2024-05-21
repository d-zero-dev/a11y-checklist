import { fetchDocument } from './fetch-document';

const cache = new Map<string, string>();

export async function getTitleFromUrl(url: string) {
	if (cache.has(url)) {
		return cache.get(url)!;
	}

	const document = await fetchDocument(url);

	if (!document) {
		return url;
	}

	const urlObj = new URL(url);
	const hasHash = urlObj.hash.length > 1;

	const documentTitle = document.title.trim() || url;
	let title = documentTitle;

	if (hasHash) {
		const $target = document.querySelector(urlObj.hash);
		if ($target) {
			if (/h[1-6]/i.test($target.localName)) {
				const headingText = $target.textContent?.trim();
				if (headingText) {
					title = headingText + ' - ' + documentTitle;
				}
			} else {
				const $child = $target.querySelector('h1, h2, h3, h4, h5, h6');
				const text = $child?.textContent?.trim();
				if (text) {
					title = text + ' - ' + documentTitle;
				} else {
					const $parent = $target.closest('h1, h2, h3, h4, h5, h6');
					const text = $parent?.textContent?.trim();

					if (text) {
						title = text + ' - ' + documentTitle;
					} else {
						const textContent = $target.textContent?.trim();
						const firstLine = textContent?.split('\n').at(0)?.trim();
						if (firstLine) {
							title = firstLine + ' - ' + documentTitle;
						}
					}
				}
			}
		}
	}

	cache.set(url, title);

	return title;
}
