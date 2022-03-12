import React from 'react';
import styled from 'styled-components';
import { styles } from '../styles';

const Container = styled.div`
	width: 46%;
	height: 100px;
	border: 2px solid ${styles.themeColor};
	border-radius: 10px;
	margin: 2%;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const Title = styled.div`
	color: ${styles.darkGrayColor};
`;

const StatsCard = ({ title }) => {
	return (
		<Container>
			<Title>{title}</Title>
		</Container>
	);
};

export default StatsCard;
