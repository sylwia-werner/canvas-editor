import { IconButton } from '@/components/atoms/IconButton';
import { DeleteIcon } from '@/components/atoms/icons/DeleteIcon';
import { MoveIcon } from '@/components/atoms/icons/MoveIcon';
import { CONFIG_EXCLUDE_EXPORT_CLASS } from '@/constants';
import { Coordinates } from '@/types/coordinates';
import { Size } from '@/types/size';
import { useDrag } from '@use-gesture/react';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { useSpring, animated } from 'react-spring';

interface Props {
	id: string;
	children: ReactNode;
	onRemove: () => void;
	bounds?: Size;
	initialPosition: Coordinates;
	initialSize: Size;
}

export const Draggable = ({
	children,
	onRemove,
	bounds,
	initialPosition,
	initialSize,
}: Props) => {
	const [{ x, y, width, height }, api] = useSpring(() => ({
		x: initialPosition.x,
		y: initialPosition.y,
		width: initialSize.width,
		height: initialSize.height,
	}));

	const bindMove = useDrag(
		({ offset: [dx, dy] }) => {
			api.set({
				x: dx,
				y: dy,
			});
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
				top: initialSize.height,
				left: initialSize.width,
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
				className={classNames(
					'absolute -top-5 -left-5 cursor-grab touch-none select-none active:cursor-grabbing',
					{
						[`${CONFIG_EXCLUDE_EXPORT_CLASS}`]: true,
					},
				)}
				Icon={
					<div className="p-1">
						<MoveIcon size={32} className="text-primary" />
					</div>
				}
				label="Move item"
				{...bindMove()}
			/>
			<IconButton
				className={classNames('absolute -top-3 -right-3', {
					[`${CONFIG_EXCLUDE_EXPORT_CLASS}`]: true,
				})}
				Icon={<DeleteIcon size={24} className="text-danger-100" />}
				label="Remove item"
				onClick={onRemove}
			/>
			<IconButton
				className={classNames(
					'absolute -right-3 -bottom-3 cursor-se-resize',
					{
						[`${CONFIG_EXCLUDE_EXPORT_CLASS}`]: true,
					},
				)}
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
