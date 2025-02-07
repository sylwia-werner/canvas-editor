import { ColorButton } from '@/components/atoms/ColorButton';
import { TextArea } from '@/components/atoms/Textarea';
import { TOOLBAR_COLORS, TextColor } from '@/types/toolbarColors';
import { useState } from 'react';

interface Props {
	initialTextColor: TextColor;
}

export const PosterText = ({ initialTextColor }: Props) => {
	const [currentTextColor, setCurrentTextColor] = useState(initialTextColor);

	return (
		<>
			<TextArea textColor={currentTextColor} />

			<div className="absolute -bottom-6 left-0 flex gap-3">
				{TOOLBAR_COLORS.map(({ color, bgColor, label }) => (
					<ColorButton
						key={label}
						color={bgColor}
						label={label}
						onClick={() => setCurrentTextColor(color)}
						isSelected={currentTextColor === color}
					/>
				))}
			</div>
		</>
	);
};
