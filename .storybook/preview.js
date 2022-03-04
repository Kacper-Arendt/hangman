export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/utilis/theme/themeDefault';
import GlobalStyles from '../src/utilis/theme/globalStyles';

addDecorator((story) => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		{story()}
	</ThemeProvider>
));
