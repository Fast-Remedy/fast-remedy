import React from 'react';
import Container from '../../components/Container';
import TitleBox from '../../components/TitleBox';
import CartIcon from '../../components/CartIcon';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import ButtonsContainer from '../../components/ButtonsContainer';
import Button from '../../components/Button';
import SearchField from '../../components/SearchField';
import { Section, BoxCard } from './styles';
import Theme from '../theme';

const Store: React.FC = () => {
	const goBack = () => {
		window.history.back();
	};

	return (
		<Container>
			<>
				<Header />
				<Section>
					<TitleBox title='Drogaria Ultra Popular' fontSize='2rem' />
					<ButtonsContainer>
						<>
							<Button
								color={Theme.colors.black}
								backgroundColor={Theme.colors.white}
                                onClick={goBack}
							>
								Voltar
							</Button>
							<CartIcon />
						</>
					</ButtonsContainer>
                    <SearchField />
					<BoxCard>
						<ProductCard
							productId='1'
							description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
							price={5.69}
							src='/images/logos/remedy.svg'
						/>
						<ProductCard
							productId='1'
							description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
							price={5.69}
							src='/images/logos/remedy.svg'
						/>
						<ProductCard
							productId='1'
							description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
							price={5.69}
							src='/images/logos/remedy.svg'
						/>
						<ProductCard
							productId='1'
							description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
							price={5.69}
							src='/images/logos/remedy.svg'
						/>
						<ProductCard
							productId='1'
							description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
							price={5.69}
							src='/images/logos/remedy.svg'
						/>
					</BoxCard>
				</Section>
			</>
		</Container>
	);
};

export default Store;
