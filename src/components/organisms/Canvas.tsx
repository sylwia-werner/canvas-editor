import { TextElement } from '@/context/usePosterContext';
import { drawCanvas } from '@/utils/canvasHelper';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';

interface Props {
	background: string | null;
	image: string | null;
	texts: TextElement[];
	isEmptyBackground?: boolean;
}

export const Canvas = ({
	background,
	image,
	texts,
	isEmptyBackground = false,
}: Props) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (!canvasRef.current) return;
		const ctx = canvasRef.current.getContext('2d');

		if (ctx) drawCanvas(ctx, background, image, texts);
	}, [background, image, texts]);

	return (
		<canvas
			ref={canvasRef}
			width={759}
			height={948}
			className={classNames('h-full w-full', {
				'bg-black-50': isEmptyBackground,
			})}
		/>
	);
};
