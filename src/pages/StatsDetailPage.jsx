import React from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import styled from 'styled-components';
import { styles } from '../styles';
import { useLocation } from 'react-router-dom';

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
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Outer = styled.div`
	width: 100%;
	min-width: 400px;
	max-width: 800px;
	height: 90%;
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
	margin-bottom: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Inner = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	overflow-y: scroll;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}
`;

const StatsDetailPage = () => {
	const location = useLocation();

	return (
		<Container>
			<Topbar />
			<Wrapper>
				<Outer>
					<Title>DETAIL</Title>
					<Inner>{location.state.title}</Inner>
				</Outer>
			</Wrapper>
			<Navbar />
		</Container>
	);
};

export default StatsDetailPage;
