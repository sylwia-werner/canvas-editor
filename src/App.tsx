import { PosterProvider } from '@/context/usePosterContext';
import { CanvasEditor } from '@/pages/CanvasEditor';

function App() {
	return (
		<PosterProvider>
			<CanvasEditor />
		</PosterProvider>
	);
}

export default App;
