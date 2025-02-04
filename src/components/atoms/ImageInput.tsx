import classNames from 'classnames';
import { ChangeEvent, ReactNode, useRef } from 'react';

interface Props {
	label: string;
	Icon: ReactNode;
	setImage: (image: string | null) => void;
	disabled?: boolean;
}

export const ImageInput = ({ label, Icon, setImage, disabled }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setImage(URL.createObjectURL(e.target.files[0]));
		}
	};

	const handleClick = () => {
		inputRef.current?.click();
	};

	return (
		<>
			<button
				className={classNames(
					'flex cursor-pointer flex-col items-center justify-center rounded-md bg-white-97 px-8 py-2 leading-6 text-black-100 hover:bg-black-25 hover:bg-white-97 focus:outline-4 focus:outline-primary-50 disabled:cursor-not-allowed',
					{ 'opacity-50': disabled },
				)}
				onClick={handleClick}
				disabled={disabled}
			>
				<span className="text-black-75">{Icon}</span>
				<span className="text-btn text-body-medium">{label}</span>
			</button>

			<input
				className="hidden"
				ref={inputRef}
				type="file"
				accept="image/*"
				onChange={handleChange}
				disabled={disabled}
			/>
		</>
	);
};
