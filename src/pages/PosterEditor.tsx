import { MainTemplate } from '@/components/templates/MainTemplate';
import welcomeImage from '@/assets/canvas-default-img.png';
import { Editor } from '@/components/organisms/Editor';
import { usePosterContext } from '@/context/usePosterContext';
import { Poster } from '@/components/organisms/Poster';
import { PosterText } from '@/components/organisms/PosterText';
import { useRef } from 'react';
import { Draggable } from '@/components/molecules/Draggable';

export const PosterEditor = () => {
	const { background, image, texts, updateText, moveText, removeText } =
		usePosterContext();
	const posterRef = useRef<HTMLDivElement>(null);

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
					<Poster
						ref={posterRef}
						isEmptyBackground={isDrawingInitialized}
					>
						{texts.map(text => (
							<Draggable
								key={text.id}
								id={text.id}
								initialPosition={{ x: text.x, y: text.y }}
								onDrag={moveText}
								onRemove={() => removeText(text.id)}
							>
								<PosterText key={text.id} {...text} />
							</Draggable>
						))}
					</Poster>
				)}
			</div>
			<div className="flex aspect-[4/5] w-full max-w-[759px] bg-inherit">
				<Editor />
			</div>
		</MainTemplate>
	);
};
