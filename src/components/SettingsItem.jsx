import React from 'react';
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

const SettingsItem = ({ title }) => {
	return <Container>{title}</Container>;
};

export default SettingsItem;
