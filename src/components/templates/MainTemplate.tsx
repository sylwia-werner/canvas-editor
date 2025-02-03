import { PropsWithChildren } from 'react';

export const MainTemplate = ({ children }: PropsWithChildren) => {
	return (
		<main className="2-xl:px-42 m-auto flex min-h-screen px-6 py-16 xl:px-40">
			<div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:justify-center">
				{children}
			</div>
		</main>
	);
};
