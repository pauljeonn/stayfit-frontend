import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EditCard from '../components/EditCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

	const [exercises, setExercises] = useState([]);

	useEffect(() => {
		const fetchExercises = async () => {
			const res = await axios.get('exercises');
			setExercises(res.data);
		};
		fetchExercises();
	}, []);

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
