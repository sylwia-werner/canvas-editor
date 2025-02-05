import { ColorButton } from '@/components/atoms/ColorButton';
import { TextArea } from '@/components/atoms/Textarea';
import { TEXT_COLORS, TextColor } from '@/types/textColors';
import { getBackgroundColor, getTextColor } from '@/utils/getColor';

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
	return (
		<>
			<TextArea textColor={getTextColor(currentTextColor)} />

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
