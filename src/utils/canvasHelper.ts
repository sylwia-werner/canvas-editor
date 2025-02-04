import { TextElement } from '@/context/usePosterContext';

type DrawFunction = (ctx: CanvasRenderingContext2D) => Promise<void>;

const createBackgroundDrawer = (src: string): DrawFunction => {
	return async (ctx: CanvasRenderingContext2D) => {
		const img = new Image();
		img.src = src;
		await new Promise<void>(resolve => {
			img.onload = () => {
				ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
				resolve();
			};
		});
	};
};

const createImageDrawer = (src: string): DrawFunction => {
	return async (ctx: CanvasRenderingContext2D) => {
		const img = new Image();
		img.src = src;

		await new Promise<void>(resolve => {
			img.onload = () => {
				ctx.drawImage(img, 50, 50, 300, 300);
				resolve();
			};
		});
	};
};

const createTextDrawer = (textElement: TextElement): DrawFunction => {
	return async (ctx: CanvasRenderingContext2D) => {
		const { text, x, y, color, fontSize } = textElement;
		ctx.fillStyle = color;
		ctx.font = `${fontSize}px Arial`;
		ctx.fillText(text, x, y);
	};
};

export const drawCanvas = async (
	ctx: CanvasRenderingContext2D,
	background: string | null,
	image: string | null,
	texts: TextElement[],
) => {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	const drawers: DrawFunction[] = [
		...(background ? [createBackgroundDrawer(background)] : []),
		...(image ? [createImageDrawer(image)] : []),
		...texts.map(createTextDrawer),
	];

	for (const draw of drawers) {
		await draw(ctx);
	}
};
