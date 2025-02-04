import { CanvasColorButton } from '@/components/atoms/CanvasColorButton';
import { TextArea } from '@/components/atoms/Textarea';
import { Draggable } from '@/components/molecules/Draggable';
import { usePosterContext } from '@/context/usePosterContext';

// const COLORS_CONFIG = {
// 	black: {
// 		label: 'Black',
// 		color: 'black-100',
// 		onClick: () => setTextColor('black'),
// 	},
// };

export const CanvasText = () => {
	// const { updateText, moveText } = usePosterContext();

	return (
		<Draggable>
			<TextArea onChange={} />
			<div className="absolute -bottom-6 left-0 flex gap-3">
				<CanvasColorButton
					color="bg-black-100"
					label="Black"
					onClick={() => console.log('COLOR')}
					isSelected
				/>
				<CanvasColorButton
					color="bg-white"
					label="White"
					onClick={() => console.log('COLOR')}
					isSelected
				/>
				<CanvasColorButton
					color="bg-danger"
					label="Red"
					onClick={() => console.log('COLOR')}
					isSelected
				/>
				<CanvasColorButton
					color="bg-blue"
					label="Blue"
					onClick={() => console.log('COLOR')}
					isSelected
				/>
				<CanvasColorButton
					color="bg-green"
					label="Green"
					onClick={() => console.log('COLOR')}
					isSelected
				/>
			</div>
		</Draggable>
	);
};
