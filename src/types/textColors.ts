export const TEXT_COLORS = [
	{ color: 'black-100', label: 'Black' },
	{ color: 'danger-100', label: 'Red' },
	{ color: 'white-100', label: 'White' },
	{ color: 'blue-100', label: 'Blue' },
	{ color: 'green-100', label: 'Green' },
] as const;

export type TextColorConfig = (typeof TEXT_COLORS)[number];
export type TextColor = TextColorConfig['color'];
