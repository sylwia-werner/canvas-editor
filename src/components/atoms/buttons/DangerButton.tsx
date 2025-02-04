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
				'relative bg-inherit text-danger after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-danger after:content-[""] disabled:bg-black-25 disabled:text-white',
				{ 'after:bg-white': disabled },
			)}
			{...props}
		/>
	);
};
