import type { A11YChecklist } from '@d-zero/a11y-checklist';

import a11YChecklist from '@d-zero/a11y-checklist/json';

export function getChecklist() {
	return (a11YChecklist as A11YChecklist)
		.map((item) => (item.id ? item : null))
		.filter((item): item is NonNullable<typeof item> => !!item);
}
