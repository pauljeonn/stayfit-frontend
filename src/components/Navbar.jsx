import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 80px;
	background-color: #75ce75;
	display: flex;
`;

const NavbarItem = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: white;
`;

const Navbar = () => {
	return (
		<Container>
			<NavbarItem>
				<StyledLink to="/exercise">운동</StyledLink>
			</NavbarItem>
			<NavbarItem>
				<StyledLink to="/">홈</StyledLink>
			</NavbarItem>
			<NavbarItem>
				<StyledLink to="/settings">세팅</StyledLink>
			</NavbarItem>
		</Container>
	);
};

export default Navbar;
