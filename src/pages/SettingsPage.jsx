import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getExercises } from '../redux/exercise';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import EditCard from '../components/EditCard';
import styled from 'styled-components';
import { styles } from '../styles';
import { MdAdd } from 'react-icons/md';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 100%;
	height: calc(100vh - ${styles.topbarHeight} - ${styles.navbarHeight});
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Inner = styled.div`
	width: 100%;
	min-width: 400px;
	max-width: 500px;
	height: 90%;
	border: 3px solid ${styles.themeColor};
	border-radius: 10px;
	background-color: white;
	padding: 30px 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-y: scroll;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}
`;

const Title = styled.div`
	width: 100%;
	height: 60px;
	border-radius: 5px;
	background-color: ${styles.themeColor};
	color: white;
	font-size: 26px;
	font-weight: 500;
	margin-bottom: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const AddButton = styled.button`
	width: 50px;
	height: 50px;
	border: none;
	border-radius: 50%;
	background-color: ${styles.themeColor};
	color: white;
	font-size: 38px;
	margin-bottom: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:hover {
		filter: brightness(110%);
	}
`;

const ExerciseList = styled.div`
	width: 100%;
`;

const SettingsPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.auth.user);
	const exercises = useSelector((state) => state.exercise.exercises);

	// 현재 유저의 운동 데이터 가져오기
	useEffect(() => {
		dispatch(getExercises(user._id));
	}, []);

	return (
		<Container>
			<Topbar />
			<Wrapper>
				<Inner>
					<Title>운동 목록</Title>
					<AddButton onClick={() => navigate('/add')}>
						<MdAdd />
					</AddButton>
					<ExerciseList>
						{exercises &&
							exercises.map((exercise) => (
								<EditCard key={exercise._id} item={exercise} />
							))}
					</ExerciseList>
				</Inner>
			</Wrapper>
			<Navbar />
		</Container>
	);
};

export default SettingsPage;
