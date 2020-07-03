import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
	width: 100%;
	height: 100%;
`;
export const CloseIcon = () => {
	return (
		<Icon
			xmlns='http://www.w3.org/2000/svg'
			data-name='Layer 1'
			viewBox='0 0 64 80'
			x='0px'
			y='0px'>
			<path d='M57.41406,6.58594a1.99927,1.99927,0,0,0-2.82812,0L32,29.17188,9.41406,6.58594A1.99979,1.99979,0,0,0,6.58594,9.41406L29.17188,32,6.58594,54.58594a1.99979,1.99979,0,1,0,2.82813,2.82813L32,34.82813,54.58594,57.41406a1.99979,1.99979,0,0,0,2.82813-2.82812L34.82813,32,57.41406,9.41406A1.99927,1.99927,0,0,0,57.41406,6.58594Z' />
			<text
				x='0'
				y='79'
				fill='#000000'
				font-size='5px'
				font-weight='bold'
				font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"></text>
			<text
				x='0'
				y='84'
				fill='#000000'
				font-size='5px'
				font-weight='bold'
				font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"></text>
		</Icon>
	);
};
