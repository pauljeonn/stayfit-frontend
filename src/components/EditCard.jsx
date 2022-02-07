import React from 'react';
import styled from 'styled-components';
import { AiOutlineEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
	width: 400px;
	height: 70px;
	margin-top: 10px;
	border: 1px solid black;
	border-radius: 10px;
	background-color: white;
	color: black;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ExerciseDetail = styled.div`
	display: flex;
	flex-direction: column;
`;

const EditIcon = styled.div`
	font-size: 20px;
	cursor: pointer;
`;

const EditCard = ({ item }) => {
	const navigate = useNavigate();

	return (
		<Container>
			<ExerciseDetail>{item.title}</ExerciseDetail>
			<EditIcon onClick={() => navigate('/edit', { state: item })}>
				<AiOutlineEdit />
			</EditIcon>
		</Container>
	);
};

export default EditCard;
