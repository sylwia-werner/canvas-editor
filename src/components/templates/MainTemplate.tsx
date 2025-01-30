import { PropsWithChildren } from 'react';

export const MainTemplate = ({ children }: PropsWithChildren) => {
	return (
		<main className="flex flex-auto justify-center px-4">
			<div>{children}</div>
		</main>
	);
};
