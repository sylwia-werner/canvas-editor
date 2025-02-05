import { TextColor } from '@/types/textColors';
import { createContext, ReactNode, useContext, useId, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface TextElement {
	id: string;
	text: string;
	x: number;
	y: number;
	color: TextColor;
	fontSize: number;
}

interface MemeContextType {
	background: string | null;
	image: string | null;
	texts: TextElement[];
	setBackground: (image: string | null) => void;
	setImage: (image: string | null) => void;
	addText: () => void;
	updateText: (id: string, newText: string) => void;
	moveText: (id: string, x: number, y: number) => void;
	changeTextColor: (id: string, color: TextColor) => void;
	removeText: (id: string) => void;
	reset: () => void;
}

interface Args {
	children: ReactNode;
}

const PosterContext = createContext<MemeContextType | undefined>(undefined);

export const PosterProvider = ({ children }: Args) => {
	const [background, setBackground] = useState<string | null>(null);
	const [image, setImage] = useState<string | null>(null);
	const [texts, setTexts] = useState<TextElement[]>([]);

	const reset = () => {
		setBackground(null);
		setImage(null);
		setTexts([]);
	};

	const addText = () => {
		const newText: TextElement = {
			id: uuidv4(),
			text: 'New Text',
			x: 50,
			y: 50,
			color: 'black-100',
			fontSize: 24,
		};
		setTexts(prev => [...prev, newText]);
	};

	const updateText = (id: string, newText: string) => {
		setTexts(prev =>
			prev.map(text =>
				text.id === id ? { ...text, text: newText } : text,
			),
		);
	};

	const removeText = (id: string) => {
		setTexts(prev => prev.filter(text => text.id !== id));
	};

	const moveText = (id: string, x: number, y: number) => {
		setTexts(prev =>
			prev.map(text => (text.id === id ? { ...text, x, y } : text)),
		);
	};

	const changeTextColor = (id: string, color: TextColor) => {
		setTexts(prev =>
			prev.map(text => (text.id === id ? { ...text, color } : text)),
		);
	};

	return (
		<PosterContext.Provider
			value={{
				background,
				image,
				texts,
				setBackground,
				setImage,
				addText,
				updateText,
				moveText,
				removeText,
				changeTextColor,
				reset,
			}}
		>
			{children}
		</PosterContext.Provider>
	);
};

export const usePosterContext = () => {
	const context = useContext(PosterContext);
	if (!context) {
		throw new Error(
			'usePosterContext must be used within a PosterProvider',
		);
	}
	return context;
};
