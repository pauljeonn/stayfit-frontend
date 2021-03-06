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

		// ???????????? ?????? ??? ??? ?????? ?????? ??????
		if (password !== passwordConfirm) {
			setIsError(true);
			setError('??????????????? ??????????????????.');
		} else {
			const newUser = {
				lastName,
				firstName,
				email,
				password,
			};

			try {
				// ?????? ??????
				await axios.post('/auth/register', newUser);
				console.log('??????????????? ?????????????????????.');
				// ????????? ???????????? ??????
				navigate('/login');
			} catch (err) {
				console.log(err);
				setIsError(true);
				setError('??????????????? ?????????????????????. ?????? ????????? ????????? ??????????????????.');
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
								placeholder="???"
								value={lastName}
								onChange={(e) => changeLastName(e)}
								required
							/>
							<RegisterInput
								placeholder="??????"
								value={firstName}
								onChange={(e) => changeFirstName(e)}
								required
							/>
							<RegisterInput
								type="email"
								placeholder="?????????"
								value={email}
								onChange={(e) => changeEmail(e)}
								required
							/>
							<RegisterInput
								type="password"
								placeholder="????????????"
								value={password}
								onChange={(e) => changePassword(e)}
								minLength="6"
								required
							/>
							<RegisterInput
								type="password"
								placeholder="???????????? ??????"
								value={passwordConfirm}
								onChange={(e) => changePasswordConfirm(e)}
								minLength="6"
								required
							/>
							<RegisterBtn type="submit">????????????</RegisterBtn>
							{isError && <ErrorText>{error}</ErrorText>}
						</RegisterForm>
						<LoginText onClick={() => navigate('/login')}>
							?????? ???????????????????
						</LoginText>
					</RegisterContainer>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default RegisterPage;
