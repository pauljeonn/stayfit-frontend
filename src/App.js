import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ExercisePage from './pages/ExercisePage';
import SettingsPage from './pages/SettingsPage';
import EditPage from './pages/EditPage';
import AddPage from './pages/AddPage';
import styled from 'styled-components';
import LoginPage from './pages/LoginPage';

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

function App() {
	return (
		<Container>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/exercise" element={<ExercisePage />} />
					<Route path="/settings" element={<SettingsPage />} />
					<Route path="/add" element={<AddPage />} />
					<Route path="/edit/:id" element={<EditPage />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</BrowserRouter>
		</Container>
	);
}

export default App;
