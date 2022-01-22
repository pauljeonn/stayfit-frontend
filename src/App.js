import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ExercisePage from './pages/ExercisePage';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Topbar />
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/exercise" element={<ExercisePage />} />
				</Routes>
				<Navbar />
			</BrowserRouter>
		</div>
	);
}

export default App;
