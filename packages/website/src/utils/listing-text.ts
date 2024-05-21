export function listingText(list: readonly string[]) {
	if (list.length === 0) {
		return 'なし';
	}
	const clone = [...list];
	const last = clone.pop();
	return clone.length > 0 ? `${clone.join('、')}、または${last}` : last;
}
