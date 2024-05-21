import { JSDOM } from 'jsdom';
import * as pdfjsLib from 'pdfjs-dist';

const cache = new Map<string, Document>();

export async function fetchDocument(url: string) {
	if (cache.has(url)) {
		return cache.get(url)!;
	}

	try {
		const dom = await JSDOM.fromURL(url);
		const doc = dom.window.document;
		cache.set(url, doc);
		return doc;
	} catch (error) {
		if (error instanceof RangeError) {
			if (error.message.includes('application/pdf')) {
				const response = await fetch(url);
				const buffer = await response.arrayBuffer();
				const data = new Uint8Array(buffer);
				const pdf = await pdfjsLib.getDocument(data).promise;
				const meta = await pdf.getMetadata();
				// @ts-ignore
				const title = meta.info?.Title ?? url;
				const dom = new JSDOM('');
				const doc = dom.window.document;
				doc.title = title;
				cache.set(url, doc);
				return doc;
			}
			return null;
		}
		throw error;
	}
}
