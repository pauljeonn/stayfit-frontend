import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	width: 400px;
	height: 80px;
	margin-top: 10px;
	border-radius: 10px;
	background-color: #eee;
	color: black;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: white;
`;

const SettingsItem = ({ title, path }) => {
	return (
		<StyledLink to={path}>
			<Container>{title}</Container>
		</StyledLink>
	);
};

export default SettingsItem;
