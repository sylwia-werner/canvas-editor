import classNames from 'classnames';
import { ReactNode } from 'react';

export interface BaseButtonProps {
	label: string;
	onClick: () => void;
	disabled?: boolean;
	Icon?: ReactNode;
	className?: string;
}

export const BaseButton = ({
	label,
	onClick,
	disabled,
	Icon,
	className,
}: BaseButtonProps) => {
	return (
		<button
			className={classNames(
				'text-btn flex cursor-pointer items-center gap-2 disabled:cursor-not-allowed',
				{ [className || '']: className },
			)}
			type="button"
			onClick={onClick}
			disabled={disabled}
		>
			{label} {Icon && <span>{Icon}</span>}
		</button>
	);
};
