import React from 'react';
import { Illustrations, CloseIcon } from '../assets';
import { typeScale } from '../utils';
import { PrimaryButton } from './Buttons';
import { animated, useSpring, config } from 'react-spring';
import styled from 'styled-components';

const ModalWrapper = styled.div`
	box-shadow: 0 5px 16px rgba(0, 0, 0.2);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
export function Modal({ showModal }) {
	const animation = useSpring({
		opacity: showModal ? 1 : 0,
		transform: showModal ? 'translateY(0)' : 'translateY(-200%)',
		config: config.slow,
	});
	return (
		<animated.div style={animation}>
			<ModalWrapper>
				<img
					height='280px'
					width='280px'
					alt='SignUp For Account'
					aria-hidden='true'
					src={Illustrations.SignUp}
				/>
				<SignUpHeader>Sign Up!</SignUpHeader>
				<SignUpText>Sign Up Today To Get Access!</SignUpText>
				<PrimaryButton>Sign Up</PrimaryButton>
				<CloseModalButton>
					<CloseIcon />
				</CloseModalButton>
			</ModalWrapper>
		</animated.div>
	);
}
