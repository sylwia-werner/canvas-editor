import { ColorButton } from '@/components/atoms/ColorButton';
import { TextArea } from '@/components/atoms/Textarea';
import { usePosterContext } from '@/context/usePosterContext';
import { TEXT_COLORS, TextColor } from '@/types/textColors';
import { getBackgroundColor } from '@/utils/getColor';

interface Props {
	id: string;
	changeTextColor: (id: string, color: TextColor) => void;
	currentTextColor: TextColor;
}

export const PosterText = ({
	id,
	changeTextColor,
	currentTextColor,
}: Props) => {
	const { updateText, texts } = usePosterContext();

	return (
		<>
			<TextArea
				onChange={value => updateText(id, value)}
				textColor={currentTextColor}
			/>

			<div className="absolute -bottom-6 left-0 flex gap-3">
				{TEXT_COLORS.map(({ color, label }) => (
					<ColorButton
						key={color}
						color={getBackgroundColor(color)}
						label={label}
						onClick={() => changeTextColor(id, color)}
						isSelected={currentTextColor === color}
					/>
				))}
			</div>
		</>
	);
};
