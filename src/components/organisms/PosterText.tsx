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
	bounds?: { width: number; height: number };
}

export const PosterText = ({ id, bounds }: Props) => {
	const { updateText, moveText, removeText, texts } = usePosterContext();
	const posterTextRef = useRef<HTMLDivElement>(null);
	const [elementSize, setElementSize] = useState({ width: 0, height: 0 });
	const currentElement = texts.find(text => text.id === id);

	const [position, setPosition] = useState({
		x: currentElement?.x || 0,
		y: currentElement?.y || 0,
	});
	const [scale, setScale] = useState(1);

	if (!currentElement) {
		// return null;
		throw new Error('Element not found');
		return;
	}

	useEffect(() => {
		if (posterTextRef.current) {
			const { width, height } =
				posterTextRef.current.getBoundingClientRect();
			setElementSize({ width, height });
		}
	}, []);

	const handleDrag = ({ x, y }: { x: number; y: number }) => {
		setPosition({ x, y });
		moveText(id, x, y);
	};

	const adjustedBounds = bounds
		? {
				width: bounds.width - elementSize.width,
				height: bounds.height - elementSize.height,
			}
		: undefined;

	return (
		<div
			ref={posterTextRef}
			style={{
				transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
				position: 'absolute',
				touchAction: 'none',
				// color: currentElement.color,
				// fontSize: `${currentElement.fontSize}px`,
			}}
		>
			<Draggable
				onDrag={handleDrag}
				onRemove={() => removeText(id)}
				bounds={adjustedBounds}
			>
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
			</Draggable>
		</div>
	);
};
