import React from 'react';
import Container from '../../components/container';
import TitleBox from '../../components/titleBox';
import Header from '../../components/header';
import ProductCard from '../../components/productCard';
import { Text, Section, BoxCard, Price } from './styles';
import Button from '../../components/button';
import Theme from '../theme';

const Store: React.FC = () => {
	return (
		<Container>
			<>
				<Header />
				<Section>
					<TitleBox title='Drogaria Ultra Popular' fontSize='2rem' />
					<div>
						<Button
							color={Theme.colors.white}
							backgroundColor={Theme.colors.lightGreen}
						>
							Voltar
						</Button>
					</div>
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
