import React from 'react';
import styled from 'styled-components';
import ExerciseCard from '../components/ExerciseCard';
import { exerciseData } from '../data';

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
`;

const ExercisePage = () => {
	return (
		<Container>
			<Wrapper>
				{exerciseData.map((item) => (
					<ExerciseCard key={item.id} type={item.type} count={item.count} />
				))}
			</Wrapper>
		</Container>
	);
};

export default ExercisePage;
