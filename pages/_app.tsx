import React from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';

import { NavigationContextProvider } from '../contexts/NavigationContext';
import CustomerHeader from '../components/CustomerHeader';

import GlobalStyle from '../styles/global';
import Theme from '../styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
	if (process.browser) {
		screen.orientation.lock('portrait');
	}

	return (
		<NavigationContextProvider>
			<Head>
				<title>FastRemedy</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no'
				/>
				<meta http-equiv='ScreenOrientation' content='autoRotate:disabled' />
			</Head>
			<GlobalStyle />
			<ThemeProvider theme={Theme}>
				{router.route !== '/' &&
					router.route !== '/customer/login' &&
					router.route !== '/customer/recover' &&
					router.route !== '/customer/success' && <CustomerHeader />}
				<AnimatePresence>
					<motion.div
						key={router.route}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						<Component {...pageProps} />
					</motion.div>
				</AnimatePresence>
			</ThemeProvider>
		</NavigationContextProvider>
	);
};

export default App;
