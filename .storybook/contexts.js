import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultTheme } from '../src/utils';

export const contexts = [
	// it can have multiple contexts we just need one
	{
		icon: 'box',
		title: 'Themes',
		components: [ThemeProvider],
		/**
		 * * on what params ThemeProvider should switch between
		 * @param name will show up in tool bar
		 */
		params: [
			{
				name: 'Default theme',
				props: { theme: defaultTheme },
				/**
				 * * this will make sure this will be originally set
				 */
				default: true,
			},
			{
				name: 'Dark theme',
				props: { theme: darkTheme },
			},
		],
		/**
		 * @param deep is provided to pass above properties through every child component
		 */
		options: {
			deep: true,
			disable: false,
			cancelable: false,
		},
	},
];
