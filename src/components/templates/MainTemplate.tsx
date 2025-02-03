import { PropsWithChildren } from 'react';

export const MainTemplate = ({ children }: PropsWithChildren) => {
	return (
		<main className="2-xl:px-42 m-auto flex min-h-screen max-w-screen-3xl items-center justify-center px-6 py-16 xl:px-42">
			<div className="flex w-full flex-col gap-6 md:flex-row lg:max-h-[calc(100vh-8.25rem)]">
				{children}
			</div>
		</main>
	);
};
