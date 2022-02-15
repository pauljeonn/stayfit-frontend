import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #f7db95;
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

const ExerciseLabel = styled.label`
	margin-bottom: 5px;
`;

const ExerciseInput = styled.input`
	height: 30px;
	padding-left: 10px;
	border: none;
	border-radius: 5px;
	background-color: #d0d0d0;
	margin-bottom: 20px;
`;

const ExerciseDays = styled.div`
	display: flex;
`;

const ExerciseDay = styled.div`
	width: 30px;
	height: 30px;
	margin-right: 10px;
	padding: 5px;
	border-radius: 50%;
	font-size: 14px;
	background-color: ${(props) => (props.isSelected ? '#3939ff' : 'white')};
	color: ${(props) => (props.isSelected ? 'white' : 'black')};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

const Buttons = styled.div``;

const CancelBtn = styled.button``;

const SaveBtn = styled.button`
	margin-top: 30px;
`;

const AddPage = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [days, setDays] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
		false,
	]);
	const [strDays, setStrDays] = useState(JSON.stringify(days));

	const dayNames = {
		0: '일',
		1: '월',
		2: '화',
		3: '수',
		4: '목',
		5: '금',
		6: '토',
	};

	const changeTitle = (e) => {
		setTitle(e.target.value);
	};

	const changeDesc = (e) => {
		setDesc(e.target.value);
	};

	const toggleDay = (key) => {
		// days 상태의 불변성을 지키기 위해 temp 변수 생성
		let temp = days;
		temp[key] = !temp[key];
		setDays(temp);
		setStrDays(JSON.stringify(temp)); // 리렌더링 위해서 사용
	};

	const saveExercise = async () => {
		const newExercise = {
			title,
			desc,
			days,
		};
		console.log(newExercise);

		try {
			await axios.post('exercises', newExercise);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container>
			<Wrapper>
				<Title>Add Exercise</Title>
				<ExerciseLabel>운동 이름</ExerciseLabel>
				<ExerciseInput
					value={title}
					onChange={changeTitle}
					placeholder="예) 팔굽혀펴기, 달리기"
				/>
				<ExerciseLabel>목표</ExerciseLabel>
				<ExerciseInput
					value={desc}
					onChange={changeDesc}
					placeholder="예) 20회, 30분"
				/>
				<ExerciseLabel>요일</ExerciseLabel>
				<ExerciseDays>
					{Object.keys(dayNames).map((key) => (
						<ExerciseDay
							key={key}
							isSelected={days[key]}
							onClick={() => toggleDay(key)}
						>
							{dayNames[key]}
						</ExerciseDay>
					))}
				</ExerciseDays>
				<Buttons>
					<CancelBtn>취소</CancelBtn>
					<SaveBtn onClick={saveExercise}>저장</SaveBtn>
				</Buttons>
			</Wrapper>
		</Container>
	);
};

export default AddPage;
