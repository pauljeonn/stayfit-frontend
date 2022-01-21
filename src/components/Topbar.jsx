import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 80px;
	position: fixed;
	top: 0;
	display: flex;
`;

const TopbarItem = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: white;
`;

const TopbarLogo = styled.h1`
	font-family: 'Rampart One', cursive;
	/* font-family: 'Bungee', cursive; */
	/* font-family: 'Faster One', cursive; */
	/* font-family: 'Strait', sans-serif; */
	font-size: 50px;
`;

const Topbar = () => {
	return (
		<Container>
			<TopbarItem></TopbarItem>
			<TopbarItem>
				<StyledLink to="/">
					<TopbarLogo>STAYFIT</TopbarLogo>
				</StyledLink>
			</TopbarItem>
			<TopbarItem>Hi there!</TopbarItem>
		</Container>
	);
};

export default Topbar;
