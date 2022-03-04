import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EditCard from '../components/EditCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getExercises } from '../redux/exercise';

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 80px - 80px);
	background-color: #cbf0b5;
	display: flex;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 600px;
	min-width: 400px;
	max-width: 600px;
	border: 2px solid #75ce75;
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
	background-color: #75ce75;
	color: white;
	font-size: 26px;
	font-weight: 500;
	margin-bottom: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const AddButton = styled.button`
	margin-bottom: 10px;
`;

const ExerciseList = styled.div``;

const SettingsPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// 로컬 state
	const [exercises, setExercises] = useState([]);

	// 글로벌 state
	const exerciseState = useSelector((state) => state.exercise.exercises);

	// 운동 데이터 가져오기
	useEffect(() => {
		console.log(exerciseState);
		// exerciseState가 비어있으면 데이터 불러오기
		if (!exerciseState.length) {
			dispatch(getExercises());
		} else {
			setExercises(exerciseState);
		}
	}, [dispatch, exerciseState]);

	return (
		<Container>
			<Wrapper>
				<Title>운동 목록</Title>
				<AddButton onClick={() => navigate('/add')}>운동 추가</AddButton>
				<ExerciseList>
					{exercises.map((item) => (
						<EditCard key={item._id} item={item} />
					))}
				</ExerciseList>
			</Wrapper>
		</Container>
	);
};

export default SettingsPage;
