import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import myTheme from './myTheme';
/**
 * * this is how theme is applied to storybook
 */
// addons.setConfig({
// 	theme: themes.dark,
// });

addons.setConfig({
	theme: myTheme,
});
