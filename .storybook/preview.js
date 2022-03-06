import { HashRouter } from 'react-router-dom';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/utilis/theme/themeDefault';
import GlobalStyles from '../src/utilis/theme/globalStyles';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

addDecorator((story) => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<HashRouter>{story()}</HashRouter>
	</ThemeProvider>
));
