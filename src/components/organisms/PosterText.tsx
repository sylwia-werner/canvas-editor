import { ColorButton } from '@/components/atoms/ColorButton';
import { TextArea } from '@/components/atoms/Textarea';
import { Draggable } from '@/components/molecules/Draggable';
import { usePosterContext } from '@/context/usePosterContext';
import { useGesture } from '@use-gesture/react';
import { useEffect, useRef, useState } from 'react';

// const COLORS_CONFIG = {
// 	black: {
// 		label: 'Black',
// 		color: 'black-100',
// 		onClick: () => setTextColor('black'),
// 	},
// };

interface Props {
	id: string;
}

export const PosterText = ({ id }: Props) => {
	const { updateText, moveText, removeText, texts } = usePosterContext();
	const currentElement = texts.find(text => text.id === id);

	const [scale, setScale] = useState(1);

	return (
		<>
			<TextArea onChange={value => updateText(id, value)} />

			<div className="absolute -bottom-6 left-0 flex gap-3">
				<ColorButton
					color="bg-black-100"
					label="Black"
					onClick={() => console.log('COLOR')}
					isSelected
				/>
				<ColorButton
					color="bg-white"
					label="White"
					onClick={() => console.log('COLOR')}
					isSelected
				/>
				<ColorButton
					color="bg-danger"
					label="Red"
					onClick={() => console.log('COLOR')}
					isSelected
				/>
				<ColorButton
					color="bg-blue"
					label="Blue"
					onClick={() => console.log('COLOR')}
					isSelected
				/>
				<ColorButton
					color="bg-green"
					label="Green"
					onClick={() => console.log('COLOR')}
					isSelected
				/>
			</div>
		</>
	);
};
