import { IconButton } from '@/components/atoms/IconButton';
import { DeleteIcon } from '@/components/atoms/icons/DeleteIcon';
import { MoveIcon } from '@/components/atoms/icons/MoveIcon';
import { useDrag } from '@use-gesture/react';
import { ReactNode } from 'react';
import { useSpring, animated } from 'react-spring';

interface Props {
	id: string;
	children: ReactNode;
	onDrag: (id: string, x: number, y: number) => void;
	onRemove: () => void;
	bounds?: { width: number; height: number };
	initialPosition: { x: number; y: number };
}

export const Draggable = ({
	id,
	children,
	onDrag,
	onRemove,
	bounds,
	initialPosition,
}: Props) => {
	const [{ x, y, width, height }, api] = useSpring(() => ({
		x: initialPosition.x,
		y: initialPosition.y,
		// TODO: Refactor
		width: 350,
		height: 120,
	}));

	const bindMove = useDrag(
		({ offset: [dx, dy] }) => {
			api.set({
				x: dx,
				y: dy,
			});

			onDrag(id, dx, dy);
		},
		{
			from: () => [x.get(), y.get()],
			bounds: {
				left: 0,
				top: 0,
				right: bounds?.width ? bounds.width - width.get() : 0,
				bottom: bounds?.height ? bounds.height - height.get() : 0,
			},
		},
	);

	const bindResize = useDrag(
		({ offset: [dx, dy] }) => {
			api.set({
				width: dx,
				height: dy,
			});
		},
		{
			from: () => [width.get(), height.get()],
			bounds: {
				// TODO: Refactor
				top: 120,
				left: 350,
				right: bounds?.width ? bounds.width - x.get() : 0,
				bottom: bounds?.height ? bounds.height - y.get() : 0,
			},
		},
	);

	return (
		<animated.div
			style={{
				x,
				y,
				width,
				height,
				position: 'absolute',
			}}
			className="absolute w-fit outline-2 outline-primary"
		>
			<IconButton
				className="absolute -top-5 -left-5 cursor-grab touch-none select-none active:cursor-grabbing"
				Icon={
					<div className="p-1">
						<MoveIcon size={32} className="text-primary" />
					</div>
				}
				label="Move item"
				{...bindMove()}
			/>
			<IconButton
				className="absolute -top-3 -right-3"
				Icon={<DeleteIcon size={24} className="text-danger-100" />}
				label="Remove item"
				onClick={onRemove}
			/>
			<IconButton
				className="absolute -right-3 -bottom-3 cursor-se-resize"
				Icon={
					<div className="relative h-6 w-6 rounded-full bg-white p-1 after:absolute after:top-1/2 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-primary after:content-['']" />
				}
				label="Resize item"
				{...bindResize()}
			/>
			{children}
		</animated.div>
	);
};
