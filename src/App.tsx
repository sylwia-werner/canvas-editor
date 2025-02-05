import { PosterProvider } from '@/context/usePosterContext';
import { PosterEditor } from '@/pages/PosterEditor';

function App() {
	return (
		<PosterProvider>
			<PosterEditor />
		</PosterProvider>
	);
}

export default App;
