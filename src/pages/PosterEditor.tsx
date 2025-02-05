import { MainTemplate } from '@/components/templates/MainTemplate';
import welcomeImage from '@/assets/canvas-default-img.png';
import { Editor } from '@/components/organisms/Editor';
import { usePosterContext } from '@/context/usePosterContext';
import { Poster } from '@/components/organisms/Poster';
import { PosterText } from '@/components/molecules/PosterText';
import { useRef } from 'react';
import { Draggable } from '@/components/organisms/Draggable';

const INITIAL_TEXTAREA_SIZE = { width: 350, height: 120 };
const INITIAL_IMAGE_SIZE = { width: 150, height: 150 };

export const PosterEditor = () => {
	const { background, images, texts, removeText, removeImage } =
		usePosterContext();
	const canvasRef = useRef<HTMLDivElement | null>(null);

	const shouldShowWelcomeImage =
		!background && !images.length && !texts.length;

	const isDrawingInitialized = !!(
		!background &&
		(images.length || texts.length)
	);

	return (
		<MainTemplate>
			<div
				className="flex aspect-[4/5] w-full max-w-[759px]"
				ref={canvasRef}
			>
				{shouldShowWelcomeImage ? (
					<img
						src={welcomeImage}
						alt="Create your own Poster! It's so simple. Start creating your own poster by clicking one of the action buttons located on the right"
						className="h-full w-full"
					/>
				) : (
					<Poster
						background={background || undefined}
						isEmptyBackground={isDrawingInitialized}
					>
						{texts.map(text => (
							<Draggable
								key={text.id}
								id={text.id}
								initialPosition={{ x: text.x, y: text.y }}
								onRemove={() => removeText(text.id)}
								initialSize={INITIAL_TEXTAREA_SIZE}
							>
								<PosterText
									key={text.id}
									initialTextColor={text.color}
									{...text}
								/>
							</Draggable>
						))}

						{images.map(image => (
							<Draggable
								key={image.id}
								id={image.id}
								initialPosition={{ x: image.x, y: image.y }}
								onRemove={() => removeImage(image.id)}
								initialSize={INITIAL_IMAGE_SIZE}
							>
								<img
									src={image.src}
									alt="Image"
									className="h-full w-full object-cover"
								/>
							</Draggable>
						))}
					</Poster>
				)}
			</div>
			<div className="flex aspect-[4/5] w-full max-w-[759px] bg-inherit">
				<Editor canvasRef={canvasRef} />
			</div>
		</MainTemplate>
	);
};
