import { ActionButton } from '@/components/atoms/buttons/ActionButton';
import { DangerButton } from '@/components/atoms/buttons/DangerButton';
import { PrimaryButton } from '@/components/atoms/buttons/PrimaryButton';
import { Hr } from '@/components/atoms/Hr';
import { BackgroundIcon } from '@/components/atoms/icons/BackgroundIcon';
import { ImagesIcon } from '@/components/atoms/icons/ImagesIcon';
import { LogoIcon } from '@/components/atoms/icons/LogoIcon';
import { ResetIcon } from '@/components/atoms/icons/ResetIcon';
import { TextIcon } from '@/components/atoms/icons/TextIcon';
import { ImageInput } from '@/components/molecules/ImageInput';
import { usePosterContext } from '@/context/usePosterContext';

export const Editor = () => {
	const { setImage, setBackground, addText, reset } = usePosterContext();

	const exportToPNG = () => {
		const canvas = document.querySelector('canvas');
		if (!canvas) return;
		const link = document.createElement('a');
		link.href = canvas.toDataURL();
		link.download = 'poster.png';
		link.click();
	};

	return (
		<div className="flex w-full flex-col gap-8">
			<div className="flex flex-col items-center justify-between sm:flex-row">
				<div className="flex flex-col items-center gap-3 sm:flex-row">
					<LogoIcon size={64} className="text-primary" />
					<h1 className="text-display">Canvas Editor</h1>
				</div>
				<div className="mt-3 sm:mt-0">
					<DangerButton
						label="Reset"
						onClick={reset}
						Icon={<ResetIcon />}
					/>
				</div>
			</div>
			<Hr />

			{/* <CanvasText /> */}

			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
				<ActionButton
					label="Text"
					Icon={<TextIcon size={128} className="text-black-75" />}
					onClick={addText}
				/>
				<ImageInput
					label="Image"
					Icon={<ImagesIcon size={128} className="text-black-75" />}
					setImageFile={setImage}
				/>
				<ImageInput
					label="Background"
					Icon={
						<BackgroundIcon size={128} className="text-black-75" />
					}
					setImageFile={setBackground}
				/>
			</div>

			<div className="mt-auto flex flex-col gap-8">
				<Hr />
				<div className="w-fit self-center sm:self-end">
					<PrimaryButton
						label="Export to png"
						onClick={exportToPNG}
					/>
				</div>
			</div>
		</div>
	);
};
