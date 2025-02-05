import { ChangeEvent, useEffect, useState } from 'react';

interface Props {
	onChange?: (value: string) => void;
}

export const TextArea = ({ onChange }: Props) => {
	const [value, setValue] = useState('');

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = e.target.value;
		setValue(newValue);

		onChange?.(newValue);
	};

	useEffect(() => {
		setValue(value);
	}, [value]);

	return (
		<textarea
			className="text-display h-full min-h-[7.5rem] w-full resize-none overflow-y-auto bg-transparent px-6 py-3 text-center leading-12 text-black-100 placeholder:opacity-50 focus-visible:outline-none"
			placeholder="Type your text here..."
			onChange={handleChange}
			value={value}
		/>
	);
};
