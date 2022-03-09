import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExercises } from '../redux/exercise';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import MainCard from '../components/MainCard';
import styled from 'styled-components';
import { styles } from '../styles';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

const Container = styled.div`
	width: 100vw;
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
	padding: 20px;
	margin: 5px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-y: scroll;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}
`;

const DateContainer = styled.div`
	font-size: 30px;
	font-weight: 700;
	color: ${styles.subColor};
	margin-bottom: 20px;
`;

const ClockContainer = styled.div`
	font-size: 60px;
	font-weight: 700;
	color: #75ce75;
`;

const ExerciseList = styled.div`
	width: 100%;
	min-width: 300px;
	max-width: 380px;
	border-radius: 10px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

// 메인 페이지 컴포넌트
const MainPage = () => {
	// dayjs 한국어 설정
	dayjs.locale('ko');

	const dispatch = useDispatch();

	const [date, setDate] = useState(new Date());

	const user = useSelector((state) => state.auth.user);
	const exercises = useSelector((state) => state.exercise.exercises);

	// 현재 유저의 운동 데이터 가져오기
	useEffect(() => {
		dispatch(getExercises(user._id));
		console.log('GET EXERCISES');
	}, []);

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
			<Topbar />
			<Wrapper>
				{/* dayjs 활용하여 현재 시간 포맷 설정하기 */}
				<DateContainer>
					{dayjs(date).format('YYYY년 M월 D일 dddd')}
				</DateContainer>
				{/* <ClockContainer>{dayjs(date).format('A h:mm')}</ClockContainer> */}
				<ExerciseList>
					{exercises &&
						exercises.map((exercise) => {
							// 오늘 요일 위치에 운동 요일 배열의 요소값이 true면 리스트에 보여주기
							if (exercise.days[Number(dayjs(date).format('d'))]) {
								return (
									<MainCard
										key={exercise._id}
										id={exercise._id}
										title={exercise.title}
										desc={exercise.desc}
										done={exercise.done}
									></MainCard>
								);
							}
							return null;
						})}
				</ExerciseList>
			</Wrapper>
			<Navbar />
		</Container>
	);
};

export default MainPage;
