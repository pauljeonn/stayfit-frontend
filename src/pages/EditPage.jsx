import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deleteExercise, editExercise } from '../redux/exercise';

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

const Buttons = styled.div`
	margin-top: 30px;
`;

const CancelBtn = styled.button``;

const SaveBtn = styled.button``;

const DeleteBtn = styled.button`
	margin-top: 40px;
`;

const EditPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

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

	// 운동 저장
	const handleSave = () => {
		const editedExercise = {
			userId: 1,
			title,
			desc,
			days,
		};

		try {
			// 수정된 운동 데이터 업데이트 요청
			// await axios.put(`/exercises/${location.state._id}`, editedExercise);
			dispatch(editExercise([location.state._id, editedExercise]));
			// 운동 수정 완료 후 settings 페이지로 이동
			navigate('/settings');
		} catch (err) {
			console.log(err);
		}
	};

	// 운동 삭제
	const handleDelete = () => {
		try {
			dispatch(deleteExercise(location.state._id));
			// SettingsPage로 이동
			navigate(-1);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container>
			<Wrapper>
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
				<Buttons>
					<CancelBtn onClick={() => navigate(-1)}>취소</CancelBtn>
					<SaveBtn onClick={handleSave}>저장</SaveBtn>
				</Buttons>
				<DeleteBtn onClick={handleDelete}>운동 삭제</DeleteBtn>
			</Wrapper>
		</Container>
	);
};

export default EditPage;
