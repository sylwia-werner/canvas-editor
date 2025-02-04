import { CanvasIconButton } from '@/components/atoms/CanvasIconButton';
import { DeleteIcon } from '@/components/atoms/icons/DeleteIcon';
import { MoveIcon } from '@/components/atoms/icons/MoveIcon';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export const Draggable = ({ children }: Props) => {
	return (
		<>
			<div className="relative w-fit outline-2 outline-primary">
				<CanvasIconButton
					Icon={
						<div className="p-1">
							<MoveIcon size={32} className="text-primary" />
						</div>
					}
					label="Move item"
					onClick={() => console.log('move')}
					className="absolute -top-5 -left-5"
				/>
				<CanvasIconButton
					Icon={<DeleteIcon size={24} className="text-danger" />}
					label="Remove item"
					onClick={() => console.log('Remove')}
					className="absolute -top-3 -right-3"
				/>
				<CanvasIconButton
					Icon={
						<div className="relative h-6 w-6 rounded-full bg-white p-1 after:absolute after:top-1/2 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-primary after:content-['']" />
					}
					label="Resize item"
					onClick={() => console.log('resize')}
					className="absolute -right-3 -bottom-3"
				/>
				{children}
			</div>
		</>
	);
};
