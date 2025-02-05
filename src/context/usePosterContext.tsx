import { TextColor } from '@/types/textColors';
import { createContext, ReactNode, useContext, useId, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface TextElement {
	id: string;
	// TODO: remove text
	text: string;
	x: number;
	y: number;
	color: TextColor;
	// TODO: remove fontSize
	fontSize: number;
}

export interface ImageElement {
	id: string;
	src: string;
	x: number;
	y: number;
	scale: number;
}

interface MemeContextType {
	background: string | null;
	texts: TextElement[];
	setBackground: (image: string | null) => void;
	addText: () => void;
	// moveText: (id: string, x: number, y: number) => void;
	changeTextColor: (id: string, color: TextColor) => void;
	removeText: (id: string) => void;

	images: ImageElement[];
	addImage: (src: string) => void;
	removeImage: (id: string) => void;

	reset: () => void;
}

interface Args {
	children: ReactNode;
}

const PosterContext = createContext<MemeContextType | undefined>(undefined);

export const PosterProvider = ({ children }: Args) => {
	const [background, setBackground] = useState<string | null>(null);
	const [images, setImages] = useState<ImageElement[]>([]);

	const [texts, setTexts] = useState<TextElement[]>([]);

	const reset = () => {
		setBackground(null);
		setImages([]);
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

	const addImage = (src: string) => {
		const newImage: ImageElement = {
			id: uuidv4(),
			src,
			x: 50,
			y: 50,
			scale: 1,
		};
		setImages(prev => [...prev, newImage]);
	};

	const removeImage = (id: string) => {
		setImages(prev => prev.filter(img => img.id !== id));
	};

	// const updateText = (id: string, newText: string) => {
	// 	setTexts(prev =>
	// 		prev.map(text =>
	// 			text.id === id ? { ...text, text: newText } : text,
	// 		),
	// 	);
	// };

	const removeText = (id: string) => {
		setTexts(prev => prev.filter(text => text.id !== id));
	};

	// const moveText = (id: string, x: number, y: number) => {
	// 	setTexts(prev =>
	// 		prev.map(text => (text.id === id ? { ...text, x, y } : text)),
	// 	);
	// };

	const changeTextColor = (id: string, color: TextColor) => {
		setTexts(prev =>
			prev.map(text => (text.id === id ? { ...text, color } : text)),
		);
	};

	return (
		<PosterContext.Provider
			value={{
				background,
				texts,
				setBackground,

				addText,
				// moveText,
				removeText,
				changeTextColor,

				images,
				addImage,
				removeImage,
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
