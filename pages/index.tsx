import React, { useEffect } from 'react';
import router from 'next/router';
import { useRouter } from 'next/router';

import Button from '../components/Button';
import { Section, LogoImage, ButtonContainer } from '../styles/index';

const Index = () => {
	const Router = useRouter();

	useEffect(() => {
		if (process.browser) {
			if (localStorage.getItem('token') && localStorage.getItem('userData')) {
				Router.push('/customer/home');
			}
			if (localStorage.getItem('storeToken') && localStorage.getItem('storeData')) {
				Router.push('/store/home');
			}
		}
	});

	return (
		<Section>
			<LogoImage src='/images/logos/fastremedy-logo.png' alt='FastRemedy' />
			<Button
				className='icon right margin'
				width='22rem'
				height='5rem'
				onClick={() => router.push('/customer/login')}
			>
				<svg fill='#000' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
						clipRule='evenodd'
					/>
				</svg>
				<span>Entrar como Comprador</span>
			</Button>
			<span className='separator'>ou entrar como</span>
			<ButtonContainer>
				<Button
					className='icon right'
					width='100%'
					height='3rem'
					onClick={() => router.push('/store/login')}
				>
					<img src='/images/icons/store.svg' alt='Loja' />
					<span>Loja</span>
				</Button>
				<Button
					disabled
					className='icon right disabled'
					width='100%'
					height='3rem'
					onClick={() => router.push('/delivery/login')}
				>
					<img src='/images/icons/motorcycle.svg' alt='Entregador' />
					<span>Entregador</span>
				</Button>
			</ButtonContainer>
		</Section>
	);
};

export default Index;
