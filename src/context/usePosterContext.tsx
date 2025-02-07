import { TextColor } from '@/types/toolbarColors';
import { createContext, ReactNode, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface DraggableElement {
	id: string;
	x: number;
	y: number;
}

export interface TextElement extends DraggableElement {
	text: string;
	color: TextColor;
	fontSize: number;
}

export interface ImageElement extends DraggableElement {
	src: string;
	scale: number;
}

interface MemeContextType {
	background: string | null;
	setBackground: (image: string | null) => void;
	texts: TextElement[];
	addText: () => void;
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
			color: 'text-black-100',
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

	const removeText = (id: string) => {
		setTexts(prev => prev.filter(text => text.id !== id));
	};

	return (
		<PosterContext.Provider
			value={{
				background,
				setBackground,
				texts,
				addText,
				removeText,
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
