import {
	BaseButton,
	BaseButtonProps,
} from '@/components/atoms/buttons/BaseButton';
import classNames from 'classnames';

export const DangerButton = (props: Omit<BaseButtonProps, 'className'>) => {
	const { disabled } = props;

	return (
		<BaseButton
			className={classNames(
				'relative bg-inherit text-danger-100 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-danger-100 after:content-[""] disabled:bg-black-25 disabled:text-white-100',
				{ 'after:bg-white': disabled },
			)}
			{...props}
		/>
	);
};
