import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { SignUpModal } from './components';
import { GlobalStyle, defaultTheme, darkTheme } from './utils';
const App = () => {
	const [useDarkTheme, setDarkTheme] = useState(false);
	const [showSignUpModal, setShowSignUpModal] = useState(false);
	return (
		<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<button
				style={{ background: 'none', margin: '0 16px 24px', padding: '8px', cursor: 'pointer' }}
				onClick={() => setDarkTheme(true)}>
				Dark Theme
			</button>
			<button
				style={{ background: 'none', margin: '0 16px 24px', padding: '8px', cursor: 'pointer' }}
				onClick={() => setDarkTheme(false)}>
				Default Theme
			</button>
			<button
				style={{ background: 'none', margin: '0 16px 24px', padding: '8px', cursor: 'pointer' }}
				onClick={() => setShowSignUpModal(!showSignUpModal)}>
				Toggle SignUpModal
			</button>
			<div
				style={{
					background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
					justifyContent: 'space-around',
					alignItems: 'center',
					display: 'flex',
					width: '100vw',
					height: '100vh',
				}}>
				<SignUpModal showSignUpModal={showSignUpModal} setShowSignUpModal={setShowSignUpModal} />
			</div>
			<GlobalStyle />
		</ThemeProvider>
	);
};
ReactDOM.render(<App />, document.getElementById('root'));
