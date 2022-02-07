import React from 'react';
import styled from 'styled-components';
import { exerciseData } from '../data';
import EditCard from '../components/EditCard';

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

const ExerciseList = styled.div``;

const SettingsPage = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Edit Exercises</Title>
				<ExerciseList>
					{exerciseData.map((item) => (
						<EditCard key={item.id} item={item} />
					))}
				</ExerciseList>
			</Wrapper>
		</Container>
	);
};

export default SettingsPage;
