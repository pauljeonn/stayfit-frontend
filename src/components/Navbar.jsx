import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { styles } from '../styles';
import { MdEqualizer, MdHome, MdSettings } from 'react-icons/md';

const Container = styled.div`
	width: 100%;
	height: ${styles.navbarHeight};
	background-color: ${styles.themeColor};
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

const NavbarIcon = styled.div`
	font-size: 32px;
`;

const Navbar = () => {
	return (
		<Container>
			<NavbarItem>
				<StyledLink to="/stats">
					<NavbarIcon>
						<MdEqualizer />
					</NavbarIcon>
				</StyledLink>
			</NavbarItem>
			<NavbarItem>
				<StyledLink to="/">
					<NavbarIcon>
						<MdHome />
					</NavbarIcon>
				</StyledLink>
			</NavbarItem>
			<NavbarItem>
				<StyledLink to="/settings">
					<NavbarIcon>
						<MdSettings />
					</NavbarIcon>
				</StyledLink>
			</NavbarItem>
		</Container>
	);
};

export default Navbar;
