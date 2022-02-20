import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EditCard from '../components/EditCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getExercises } from '../redux/exercise';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #cbf0b5;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 600px;
	height: 600px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
`;

const Title = styled.h1``;

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
				<Title>Edit Exercises</Title>
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
