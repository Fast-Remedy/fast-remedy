import React from 'react';
import router from 'next/router';

import Button from '../../components/Button';
import {
	Section,
	LogoContainer,
	LogoImage,
	TitleBox,
	TextBox,
	ButtonContainer,
} from '../../styles/404';

const NotFound = () => {
	return (
		<Section>
			<LogoContainer>
				<LogoImage src='/images/logos/fastremedy-logo.png' alt='FastRemedy' />
				<TitleBox>404</TitleBox>
			</LogoContainer>
			<TextBox>
				<span>Ops...</span>
				<span>A página que você procurou não existe!</span>
			</TextBox>
			<ButtonContainer>
				<Button
					className='icon margin'
					width='50%'
					height='3rem'
					onClick={() => router.back()}
				>
					<svg
						className='icon'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
							clipRule='evenodd'
						/>
					</svg>
					Voltar
				</Button>
			</ButtonContainer>
		</Section>
	);
};

export default NotFound;
