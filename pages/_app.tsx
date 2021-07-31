import React from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './global';
import Theme from '../styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
	return (
		<>
			<Head>
				<title>FastRemedy</title>
			</Head>
			<GlobalStyle />
			<ThemeProvider theme={Theme}>
				<AnimatePresence>
					<motion.div
						key={router.route}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Component {...pageProps} />
					</motion.div>
				</AnimatePresence>
			</ThemeProvider>
		</>
	);
};

export default App;
