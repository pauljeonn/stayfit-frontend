import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ExercisePage from './pages/ExercisePage';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import SettingsPage from './pages/SettingsPage';
import EditPage from './pages/EditPage';
import AddPage from './pages/AddPage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Topbar />
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/exercise" element={<ExercisePage />} />
					<Route path="/settings" element={<SettingsPage />} />
					<Route path="/add" element={<AddPage />} />
					<Route path="/edit" element={<EditPage />} />
				</Routes>
				<Navbar />
			</BrowserRouter>
		</div>
	);
}

export default App;
