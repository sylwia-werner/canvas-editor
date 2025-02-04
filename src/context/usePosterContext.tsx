import { createContext, ReactNode, useContext, useState } from 'react';

interface MemeContextType {
	background: string | null;
	image: string | null;
	setBackground: (image: string | null) => void;
	setImage: (image: string | null) => void;
	text: string | null;
	setText: (text: string | null) => void;
	reset: () => void;
}

interface Args {
	children: ReactNode;
}

const PosterContext = createContext<MemeContextType | undefined>(undefined);

export const PosterProvider = ({ children }: Args) => {
	const [background, setBackground] = useState<string | null>(null);
	const [image, setImage] = useState<string | null>(null);
	const [text, setText] = useState<string | null>(null);

	// const addText = (text: TextStyle) => {
	// 	setTexts(prev => [...prev, text]);
	// };

	const reset = () => {
		setBackground(null);
		setImage(null);
		setText(null);
	};

	return (
		<PosterContext.Provider
			value={{
				image,
				setImage,
				setBackground,
				background,
				text,
				setText,
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
