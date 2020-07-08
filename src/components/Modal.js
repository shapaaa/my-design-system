import React, { useState } from 'react';
import { Illustrations, CloseIcon } from '../assets';
import { typeScale } from '../utils';
import { PrimaryButton, SecondaryButton } from './Buttons';
import { animated, useSpring, config } from 'react-spring';
import styled from 'styled-components';
import { neutral } from '../utils/colors';
const SignUpModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 0 5px 16px rgba(0, 0, 0.2);
	border-radius: 2px;
	width: 800px;
	height: 500px;
	background-color: ${(props) => props.theme.formElementBackground};
	color: ${(props) => props.theme.textFormElementBackground};
	position: relative;
`;
const SignUpHeader = styled.h3`
	font-size: ${typeScale.header3};
`;
const SignUpText = styled.p`
	max-width: 70%;
	font-size: ${typeScale.paragraph};
	text-align: center;
`;
const CloseModalButton = styled.button`
	cursor: pointer;
	background: none;
	border: none;
	padding: 0;
	position: absolute;
	top: 40px;
	right: 40px;
	height: 24px;
	width: 24px;
`;
export function SignUpModal({ showSignUpModal }) {
	const [signInModal, setSignInModal] = useState(false);
	const animation = useSpring({
		opacity: showSignUpModal & !signInModal ? 1 : 0,
		transform: showSignUpModal & !signInModal ? 'translateY(0)' : 'translateY(-200%)',
		config: config.slow,
	});
	return !signInModal ? (
		<animated.div style={animation}>
			<SignUpModalWrapper>
				<img
					height='280px'
					width='280px'
					alt='SignUp For Account'
					aria-hidden='true'
					src={Illustrations.SignUp}
				/>
				<SignUpHeader>Sign Up!</SignUpHeader>
				<SignUpText>Sign Up Today To Get Access!</SignUpText>
				<PrimaryButton
					onClick={() => {
						setSignInModal(true);
					}}>
					Sign Up
				</PrimaryButton>
				<CloseModalButton>
					<CloseIcon />
				</CloseModalButton>
			</SignUpModalWrapper>
		</animated.div>
	) : (
		<SignInModal />
	);
}
const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;
const Label = styled.label`
	color: ${neutral[500]};
	margin-bottom: 5px;
	justify-self: flex-start;
	margin-left: 20px;
`;
const SignInModalWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	box-shadow: 0 5px 16px rgba(0, 0, 0.2);
	border-radius: 2px;
	width: 800px;
	height: 500px;
	background-color: ${(props) => props.theme.formElementBackground};
	color: ${(props) => props.theme.textFormElementBackground};
	position: relative;
`;
const Form = styled.form`
	display: flex;
	justify-self: center;
	align-self: center;
	flex-direction: column;
`;
export function SignInModal() {
	return (
		<SignInModalWrapper>
			<Form>
				<Label>Email</Label>
				<input
					style={{ marginBottom: '20px', marginLeft: '20px', width: '380px', height: '45px' }}
					placeholder='Enter Email'
				/>
				<Label>Password</Label>
				<input
					style={{ marginBottom: '20px', marginLeft: '20px', width: '380px', height: '45px' }}
					placeholder='Enter Password'
				/>
				<Label>Username</Label>
				<input
					style={{ marginBottom: '20px', marginLeft: '20px', width: '380px', height: '45px' }}
					placeholder='username'
				/>
				<ButtonContainer>
					<SecondaryButton>Sign Up!</SecondaryButton>
					<PrimaryButton>Login</PrimaryButton>
				</ButtonContainer>
			</Form>
			<img
				style={{ height: '280px', width: '280px', justifySelf: 'center', alignSelf: 'center' }}
				alt='SignUp Form'
				src={Illustrations.WelCome}
			/>
			<CloseModalButton onClick={() => console.log('You closed the modal!')}>
				<CloseIcon />
			</CloseModalButton>
		</SignInModalWrapper>
	);
}
