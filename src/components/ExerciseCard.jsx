import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

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

const Checkbox = styled.div`
	width: 25px;
	height: 25px;
	border: 2px solid darkgray;
	border-radius: 5px;
	margin-right: 25px;
	cursor: pointer;
`;

const CheckboxIcon = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	color: black;
	display: ${(props) => (props.isChecked ? '' : 'none')};
`;

const ExerciseDetail = styled.div`
	display: flex;
	flex-direction: column;
	color: ${(props) => (props.isChecked ? 'darkgray' : 'black')};
`;

const ExerciseCard = ({ type, desc }) => {
	const [isChecked, setIsChecked] = useState(false);

	const toggleCheckbox = () => {
		setIsChecked(!isChecked);
	};

	return (
		<Container>
			<Checkbox onClick={toggleCheckbox}>
				<CheckboxIcon isChecked={isChecked}>
					<FaCheck />
				</CheckboxIcon>
			</Checkbox>
			<ExerciseDetail isChecked={isChecked}>
				<div>{type}</div>
				<div>{desc}</div>
			</ExerciseDetail>
		</Container>
	);
};

export default ExerciseCard;
