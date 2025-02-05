import {
	BaseButton,
	BaseButtonProps,
} from '@/components/atoms/buttons/BaseButton';

export const PrimaryButton = (props: Omit<BaseButtonProps, 'className'>) => (
	<BaseButton
		className="rounded-sm bg-primary px-8 py-2 leading-6 text-white-100 hover:bg-primary-dark focus:outline-2 focus:outline-primary-50 disabled:bg-black-25 disabled:text-white"
		{...props}
	/>
);
