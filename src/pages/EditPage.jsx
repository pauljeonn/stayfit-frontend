import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

const BackBtn = styled.button``;

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

const SaveBtn = styled.button`
	margin-top: 30px;
`;

const EditPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [title, setTitle] = useState(location.state.title);
	const [desc, setDesc] = useState(location.state.desc);
	const [days, setDays] = useState(location.state.days);
	const dayNames = {
		0: '일',
		1: '월',
		2: '화',
		3: '수',
		4: '목',
		5: '금',
		6: '토',
	};
	const [strDays, setStrDays] = useState(JSON.stringify(days));

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

	return (
		<Container>
			<Wrapper>
				<BackBtn onClick={() => navigate(-1)}>BACK</BackBtn>
				<Title>EDIT</Title>
				<ExerciseLabel>운동</ExerciseLabel>
				<ExerciseInput value={title} onChange={changeTitle} />
				<ExerciseLabel>설명</ExerciseLabel>
				<ExerciseInput value={desc} onChange={changeDesc} />
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
				<SaveBtn>SAVE</SaveBtn>
			</Wrapper>
		</Container>
	);
};

export default EditPage;
