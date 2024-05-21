import rehypeShiki from '@shikijs/rehype';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import { getChecklist } from './checklist';
import { wcagSc } from './wcag';

const checklist = getChecklist();

export async function md2html(md: string) {
	const transformed = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeShiki, {
			themes: {
				light: 'light-plus',
				dark: 'monokai',
			},
		})
		.use(rehypeStringify)
		.process(md);

	let html = transformed.toString();

	html = replaceCheckItemLink(html);
	html = replaceSCLink(html);
	html = replaceHTMLTechLink(html);
	html = replaceCSSTechLink(html);
	html = replaceARIARoleTechLink(html);
	html = replaceARIAPropTechLink(html);

	return html;
}

function replaceCheckItemLink(html: string) {
	return html.replaceAll(/[cmn]\d{3}/gi, (id) => {
		const item = checklist.find((item) => item.id === id);
		return item
			? `<a href="/${item.id.toLowerCase()}" title="${item.title}">${id}</a>`
			: id;
	});
}

function replaceSCLink(html: string) {
	return html.replaceAll(/sc(\d\.\d\.\d)/gi, (_, id) => {
		const sc = wcagSc(id, '2.2') ?? wcagSc(id, '2.1') ?? wcagSc(id, '2.0');
		return sc
			? `<a href="/${sc.ja.understanding}">WCAG達成基準 ${sc.ja.id} ${sc.ja.title} (レベル${sc.ja.level})</a>`
			: id;
	});
}

function replaceHTMLTechLink(html: string) {
	return html.replaceAll(
		// eslint-disable-next-line regexp/strict
		/html\/([a-z][\da-z]*(?:\|[a-z][\da-z]*)?)(\[[^\]]+])?(要素)?/gi,
		(_, selector, attr, suffix) => {
			const separated = selector.split('|');
			const _namespace = separated[0];
			const el = (separated[1] ?? _namespace).toLowerCase();
			const namespace = separated[1] ? _namespace.toUpperCase() : 'HTML';
			if (attr && el === 'input') {
				const { type } = attr.match(/type=["']?(?<type>[a-z]+)["']?/)?.groups ?? {};
				return `<a href="https://developer.mozilla.org/ja/docs/Web/HTML/Element/input/${type}" title="MDN: HTML input要素${type}タイプ"><code>${selector}${attr}</code>${suffix}</a>`;
			}
			attr = attr ?? '';
			suffix = suffix ?? '';
			return `<a href="https://developer.mozilla.org/ja/docs/Web/${namespace}/Element/${el}" title="MDN: ${namespace} ${el}要素"><code>${el}${attr}</code>${suffix}</a>`;
		},
	);
}

function replaceCSSTechLink(html: string) {
	return html.replaceAll(
		/css\/([a-z][\da-z-]*)(プロパティ)?/gi,
		(_, property, suffix) => {
			property = property.toLowerCase();
			suffix = suffix ?? '';
			return `<a href="https://developer.mozilla.org/ja/docs/Web/CSS/${property}" title="MDN: CSS ${property}プロパティ"><code>${property}</code>${suffix}</a>`;
		},
	);
}

function replaceARIARoleTechLink(html: string) {
	return html.replaceAll(/role\/([a-z][\da-z]*)(ロール)?/gi, (_, role, suffix) => {
		role = role.toLowerCase();
		suffix = suffix ?? '';
		return `<a href="https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/${role}_role" title="MDN: ARIA ${role}ロール"><code>${role}</code>${suffix}</a>`;
	});
}

function replaceARIAPropTechLink(html: string) {
	return html.replaceAll(
		/(?:aria\/)?(aria-[a-z][\da-z]*)(プロパティ|ステート|属性)?/gi,
		(_, property, suffix) => {
			property = property.toLowerCase();
			suffix = suffix ?? '';
			return `<a href="https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Attributes/${property}" title="MDN: ${property}属性"><code>${property}</code>${suffix}</a>`;
		},
	);
}
