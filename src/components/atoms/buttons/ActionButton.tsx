import {
	BaseButton,
	BaseButtonProps,
} from '@/components/atoms/buttons/BaseButton';

export const ActionButton = (props: Omit<BaseButtonProps, 'className'>) => {
	return (
		<BaseButton
			className="text-body-medium flex cursor-pointer flex-col-reverse items-center justify-center gap-6 rounded-md bg-white-97 px-8 py-2 leading-6 focus:outline-4 focus:outline-primary-50 enabled:hover:bg-black-25 disabled:cursor-not-allowed disabled:text-black-100 disabled:opacity-50"
			{...props}
		/>
	);
};
