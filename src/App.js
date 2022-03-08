import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainPage from './pages/MainPage';
import ExercisePage from './pages/ExercisePage';
import SettingsPage from './pages/SettingsPage';
import EditPage from './pages/EditPage';
import AddPage from './pages/AddPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import styled from 'styled-components';

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

function App() {
	const user = useSelector((state) => state.auth.user);

	return (
		<Container>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						// 유저 상태 존재 유무에 따라 redirect
						element={user ? <MainPage /> : <Navigate to="/login" />}
					/>
					<Route path="/exercise" element={<ExercisePage />} />
					<Route
						path="/settings"
						element={user ? <SettingsPage /> : <Navigate to="/" />}
					/>
					<Route
						path="/add"
						element={user ? <AddPage /> : <Navigate to="/" />}
					/>
					<Route path="/edit/:id" element={<EditPage />} />
					<Route
						path="/login"
						// 유저 상태 존재 유무에 따라 redirect
						element={user ? <Navigate to="/" /> : <LoginPage />}
					/>
					<Route path="/register" element={<RegisterPage />} />
				</Routes>
			</BrowserRouter>
		</Container>
	);
}

export default App;
