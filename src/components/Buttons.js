import styled from 'styled-components';
import { typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
	small: () => `
			font-size:${typeScale.helperText};
			padding: 8px;
	`,
	large: () => `
	 font-size:${typeScale.header5};
	 padding:16px 24px;
	`,
	warning: ({ props }) => `
	  background-color:${props.theme.status.warningColor};

	  &:hover,&:focus{
		  background-color:${props.theme.status.warningColorHover};
		  outline:3px solid ${props.theme.status.warningColorHover};
		  outline-offset: 2px;
		}
		&:active{
			border:2px solid ${props.theme.status.warningColorActive};
		    background-color:${props.theme.status.warningColorActive};
	  }
	`,
	warningSecondary: ({ props }) => `
	   color:${props.theme.status.warningColor};
	   border:2px solid ${props.theme.status.warningColor};
	   background:none;
	`,
	warningTertiary: ({ props }) => `
	background:none;
	color:${props.theme.status.warningColor};
	`,
	error: ({ props }) => `
	background-color:${props.theme.status.errorColor};

	&:hover,&:focus{
		background-color:${props.theme.status.errorColorHover};
		outline:3px solid ${props.theme.status.errorColorHover};
		outline-offset: 2px;
	  }
	  &:active{
		  border:2px solid ${props.theme.status.errorColorActive};
		  background-color:${props.theme.status.errorColorActive};
	}
	`,
	errorSecondary: ({ props }) => `
		color:${props.theme.status.errorColor};
		border:2px solid ${props.theme.status.errorColor};
		background:none;
	`,
	errorTertiary: ({ props }) => `
	background:none;
	color:${props.theme.status.errorColor};
	`,
	success: ({ props }) => `
	background-color:${props.theme.status.successColor};

	&:hover,&:focus{
		background-color:${props.theme.status.successColorHover};
		outline:3px solid ${props.theme.status.successColorHover};
		outline-offset: 2px;
	  }
	  &:active{
		  border:2px solid ${props.theme.status.successColorActive};
		  background-color:${props.theme.status.successColorActive};
	}
	`,
	successSecondary: ({ props }) => `
		color:${props.theme.status.successColor};
		border:2px solid ${props.theme.status.successColor};
		background:none;
	`,
	successTertiary: ({ props }) => `
	background:none;
	color:${props.theme.status.successColor};
	`,
};

const Button = styled.button`
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
	padding: 12px 24px;
	font-size: ${typeScale.paragraph};
	border-radius: 2px;
	min-width: 100px; /** It is really useFul for small screens */
	cursor: pointer;
	font-family: 'Roboto Slab', monospace;
	margin-right: 10px;
	transition: background-color 0.2s linear, color 0.2s linear;

	&:hover {
		background-color: ${(props) => props.theme.primaryColorHover};
		color: ${(props) => props.theme.textColorOnPrimary};
	}
	&:focus {
		outline: 3px solid ${(props) => props.theme.primaryColorHover};
		outline-offset: 2px;
	}
	&:active {
		background-color: ${(props) => props.theme.primaryColorActive};
		border-color: ${(props) => props.theme.primaryColorActive};
		color: ${(props) => props.theme.textColorOnPrimary};
	}
`;
export const PrimaryButton = styled(Button)`
	background-color: ${(props) => props.theme.primaryColor};
	border: none;
	color: ${(props) => props.theme.textColorOnPrimary};
	&:disabled {
		background-color: ${(props) => props.theme.disabled};
		color: ${(props) => props.theme.textOnDisabled};
		cursor: not-allowed;
	}

	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
export const SecondaryButton = styled(Button)`
	color: ${(props) => props.theme.primaryColor};
	border: 2px solid ${(props) => props.theme.primaryColor};
	background: none;
	&:disabled {
		background: none;
		color: ${(props) => props.theme.disabled};
		border-color: ${(props) => props.theme.disabled};
		cursor: not-allowed;
	}
	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
export const TertiaryButton = styled(Button)`
	color: ${(props) => props.theme.primaryColor};
	border: none;
	background: none;

	&:disabled {
		color: ${(props) => props.theme.disabled};
		background: none;
		cursor: not-allowed;
	}
	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
