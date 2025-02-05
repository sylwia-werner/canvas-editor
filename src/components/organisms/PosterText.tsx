import { ColorButton } from '@/components/atoms/ColorButton';
import { TextArea } from '@/components/atoms/Textarea';
import { TEXT_COLORS, TextColor } from '@/types/textColors';
import { getBackgroundColor, getTextColor } from '@/utils/getColor';
import { useState } from 'react';

interface Props {
	initialTextColor: TextColor;
}

export const PosterText = ({ initialTextColor }: Props) => {
	const [currentTextColor, setCurrentTextColor] = useState(initialTextColor);

	return (
		<>
			<TextArea textColor={getTextColor(currentTextColor)} />

			<div className="absolute -bottom-6 left-0 flex gap-3">
				{TEXT_COLORS.map(({ color, label }) => (
					<ColorButton
						key={color}
						color={getBackgroundColor(color)}
						label={label}
						onClick={() => setCurrentTextColor(color)}
						isSelected={currentTextColor === color}
					/>
				))}
			</div>
		</>
	);
};
