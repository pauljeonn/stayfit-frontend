import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 400px;
	height: 100px;
	margin-top: 10px;
	border: 1px solid black;
	border-radius: 10px;
	background-color: white;
	color: black;
	padding: 20px;
	display: flex;
	align-items: center;
`;

const ExerciseDetail = styled.div`
	display: flex;
	flex-direction: column;
`;

const EditCard = ({ type, desc }) => {
	return (
		<Container>
			<ExerciseDetail>
				<div>{type}</div>
				<div>{desc}</div>
			</ExerciseDetail>
		</Container>
	);
};

export default EditCard;
