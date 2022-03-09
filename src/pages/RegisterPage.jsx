import axios from 'axios';
import React, { useState } from 'react';
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
	margin-bottom: 40px;
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
	margin-bottom: 6px;
	cursor: pointer;

	&:hover {
		filter: brightness(110%);
	}
`;

const ErrorText = styled.div`
	width: 240px;
	color: ${styles.errColor};
	font-size: 13px;
	margin
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

	const [isError, setIsError] = useState(false);
	const [error, setError] = useState('');

	const [lastName, setLastName] = useState('');
	const [firstName, setFirstName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	const changeLastName = (e) => {
		setLastName(e.target.value);
	};

	const changeFirstName = (e) => {
		setFirstName(e.target.value);
	};

	const changeEmail = (e) => {
		setEmail(e.target.value);
	};

	const changePassword = (e) => {
		setPassword(e.target.value);
	};

	const changePasswordConfirm = (e) => {
		setPasswordConfirm(e.target.value);
	};

	const handleRegister = async (e) => {
		e.preventDefault();

		// 비밀번호 비교 후 새 유저 객체 생성
		if (password !== passwordConfirm) {
			setIsError(true);
			setError('비밀번호가 불일치합니다.');
		} else {
			const newUser = {
				lastName,
				firstName,
				email,
				password,
			};

			try {
				// 회원 등록
				await axios.post('/auth/register', newUser);
				console.log('성공적으로 가입되었습니다.');
				// 로그인 페이지로 이동
				navigate('/login');
			} catch (err) {
				console.log(err);
				setIsError(true);
				setError('회원가입에 실패하였습니다. 다른 이메일 주소를 시도해보세요.');
			}
		}
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
							<RegisterInput
								placeholder="성"
								value={lastName}
								onChange={(e) => changeLastName(e)}
								required
							/>
							<RegisterInput
								placeholder="이름"
								value={firstName}
								onChange={(e) => changeFirstName(e)}
								required
							/>
							<RegisterInput
								type="email"
								placeholder="이메일"
								value={email}
								onChange={(e) => changeEmail(e)}
								required
							/>
							<RegisterInput
								type="password"
								placeholder="비밀번호"
								value={password}
								onChange={(e) => changePassword(e)}
								minLength="6"
								required
							/>
							<RegisterInput
								type="password"
								placeholder="비밀번호 확인"
								value={passwordConfirm}
								onChange={(e) => changePasswordConfirm(e)}
								minLength="6"
								required
							/>
							<RegisterBtn type="submit">회원가입</RegisterBtn>
							{isError && <ErrorText>{error}</ErrorText>}
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
