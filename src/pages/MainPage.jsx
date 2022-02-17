import { useState, useEffect } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import axios from 'axios';
import ExerciseCard from '../components/ExerciseCard';
import { useDispatch, useSelector } from 'react-redux';
import { getExercises } from '../redux/api';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: pink;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 500px;
	height: 800px;
	background-color: lightblue;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ItemClock = styled.div`
	font-size: 30px;
	color: white;
`;

const ExerciseList = styled.div``;

// 메인 페이지 컴포넌트
const MainPage = () => {
	// 로컬 상태
	const [exercises, setExercises] = useState([]);
	const [date, setDate] = useState(new Date());

	// 글로벌 state 및 dispatch
	const exerciseState = useSelector((state) => state.exercise.exercises);
	const dispatch = useDispatch();

	// 운동 데이터 가져오기
	useEffect(() => {
		// useEffect를 비동기로 호출하지 못하므로 비동기 함수 생성 및 호출
		const fetchExercises = async () => {
			await getExercises(dispatch);
		};
		// exerciseState가 비어있으면 데이터 불러오기
		if (!exerciseState.length) {
			fetchExercises();
		} else {
			setExercises(exerciseState);
		}
	}, [exerciseState, dispatch]);

	// 시간 표시
	useEffect(() => {
		// 30초에 한번씩 refreshClock 호출
		const timerId = setInterval(refreshClock, 1000 * 30);
		return () => {
			clearInterval(timerId);
		};
	}, []);

	// refreshClock 함수
	const refreshClock = () => {
		setDate(new Date());
	};

	return (
		<Container>
			<Wrapper>
				<h1>MAIN</h1>
				{/* dayjs 활용하여 현재 시간 포맷 설정하기 */}
				<ItemClock>{dayjs(date).format('h:mm A')}</ItemClock>
				<ExerciseList>
					{exercises.map((item) => {
						// 오늘 요일 위치에 운동 요일 배열의 요소값이 true면 리스트에 보여주기
						if (item.days[Number(dayjs(date).format('d'))]) {
							return (
								<ExerciseCard
									key={item._id}
									title={item.title}
									desc={item.desc}
								></ExerciseCard>
							);
						}
						return null;
					})}
				</ExerciseList>
			</Wrapper>
		</Container>
	);
};

export default MainPage;
