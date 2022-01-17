import { useState, useEffect } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

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
	height: 500px;
	background-color: lightblue;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ItemClock = styled.div`
	font-size: 30px;
	color: white;
`;

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
				{/* dayjs 활용하여 시간 포맷 설정하기 */}
				<ItemClock>{dayjs(date).format('h:mm A')}</ItemClock>
			</Wrapper>
		</Container>
	);
};

export default MainPage;
