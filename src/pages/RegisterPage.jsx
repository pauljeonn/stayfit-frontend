import React from 'react';
import { useNavigate } from 'react-router-dom';
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

const RegisterImage = styled.img`
	width: 75%;
`;

const Right = styled.div`
	flex: 3;
	background-color: ${styles.themeColor};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const RegisterContainer = styled.div`
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

const RegisterForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-bottom: 45px;
`;

const RegisterInput = styled.input`
	width: 240px;
	height: 40px;
	border: 2px solid ${styles.themeColor};
	border-radius: 5px;
	outline: none;
	padding-left: 5px;
	margin-bottom: 8px;
`;

const RegisterBtn = styled.button`
	width: 240px;
	height: 46px;
	border: none;
	border-radius: 5px;
	background-color: ${styles.themeColor};
	color: white;
	font-size: 18px;
	font-weight: 600;
	margin-top: 12px;
	cursor: pointer;

	&:hover {
		filter: brightness(110%);
	}
`;

const LoginText = styled.div`
	color: ${styles.themeColor};
	font-size: 15px;
	cursor: pointer;

	&:hover {
		filter: brightness(110%);
	}
`;

const RegisterPage = () => {
	const navigate = useNavigate();

	const handleRegister = (e) => {
		e.preventDefault();
	};

	return (
		<Container>
			<Wrapper>
				<Left>
					<RegisterImage src="/images/exercise.svg" alt="" />
				</Left>
				<Right>
					<RegisterContainer>
						<Logo>STAYFIT</Logo>
						<RegisterForm onSubmit={handleRegister}>
							<RegisterInput placeholder="성" />
							<RegisterInput placeholder="이름" />
							<RegisterInput type="email" placeholder="이메일" />
							<RegisterInput type="password" placeholder="비밀번호" />
							<RegisterInput type="password" placeholder="비밀번호 확인" />
							<RegisterBtn type="submit">회원가입</RegisterBtn>
						</RegisterForm>
						<LoginText onClick={() => navigate('/login')}>
							이미 회원이신가요?
						</LoginText>
					</RegisterContainer>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default RegisterPage;
