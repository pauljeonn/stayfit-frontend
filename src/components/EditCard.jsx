import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { styles } from '../styles';
import { MdModeEditOutline } from 'react-icons/md';

const Container = styled.div`
	width: 100%;
	height: 65px;
	border: 1px solid ${styles.themeColor};
	border-radius: 5px;
	background-color: white;
	color: ${styles.darkGrayColor};
	font-size: 17px;
	padding: 20px;
	margin-bottom: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ExerciseDetail = styled.div`
	display: flex;
	flex-direction: column;
`;

const EditIcon = styled.div`
	color: ${styles.darkGrayColor};
	font-size: 22px;
	cursor: pointer;

	&:hover {
		color: ${styles.themeColor};
	}
`;

const EditCard = ({ item }) => {
	const navigate = useNavigate();

	return (
		<Container>
			<ExerciseDetail>{item.title}</ExerciseDetail>
			<EditIcon onClick={() => navigate(`/edit/${item._id}`, { state: item })}>
				<MdModeEditOutline />
			</EditIcon>
		</Container>
	);
};

export default EditCard;
