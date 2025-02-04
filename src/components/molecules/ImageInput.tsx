import { ActionButton } from '@/components/atoms/buttons/ActionButton';
import { BaseButtonProps } from '@/components/atoms/buttons/BaseButton';
import { ChangeEvent, useRef } from 'react';

interface Props extends BaseButtonProps {
	setImageFile: (image: string) => void;
	disabled?: boolean;
}

export const ImageInput = ({
	setImageFile,
	label,
	Icon,
	disabled,
}: Omit<Props, 'onClick'>) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setImageFile(URL.createObjectURL(e.target.files[0]));
		}
	};
	return (
		<>
			<ActionButton
				label={label}
				Icon={Icon}
				onClick={() => inputRef.current?.click()}
				disabled={disabled}
			/>

			<input
				ref={inputRef}
				className="hidden"
				type="file"
				accept="image/*"
				onChange={handleChange}
				disabled={disabled}
			/>
		</>
	);
};
