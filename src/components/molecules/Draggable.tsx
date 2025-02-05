import { IconButton } from '@/components/atoms/IconButton';
import { DeleteIcon } from '@/components/atoms/icons/DeleteIcon';
import { MoveIcon } from '@/components/atoms/icons/MoveIcon';
import { useGesture } from '@use-gesture/react';
import { ReactNode, useEffect, useRef, useState } from 'react';

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
	const draggableRef = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({
		x: initialPosition?.x || 0,
		y: initialPosition?.y || 0,
	});
	const [elementSize, setElementSize] = useState({ width: 0, height: 0 });

	const adjustedBounds = bounds
		? {
				width: bounds.width - elementSize.width,
				height: bounds.height - elementSize.height,
			}
		: undefined;
	useEffect(() => {
		console.log(bounds);
	}, [bounds]);

	const handleDrag = ({ x, y }: { x: number; y: number }) => {
		setPosition({ x, y });
		onDrag(id, x, y);
	};

	useEffect(() => {
		if (draggableRef.current) {
			const { width, height } =
				draggableRef.current.getBoundingClientRect();
			setElementSize({ width, height });
		}
	}, []);

	const bind = useGesture(
		{
			onDrag: ({ offset: [dx, dy] }) => {
				const x = Math.min(Math.max(dx, 0), adjustedBounds?.width || 0);
				const y = Math.min(
					Math.max(dy, 0),
					adjustedBounds?.height || 0,
				);
				handleDrag({ x: x, y: y });
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
				bounds: adjustedBounds
					? {
							left: 0,
							top: 0,
							right: adjustedBounds.width,
							bottom: adjustedBounds.height,
						}
					: undefined,
			},

			// pinch: { scaleBounds: { min: 0.5, max: 3 } },
		},
	);

	return (
		<div
			ref={draggableRef}
			style={{
				transform: `translate(${position.x}px, ${position.y}px)`,
				position: 'absolute',
				touchAction: 'none',
				// color: currentElement.color,
				// fontSize: `${currentElement.fontSize}px`,
			}}
			className="w-fit outline-2 outline-primary"
		>
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
	);
};
