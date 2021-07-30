import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global';
import Theme from '../styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>FastRemedy</title>
			</Head>
			<GlobalStyle />
			<ThemeProvider theme={Theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default App;
