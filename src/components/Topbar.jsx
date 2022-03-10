import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth';
import { clearExercise } from '../redux/exercise';
import styled from 'styled-components';
import { styles } from '../styles';
import { MdArrowDropDown, MdLogout } from 'react-icons/md';

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

const DropdownIcon = styled.div`
	font-size: 28px;
	display: flex;
	align-items: center;
	position: relative;
	cursor: pointer;
`;

const Dropdown = styled.div`
	width: 140px;
	height: 50px;
	background-color: white;
	border-radius: 5px;
	box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
	position: absolute;
	bottom: -60px;
	right: 5px;
	display: ${(props) => (props.isDropdown ? 'flex' : 'none')};
	justify-content: center;
`;

const Logout = styled.div`
	color: ${styles.darkGrayColor};
	font-size: 17px;
	display: flex;
	justify-content: right;
	align-items: center;
	cursor: pointer;
`;

const LogoutIcon = styled.div`
	font-size: 20px;
	margin-right: 8px;
	display: flex;
	align-items: center;
`;

const Topbar = () => {
	const user = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();

	const [isDropdown, setIsDropdown] = useState(false);

	const toggleDropdown = () => {
		setIsDropdown(!isDropdown);
	};

	const handleLogout = () => {
		// 유저 및 운동 상태 비우기
		dispatch(logout());
		dispatch(clearExercise());
	};

	return (
		<Container>
			<TopbarItem></TopbarItem>
			<TopbarItem>
				<StyledLink to="/">
					<TopbarLogo>STAYFIT</TopbarLogo>
				</StyledLink>
			</TopbarItem>
			<TopbarItem>
				{`안녕하세요, ${user.firstName}님`}
				<DropdownIcon onClick={toggleDropdown}>
					<MdArrowDropDown />
					<Dropdown isDropdown={isDropdown} onClick={handleLogout}>
						<Logout>
							<LogoutIcon>
								<MdLogout />
							</LogoutIcon>
							로그아웃
						</Logout>
					</Dropdown>
				</DropdownIcon>
			</TopbarItem>
		</Container>
	);
};

export default Topbar;
