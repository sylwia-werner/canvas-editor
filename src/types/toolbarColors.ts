export const TOOLBAR_COLORS = [
	{ color: 'text-black-100', bgColor: 'bg-black-100', label: 'Black' },
	{ color: 'text-danger-100', bgColor: 'bg-danger-100', label: 'Red' },
	{ color: 'text-white-100', bgColor: 'bg-white-100', label: 'White' },
	{ color: 'text-blue-100', bgColor: 'bg-blue-100', label: 'Blue' },
	{ color: 'text-green-100', bgColor: 'bg-green-100', label: 'Green' },
] as const;

export type TextColorConfig = (typeof TOOLBAR_COLORS)[number];
export type TextColor = TextColorConfig['color'];
export type BgColor = TextColorConfig['bgColor'];
