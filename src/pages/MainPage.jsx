import { useState, useEffect } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { exerciseData } from '../data';
import ExerciseCard from '../components/ExerciseCard';

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
	const [date, setDate] = useState(new Date());

	const refreshClock = () => {
		setDate(new Date());
	};

	useEffect(() => {
		// 1분에 한번씩 refreshClock 호출
		const timerId = setInterval(refreshClock, 1000 * 60);
		return () => {
			clearInterval(timerId);
		};
	}, []);

	return (
		<Container>
			<Wrapper>
				<h1>MAIN</h1>
				{/* dayjs 활용하여 현재 시간 포맷 설정하기 */}
				<ItemClock>{dayjs(date).format('h:mm A')}</ItemClock>
				<ExerciseList>
					{exerciseData.map((item) => {
						// 오늘 요일 위치에 운동 요일 배열의 요소값이 true면 리스트에 보여주기
						if (item.days[Number(dayjs(date).format('d'))]) {
							return (
								<ExerciseCard
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
