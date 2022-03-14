import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
	width: 100%;
	background-color: white;
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
`;

const ExercisePage = () => {
	useEffect(() => {
		const fetchExercises = async () => {
			const res = await axios.get('exercises');
			console.log(res);
		};
		fetchExercises();
	}, []);

	return (
		<Container>
			<Wrapper></Wrapper>
		</Container>
	);
};

export default ExercisePage;
