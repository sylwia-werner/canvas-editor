import { CloseIcon } from '@/components/atoms/icons/CloseIcon';
import { Portal } from '@/components/atoms/Portal';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';

interface Props {
	onClose?: () => void;
	className?: string;
	wrapperClass?: string;
	children?: React.ReactNode;
}

const Modal = ({ children, onClose, className, wrapperClass }: Props) => {
	const wrapRef = useRef<HTMLDivElement>(null);
	useBodyScrollLock(true);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const listener = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			onClose?.();
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', listener);
		return () => {
			window.removeEventListener('keydown', listener);
		};
	}, [listener]);

	return (
		<Portal>
			<div
				onClick={({ target }) => {
					if (target === wrapRef.current) onClose?.();
				}}
				role="presentation"
				className={classNames(
					'fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black-100/40',
					{
						[className || '']: className,
					},
				)}
			>
				<div
					ref={wrapRef}
					className="flex h-full overflow-auto p-4 pb-8"
				>
					<div
						className={classNames(
							'relative z-[1] m-auto flex h-fit w-full max-w-[643px] overflow-hidden rounded-md bg-white-100 p-5',
							{
								[wrapperClass || '']: wrapperClass,
							},
						)}
					>
						{onClose && (
							<button
								className="absolute top-8 right-8 z-[2] h-8 w-8 cursor-pointer border-0"
								type="button"
								onClick={onClose}
							>
								<CloseIcon
									className="text-black-100"
									size={32}
								/>
							</button>
						)}
						<div className="flex h-full w-full overflow-auto p-8">
							{children}
						</div>
					</div>
				</div>
			</div>
		</Portal>
	);
};

export default Modal;
