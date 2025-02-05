import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

const createContainer = (className?: string) => {
	const container = document.createElement('div');

	if (className) container.classList.add(className);
	document.body.appendChild(container);
	return container;
};

const modalContainer = createContainer();

export const Portal = ({ children }: PropsWithChildren) => {
	const containerElement = modalContainer;

	return createPortal(children, containerElement);
};
