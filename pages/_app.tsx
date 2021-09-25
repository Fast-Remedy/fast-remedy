import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';
import { isSafari } from 'react-device-detect';

import { NavigationContextProvider } from '../contexts/NavigationContext';
import CustomerHeader from '../components/CustomerHeader';
import StoreHeader from '../components/StoreHeader';

import GlobalStyle from '../styles/global';
import Theme from '../styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
	const [showCustomerHeader, setShowCustomerHeader] = useState(false);
	const [showStoreHeader, setShowStoreHeader] = useState(false);

	if (process.browser) {
		if (
			!localStorage.getItem('token') &&
			router.route !== '/' &&
			!router.route.includes('login') &&
			!router.route.includes('recover')
		) {
			// check token
			// router.push('/');
		}
	}

	useEffect(() => {
		if (process.browser) {
			if (isSafari) {
				console.log(
					'Infelizmente nem todos os recursos de PWA são suportados pelo seu browser (Safari). Para uma melhor experiência, por favor utilize Chrome, Edge ou Firefox.'
				);
			}
		}
	}, []);

	useEffect(() => {
		if (
			router.route.match('/customer/') &&
			!router.route.match('/customer/login') &&
			!router.route.match('/customer/recover') &&
			!router.route.match('/customer/success')
		) {
			setShowCustomerHeader(true);
		} else {
			setShowCustomerHeader(false);
		}

		if (
			router.route.match('/store/') &&
			!router.route.match('/store/login') &&
			!router.route.match('/store/recover') &&
			!router.route.match('/store/success')
		) {
			setShowStoreHeader(true);
		} else {
			setShowStoreHeader(false);
		}
	}, [router.route]);

	return (
		<NavigationContextProvider>
			<Head>
				<title>FastRemedy</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no'
				/>
			</Head>
			<GlobalStyle />
			<ThemeProvider theme={Theme}>
				{showCustomerHeader && <CustomerHeader />}
				{showStoreHeader && <StoreHeader />}
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
