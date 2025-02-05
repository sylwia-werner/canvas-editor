import classNames from 'classnames';
import {
	Children,
	cloneElement,
	ReactElement,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react';

interface Props {
	background?: string;
	isEmptyBackground?: boolean;
	children?: ReactNode;
}

export const Poster = ({
	background,
	isEmptyBackground = false,
	children,
}: Props) => {
	const localRef = useRef<HTMLDivElement>(null);
	const [bounds, setBounds] = useState({ width: 0, height: 0 });

	useEffect(() => {
		if (!localRef.current) return;

		const resizeObserver = new ResizeObserver(entries => {
			const { width, height } = entries[0].contentRect;
			setBounds({ width, height });
		});

		resizeObserver.observe(localRef.current);

		return () => resizeObserver.disconnect();
	}, [localRef]);

	return (
		<div
			ref={localRef}
			className={classNames(
				'h-full max-h-[948px] w-full max-w-[759px]',
				{
					'bg-black-50': isEmptyBackground,
				},
				{
					'bg-cover bg-center': background,
				},
			)}
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className="relative inset-0">
				{Children.map(children, child =>
					cloneElement(child as ReactElement, {
						bounds,
					}),
				)}
			</div>
		</div>
	);
};
