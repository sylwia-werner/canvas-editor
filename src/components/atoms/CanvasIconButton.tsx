import classNames from 'classnames';
import { ReactNode } from 'react';

interface Props {
	Icon: ReactNode;
	onClick: () => void;
	label: string;
	className?: string;
}

export const CanvasIconButton = ({
	Icon,
	onClick,
	label,
	className,
}: Props) => {
	return (
		<div
			role="button"
			onClick={onClick}
			className={classNames(
				'w-fit cursor-pointer rounded-full bg-white',
				{
					[className || '']: className,
				},
			)}
		>
			<span className="hidden">{label}</span>
			{Icon}
		</div>
	);
};
