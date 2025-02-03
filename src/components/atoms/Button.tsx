import classNames from 'classnames';
import { ReactNode } from 'react';

export interface Props {
	label: ReactNode;
	onClick: () => void;
	disabled?: boolean;
	Icon?: ReactNode;
	variant?: 'primary' | 'danger';
}

export const Button = ({
	label,
	onClick,
	disabled,
	Icon,
	variant = 'primary',
}: Props) => {
	return (
		<button
			className={classNames(
				'text-btn flex cursor-pointer items-center gap-2 disabled:cursor-not-allowed disabled:bg-black-25 disabled:text-white',
				{ 'btn-primary': variant === 'primary' },
				{ 'btn-danger': variant === 'danger' },
				{ 'after:bg-white': variant === 'danger' && disabled },
			)}
			type="button"
			onClick={onClick}
			disabled={disabled}
		>
			{label} {Icon && <span>{Icon}</span>}
		</button>
	);
};
