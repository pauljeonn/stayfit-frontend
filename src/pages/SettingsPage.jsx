import React from 'react';
import styled from 'styled-components';
import SettingsItem from '../components/SettingsItem';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #cbf0b5;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 600px;
	height: 600px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
`;

const SettingsPage = () => {
	return (
		<Container>
			<Wrapper>
				<SettingsItem title="운동 수정하기" />
			</Wrapper>
		</Container>
	);
};

export default SettingsPage;
