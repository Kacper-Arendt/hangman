import React from 'react';
import { ThemeProvider } from 'styled-components';
import { store } from 'redux/store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'App';
import GlobalStyles from 'utilis/theme/globalStyles';
import theme from 'utilis/theme/themeDefault';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
