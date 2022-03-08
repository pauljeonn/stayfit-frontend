import React, { useEffect, useState } from 'react';
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
	width: 50%;
	min-width: 400px;
	max-width: 600px;
	height: calc(100vh - ${styles.topbarHeight} - ${styles.navbarHeight});
	border: 2px solid ${styles.subColor};
	border-radius: 10px;
	margin: 20px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.div`
	width: 400px;
	height: 50px;
	border-radius: 15px;
	background-color: ${styles.subColor};
	color: white;
	font-size: 26px;
	font-weight: 500;
	margin-bottom: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const AddButton = styled.button`
	width: 44px;
	height: 44px;
	border: none;
	border-radius: 50%;
	background-color: ${styles.subColor};
	color: white;
	font-size: 34px;
	margin-bottom: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:hover {
		filter: brightness(110%);
	}
`;

const ExerciseList = styled.div``;

const SettingsPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// const [exercises, setExercises] = useState([]);

	const user = useSelector((state) => state.auth.user);
	const exercises = useSelector((state) => state.exercise.exercises);

	// 현재 유저의 운동 데이터 가져오기
	useEffect(() => {
		dispatch(getExercises(user._id));
		console.log('GET EXERCISES');
	}, []);

	return (
		<Container>
			<Topbar />
			<Wrapper>
				<Title>운동 목록</Title>
				<AddButton onClick={() => navigate('/add')}>
					<MdAdd />
				</AddButton>
				<ExerciseList>
					{exercises.map((item) => (
						<EditCard key={item._id} item={item} />
					))}
				</ExerciseList>
			</Wrapper>
			<Navbar />
		</Container>
	);
};

export default SettingsPage;
