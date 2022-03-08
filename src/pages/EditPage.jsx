import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteExercise, editExercise } from '../redux/exercise';
import { useDispatch } from 'react-redux';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { styles } from '../styles';
import { MdDelete } from 'react-icons/md';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 100%;
	height: calc(100vh - ${styles.topbarHeight} - ${styles.navbarHeight});
	padding: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Inner = styled.div`
	width: 100%;
	min-width: 400px;
	max-width: 500px;
	border: 3px solid ${styles.themeColor};
	border-radius: 10px;
	background-color: white;
	padding: 30px 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.div`
	width: 100%;
	height: 60px;
	border-radius: 5px;
	background-color: ${styles.themeColor};
	color: white;
	font-size: 26px;
	font-weight: 500;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const DeleteContainer = styled.div`
	width: 100%;
	margin-top: 15px;
	display: flex;
	justify-content: right;
`;

const DeleteIcon = styled.div`
	color: ${styles.themeColor};
	font-size: 34px;
	cursor: pointer;

	&:hover {
		color: ${styles.errColor};
	}
`;

const ExerciseForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const ExerciseLabel = styled.label`
	color: ${styles.themeColor};
	font-size: 18px;
	font-weight: 500;
	margin-bottom: 5px;
`;

const ExerciseInput = styled.input`
	width: 100%;
	height: 35px;
	border: none;
	border-radius: 5px;
	background-color: ${styles.lightGrayColor};
	outline: none;
	padding-left: 10px;
	margin-bottom: 20px;
`;

const ExerciseDays = styled.div`
	width: 100%;
	margin-bottom: 30px;
	display: flex;
	justify-content: space-between;
`;

const ExerciseDay = styled.div`
	width: 35px;
	height: 35px;
	border: ${(props) =>
		props.isSelected ? 'none' : `1px solid ${styles.grayColor}`};
	border-radius: 50%;
	background-color: ${(props) =>
		props.isSelected ? `${styles.themeColor}` : 'white'};
	color: ${(props) => (props.isSelected ? 'white' : 'black')};
	font-size: 16px;
	margin: 0 5px;
	padding: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

const Buttons = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const CancelBtn = styled.button`
	width: 50%;
	height: 45px;
	border: none;
	border-radius: 5px;
	background-color: ${styles.lightGrayColor};
	color: black;
	font-size: 17px;
	margin-right: 10px;
	cursor: pointer;
`;

const SaveBtn = styled.button`
	width: 50%;
	height: 45px;
	border: none;
	border-radius: 5px;
	background-color: ${styles.themeColor};
	color: white;
	font-size: 17px;
	font-weight: 600;
	margin-left: 10px;
	cursor: pointer;

	&:hover {
		filter: brightness(110%);
	}
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
	const handleSubmit = () => {
		const editedExercise = {
			title,
			desc,
			days,
		};

		try {
			// 수정된 운동 정보 적용
			dispatch(editExercise([location.state._id, editedExercise]));
			navigate('/settings');
		} catch (err) {
			console.log(err);
		}
	};

	// 운동 삭제
	const handleDelete = () => {
		try {
			dispatch(deleteExercise(location.state._id));
			navigate('/settings');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container>
			<Topbar />
			<Wrapper>
				<Inner>
					<Title>운동 수정</Title>
					<DeleteContainer>
						<DeleteIcon onClick={handleDelete}>
							<MdDelete />
						</DeleteIcon>
					</DeleteContainer>
					<ExerciseForm onSubmit={handleSubmit}>
						<ExerciseLabel>운동 이름</ExerciseLabel>
						<ExerciseInput value={title} onChange={changeTitle} />
						<ExerciseLabel>목표</ExerciseLabel>
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
							<CancelBtn onClick={() => navigate('/settings')}>취소</CancelBtn>
							<SaveBtn type="submit">저장</SaveBtn>
						</Buttons>
					</ExerciseForm>
				</Inner>
			</Wrapper>
			<Navbar />
		</Container>
	);
};

export default EditPage;
