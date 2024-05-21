import { getChecklist } from './checklist';
import { md2html } from './markdown';

const checklist = getChecklist();

export async function getCheckItem(id: string) {
	const item = checklist.find((item) => item.id.toLowerCase() === id.toLowerCase());

	if (!item) {
		return null;
	}

	const check = item.check ? await md2html(item.check) : null;
	const checkDevOps = item.checkDevOps ? md2html(item.checkDevOps) : null;

	return {
		...item,
		check,
		checkDevOps,
	};
}
