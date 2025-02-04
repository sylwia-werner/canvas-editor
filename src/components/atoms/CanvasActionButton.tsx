import classNames from 'classnames';
import { ReactNode } from 'react';

interface Props {
	label: string;
	Icon: ReactNode;
	disabled?: boolean;
	children: ReactNode;
}

export const CanvasActionButton = ({
	label,
	Icon,
	disabled,
	children,
}: Props) => (
	<button
		className={classNames(
			'flex cursor-pointer flex-col items-center justify-center rounded-md bg-white-97 px-8 py-2 leading-6 text-black-100 hover:bg-black-25 hover:bg-white-97 focus:outline-4 focus:outline-primary-50 disabled:cursor-not-allowed',
			{ 'opacity-50': disabled },
		)}
		disabled={disabled}
	>
		<span className="text-black-75">{Icon}</span>
		<span className="text-btn text-body-medium">{label}</span>
		{children}
	</button>
);
