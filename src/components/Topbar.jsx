import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { styles } from '../styles';

const Container = styled.div`
	width: 100%;
	height: ${styles.topbarHeight};
	background-color: ${styles.themeColor};
	display: flex;
`;

const TopbarItem = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 20px;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: white;
`;

const TopbarLogo = styled.div`
	font-family: 'Rampart One', cursive;
	font-size: 50px;
`;

const Topbar = () => {
	const user = useSelector((state) => state.auth.user);

	return (
		<Container>
			<TopbarItem></TopbarItem>
			<TopbarItem>
				<StyledLink to="/">
					<TopbarLogo>STAYFIT</TopbarLogo>
				</StyledLink>
			</TopbarItem>
			<TopbarItem>{`안녕하세요, ${user.firstName}님`}</TopbarItem>
		</Container>
	);
};

export default Topbar;
