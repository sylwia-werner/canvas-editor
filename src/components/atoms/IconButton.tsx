import classNames from 'classnames';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLDivElement> {
	Icon: ReactNode;
	label: string;
	className?: string;
}

export const IconButton = ({ Icon, label, className, ...rest }: Props) => {
	return (
		<div
			className={classNames(
				'w-fit cursor-pointer touch-none rounded-full bg-white',
				{
					[className || '']: className,
				},
			)}
			role="button"
			{...rest}
		>
			<span className="hidden">{label}</span>
			{Icon}
		</div>
	);
};
