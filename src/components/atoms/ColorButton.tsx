import { CONFIG_EXCLUDE_EXPORT_CLASS } from '@/constants';
import classNames from 'classnames';

interface Props {
	color: string;
	label: string;
	isSelected: boolean;
	onClick: () => void;
}

export const ColorButton = ({ color, label, isSelected, onClick }: Props) => {
	return (
		<button
			className={classNames(
				'h-4 w-4 cursor-pointer rounded-full',
				{ 'ring-2 ring-white ring-offset-2': isSelected },
				color || 'bg-black-75',
				{
					[`${CONFIG_EXCLUDE_EXPORT_CLASS}`]: true,
				},
			)}
			onClick={onClick}
		>
			<span className="hidden">{label}</span>
		</button>
	);
};
