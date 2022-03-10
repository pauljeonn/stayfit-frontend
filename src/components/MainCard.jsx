import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { styles } from '../styles';
import { FaCheck } from 'react-icons/fa';
import { addDone, removeDone } from '../redux/exercise';
import dayjs from 'dayjs';

const Container = styled.div`
	width: 100%;
	height: 90px;
	border: 2px solid ${styles.themeColor};
	border-radius: 10px;
	background-color: white;
	font-size: 17px;
	padding: 0 25px;
	margin-bottom: 25px;
	display: flex;
	align-items: center;
`;

const Checkbox = styled.div`
	width: 26px;
	height: 26px;
	border: 2px solid ${styles.themeColor};
	border-radius: 2px;
	margin-right: 16px;
	cursor: pointer;
`;

const CheckboxIcon = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	color: ${styles.themeColor};
	display: ${(props) => (props.isChecked ? '' : 'none')};
`;

const ExerciseDetail = styled.div`
	display: flex;
	flex-direction: column;
	color: ${(props) =>
		props.isChecked ? `${styles.grayColor}` : `${styles.darkGrayColor}`};
`;

const ExerciseTitle = styled.div`
	font-size: 18px;
	margin-bottom: 5px;
`;

const ExerciseDesc = styled.div`
	font-size: 15px;
`;

const MainCard = ({ id, title, desc, done }) => {
	const dispatch = useDispatch();

	let today = dayjs().format('YYYYMMDD');

	const [isChecked, setIsChecked] = useState(done.includes(today));

	const toggleCheckbox = () => {
		if (isChecked) {
			setIsChecked(false);
			dispatch(removeDone([id, { doneDate: today }]));
		} else {
			setIsChecked(true);
			dispatch(addDone([id, { doneDate: today }]));
		}
	};

	return (
		<Container>
			<Checkbox onClick={toggleCheckbox}>
				<CheckboxIcon isChecked={isChecked}>
					<FaCheck />
				</CheckboxIcon>
			</Checkbox>
			<ExerciseDetail isChecked={isChecked}>
				<ExerciseTitle>{title}</ExerciseTitle>
				<ExerciseDesc>{desc}</ExerciseDesc>
			</ExerciseDetail>
		</Container>
	);
};

export default MainCard;
