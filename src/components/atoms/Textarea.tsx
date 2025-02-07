import classNames from 'classnames';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

interface Props {
	textColor: string;
}

export const TextArea = ({ textColor }: Props) => {
	const [value, setValue] = useState('');
	const [fontSize, setFontSize] = useState(2);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = e.target.value;
		setValue(newValue);
	};

	const computeFontSize = (height: number) => {
		const computed = height / 100;
		const clamped = Math.min(4, Math.max(2, computed));

		return clamped;
	};

	useEffect(() => {
		if (!textareaRef.current) return;

		const resizeObserver = new ResizeObserver(entries => {
			const { height } = entries[0].contentRect;
			const newFontSize = computeFontSize(height);

			setFontSize(newFontSize);
		});

		resizeObserver.observe(textareaRef.current);

		return () => resizeObserver.disconnect();
	}, [textareaRef]);

	useEffect(() => {
		setValue(value);
	}, [value]);

	return (
		<textarea
			ref={textareaRef}
			className={classNames(
				'text-display h-full min-h-[7.5rem] w-full resize-none overflow-y-auto bg-transparent px-6 py-3 text-center leading-12 placeholder:opacity-50 focus-visible:outline-none',
				textColor || 'text-black-100',
			)}
			placeholder="Type your text here..."
			onChange={handleChange}
			style={{
				fontSize: `${fontSize}rem`,
				lineHeight: fontSize > 3 ? '5rem' : '3rem',
			}}
			value={value}
		/>
	);
};
