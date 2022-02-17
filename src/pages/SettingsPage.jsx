import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EditCard from '../components/EditCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getExercises } from '../redux/api';

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

	// 로컬 상태
	const [exercises, setExercises] = useState([]);

	// 글로벌 state 및 dispatch
	const exerciseState = useSelector((state) => state.exercise.exercises);
	const dispatch = useDispatch();

	// 운동 데이터 가져오기
	useEffect(() => {
		// useEffect를 비동기로 호출하지 못하므로 비동기 함수 생성 및 호출
		const fetchExercises = async () => {
			await getExercises(dispatch);
		};
		// exerciseState가 비어있으면 데이터 불러오기
		if (!exerciseState.length) {
			fetchExercises();
		} else {
			setExercises(exerciseState);
		}
	}, [exerciseState, dispatch]);

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
