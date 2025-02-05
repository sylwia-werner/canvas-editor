import { useEffect } from 'react';

const SCROLL_LOCK_CLASSNAME = 'is-scroll-locked';

function useBodyScrollLock(locked: boolean) {
	useEffect(() => {
		if (locked) {
			document.body.classList.add(SCROLL_LOCK_CLASSNAME);
		} else {
			document.body.classList.remove(SCROLL_LOCK_CLASSNAME);
		}
	}, [locked]);

	useEffect(
		() => () => {
			document.body.classList.remove(SCROLL_LOCK_CLASSNAME);
		},
		[],
	);
}

export default useBodyScrollLock;
