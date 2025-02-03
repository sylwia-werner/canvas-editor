import { MainTemplate } from '@/components/templates/MainTemplate';
import welcomeImage from '@/assets/canvas-default-img.png';

export const CanvasEditor = () => {
	// TODO: Hook for canvas context
	const image = 'image';

	const isImageSelected = !!image;
	return (
		<MainTemplate>
			<div className="flex aspect-[4/5] w-full max-w-[759px]">
				{isImageSelected ? (
					<img
						src={welcomeImage}
						alt="Create your own Poster! It's so simple. Start creating your own poster by clicking one of the action buttons located on the right"
						className="h-full w-full"
					/>
				) : (
					<div>Canvas</div>
				)}
			</div>
			<div className="flex aspect-[4/5] w-full max-w-[759px] bg-gray-300">
				Editor
			</div>
		</MainTemplate>
	);
};
// {
