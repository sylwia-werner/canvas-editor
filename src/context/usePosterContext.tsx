import { createContext, ReactNode, useContext, useId, useState } from 'react';

export interface TextElement {
	id: string;
	text: string;
	x: number;
	y: number;
	color: string;
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
	const id = useId();

	const reset = () => {
		setBackground(null);
		setImage(null);
		setTexts([]);
	};

	const addText = () => {
		const newText: TextElement = {
			id,
			text: 'New Text',
			x: 50,
			y: 50,
			color: '#000',
			fontSize: 24,
		};
		setTexts(prev => [...prev, newText]);
	};

	const updateText = (id: string, newText: string) => {
		setTexts(prev =>
			prev.map(t => (t.id === id ? { ...t, text: newText } : t)),
		);
	};

	const moveText = (id: string, x: number, y: number) => {
		setTexts(prev => prev.map(t => (t.id === id ? { ...t, x, y } : t)));
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
