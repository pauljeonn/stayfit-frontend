import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 400px;
	height: 100px;
	border: 1px solid black;
	color: black;
`;

const ExerciseCard = ({ type, count }) => {
	return (
		<Container>
			<p>{type}</p>
			<p>{count}</p>
		</Container>
	);
};

export default ExerciseCard;
