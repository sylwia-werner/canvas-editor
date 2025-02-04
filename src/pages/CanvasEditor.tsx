import { MainTemplate } from '@/components/templates/MainTemplate';
import welcomeImage from '@/assets/canvas-default-img.png';
import { Editor } from '@/components/organisms/Editor';
import { Canvas } from '@/components/organisms/Canvas';
import { usePosterContext } from '@/context/usePosterContext';

export const CanvasEditor = () => {
	const { background, image, texts } = usePosterContext();

	const shouldShowWelcomeImage = !background && !image && !texts.length;
	const isDrawingInitialized = !!(!background && (image || texts.length));

	return (
		<MainTemplate>
			<div className="flex aspect-[4/5] w-full max-w-[759px]">
				{shouldShowWelcomeImage ? (
					<img
						src={welcomeImage}
						alt="Create your own Poster! It's so simple. Start creating your own poster by clicking one of the action buttons located on the right"
						className="h-full w-full"
					/>
				) : (
					<Canvas
						isEmptyBackground={isDrawingInitialized}
						background={background}
						image={image}
						texts={texts}
					/>
				)}
			</div>
			<div className="flex aspect-[4/5] w-full max-w-[759px] bg-inherit">
				<Editor />
			</div>
		</MainTemplate>
	);
};
