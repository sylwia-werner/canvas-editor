import { IconButton } from '@/components/atoms/IconButton';
import { DeleteIcon } from '@/components/atoms/icons/DeleteIcon';
import { MoveIcon } from '@/components/atoms/icons/MoveIcon';
import { useGesture } from '@use-gesture/react';
import { ReactNode, useEffect } from 'react';

interface Props {
	children: ReactNode;
	onDrag: (position: { x: number; y: number }) => void;
	onRemove: () => void;
	bounds?: { width: number; height: number };
}

export const Draggable = ({ children, onDrag, onRemove, bounds }: Props) => {
	useEffect(() => {
		console.log(bounds);
	}, [bounds]);

	const bind = useGesture(
		{
			onDrag: ({ offset: [dx, dy] }) => {
				const x = Math.min(Math.max(dx, 0), bounds?.width || 0);
				const y = Math.min(Math.max(dy, 0), bounds?.height || 0);
				onDrag({ x: x, y: y });
				// 	// moveText(id, dx, dy);
				// },
				// onPinch: ({ offset: [s] }) => {
				// 	setScale(s);
				// },
			},
		},

		{
			drag: {
				filterTaps: true,
				bounds: bounds
					? {
							left: 0,
							top: 0,
							right: bounds.width,
							bottom: bounds.height,
						}
					: undefined,
			},

			// pinch: { scaleBounds: { min: 0.5, max: 3 } },
		},
	);

	return (
		<>
			<div className="relative w-fit outline-2 outline-primary">
				<IconButton
					className="absolute -top-5 -left-5 cursor-grab touch-none select-none active:cursor-grabbing"
					Icon={<MoveIcon size={32} className="text-primary" />}
					label="Move item"
					{...bind()}
				/>
				<IconButton
					Icon={
						<div className="p-1">
							<MoveIcon size={32} className="text-primary" />
						</div>
					}
					label="Move item"
					className="cursor grab absolute -top-5 -left-5 active:cursor-grabbing"
					{...bind()}
				/>
				<IconButton
					Icon={<DeleteIcon size={24} className="text-danger" />}
					label="Remove item"
					onClick={onRemove}
					className="absolute -top-3 -right-3"
				/>
				<IconButton
					Icon={
						<div className="relative h-6 w-6 rounded-full bg-white p-1 after:absolute after:top-1/2 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-primary after:content-['']" />
					}
					label="Resize item"
					onClick={() => console.log('resize')}
					className="absolute -right-3 -bottom-3 cursor-se-resize"
				/>
				{children}
			</div>
		</>
	);
};
