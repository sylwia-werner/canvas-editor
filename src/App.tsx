import { useState } from 'react';

import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const name: string = 'Vite';
	return (
		<>
			<div className="flex flex-col bg-amber-600">
				<p className="font-bold">ELKO</p>
			</div>
		</>
	);
}

export default App;
