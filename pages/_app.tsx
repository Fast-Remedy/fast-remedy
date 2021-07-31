import React from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './global';
import Theme from '../styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
	const alternator = React.useRef<number>(0);
	// Scroll slightly and alternate between pages to always invalidate image snapshot.
	// See {redacted} for explanation on this effect and the previous
	React.useEffect(() => {
		const slightScroll = () => {
			window.scrollTo({ left: 0, top: alternator.current });
			alternator.current = Number(!alternator.current);
			// if (IOS()) {
			// }
		};

		router.events.on('routeChangeComplete', slightScroll);

		return () => router.events.off('routeChangeComplete', slightScroll);
	}, []);

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
