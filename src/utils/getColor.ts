import { TextColor } from '@/types/textColors';

export const getBackgroundColor = (color: TextColor) => `bg-${color}`;
export const getTextColor = (color: TextColor) => `text-${color}`;
