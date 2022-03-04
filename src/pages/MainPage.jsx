import { useState, useEffect } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import ExerciseCard from '../components/ExerciseCard';
import { useDispatch, useSelector } from 'react-redux';
import { getExercises } from '../redux/exercise';
// import { getExercises } from '../redux/api';

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 80px - 80px);
	background-color: #e3ffc6;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 50%;
	min-width: 400px;
	max-width: 600px;
	height: 100%;
	border-radius: 10px;
	padding: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const DateContainer = styled.div`
	font-size: 30px;
	font-weight: 700;
	color: #75ce75;
	margin-bottom: 30px;
`;

const ClockContainer = styled.div`
	font-size: 60px;
	font-weight: 700;
	color: #75ce75;
`;

const ExerciseList = styled.div``;

// 메인 페이지 컴포넌트
const MainPage = () => {
	dayjs.locale('ko');
	const dispatch = useDispatch();

	// 로컬 state
	const [exercises, setExercises] = useState([]);
	const [date, setDate] = useState(new Date());

	// 글로벌 state
	const exerciseState = useSelector((state) => state.exercise.exercises);

	// 운동 데이터 가져오기
	useEffect(() => {
		// exerciseState가 비어있으면 데이터 불러오기
		if (!exerciseState.length) {
			dispatch(getExercises()); // dispatch thunk
		} else {
			setExercises(exerciseState);
		}
	}, [dispatch, exerciseState]);

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
				{/* dayjs 활용하여 현재 시간 포맷 설정하기 */}
				<DateContainer>
					{dayjs(date).format('YYYY년 M월 D일 dddd')}
				</DateContainer>
				{/* <ClockContainer>{dayjs(date).format('A h:mm')}</ClockContainer> */}
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
