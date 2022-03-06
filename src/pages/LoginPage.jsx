import React from 'react';
import styled from 'styled-components';
import { styles } from '../styles';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

const Left = styled.div`
	flex: 2;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LoginImage = styled.img`
	width: 75%;
`;

const Right = styled.div`
	flex: 3;
	background-color: ${styles.themeColor};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LoginContainer = styled.div`
	background-color: white;
	border-radius: 15px;
	padding: 50px 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Logo = styled.div`
	font-family: 'Rampart One', cursive;
	font-size: 56px;
	color: ${styles.themeColor};
	margin-bottom: 40px;
`;

const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-bottom: 40px;
`;

const LoginInput = styled.input`
	width: 240px;
	height: 40px;
	border: 2px solid ${styles.themeColor};
	border-radius: 5px;
	outline: none;
	padding-left: 5px;
	margin-bottom: 8px;
`;

const LoginBtn = styled.button`
	width: 240px;
	height: 40px;
	border: none;
	border-radius: 5px;
	background-color: ${styles.themeColor};
	color: white;
	font-size: 18px;
	font-weight: 600;
	margin-bottom: 5px;
	cursor: pointer;

	&:hover {
		filter: brightness(110%);
	}
`;

const RegisterText = styled.div`
	color: ${styles.themeColor};
	font-size: 15px;
	cursor: pointer;

	&:hover {
		filter: brightness(110%);
	}
`;

const LoginPage = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<LoginImage src="/images/exercise.svg" alt="" />
				</Left>
				<Right>
					<LoginContainer>
						<Logo>STAYFIT</Logo>
						<LoginForm>
							<LoginInput type="email" placeholder="이메일" />
							<LoginInput type="password" placeholder="비밀번호" />
							<LoginBtn>로그인</LoginBtn>
						</LoginForm>
						<RegisterText>아직 회원이 아니신가요?</RegisterText>
					</LoginContainer>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default LoginPage;
