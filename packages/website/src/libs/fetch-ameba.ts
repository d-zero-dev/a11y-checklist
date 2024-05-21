import { fetchDocument } from './fetch-document';
import { getTitleFromUrl } from './get-title-from-url';

let result: Map<
	string,
	{
		url: string;
		title: string;
	}
>;

export async function fetchAmeba() {
	if (result) {
		return result;
	}

	const document = await fetchDocument('https://a11y-guidelines.ameba.design/');
	const links = document?.querySelectorAll<HTMLAnchorElement>('a[href]') ?? [];

	result = new Map();

	for (const link of links) {
		const matched = link.href.match(/((?:\d+\/){2}\d)\/$/);

		if (!matched) {
			continue;
		}

		const id = matched[1]?.replaceAll('/', '.');
		if (!id) {
			continue;
		}
		result.set(id, {
			url: link.href,
			title: await getTitleFromUrl(link.href),
		});
	}

	return result;
}
