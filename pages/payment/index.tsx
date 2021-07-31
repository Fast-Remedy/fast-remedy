import React, { FormEvent, useEffect, useState } from 'react';

import Container from '../../components/Container';
import TitleBox from '../../components/TitleBox';
import Header from '../../components/Header';
import PaymentCard from '../../components/PaymentCard';
import ButtonsContainer from '../../components/ButtonsContainer';
import Button from '../../components/Button';
import Form from '../../components/Form';
import InputField from '../../components/InputField';
import SelectField from '../../components/SelectField';

import { Section, BoxCard, Line } from '../../styles/payment';
import Theme from '../../styles/theme';

const Payment: React.FC = () => {
	const [newPaymentVisible, setNewPaymentVisible] = useState(false);
	const [paymentType, setPaymentType] = useState('');

	const goBack = () => {
		window.history.back();
	};

	const handleSavePayment = (e: FormEvent) => {
		setNewPaymentVisible(!newPaymentVisible);
	};

	return (
		<Container>
			<>
				<Header />
				<Section>
					<TitleBox title='Pagamento' />
					<ButtonsContainer>
						<>
							<Button
								color={Theme.colors.black}
								backgroundColor={Theme.colors.white}
								onClick={goBack}
							>
								Voltar
							</Button>
							<Button
								color={Theme.colors.black}
								backgroundColor={Theme.colors.white}
								onClick={() => setNewPaymentVisible(!newPaymentVisible)}
							>
								{!newPaymentVisible ? 'Adicionar' : 'Cancelar'}
							</Button>
						</>
					</ButtonsContainer>
					{!newPaymentVisible ? (
						<BoxCard>
							<PaymentCard
								className='active'
								type='Crédito'
								processor='MasterCard'
								finalCardNumbers='9115'
							/>
							<PaymentCard
								type='Crédito'
								processor='Visa'
								finalCardNumbers='1457'
							/>
						</BoxCard>
					) : (
						<BoxCard>
							<Form onSubmit={handleSavePayment}>
								<>
									<SelectField
										label='Estado'
										value={paymentType}
										onChange={e => setPaymentType(e.target.value)}
									>
										<option value='Crédito'>Crédito</option>
										<option value='Débito'>Débito</option>
									</SelectField>
									<InputField
										label='Número do Cartão'
										placeholder='Ex. 9999-9999-9999-9999'
									/>
									<Line>
                                        <InputField label='Mês de Validade' placeholder='Ex. 12' />
                                        <InputField label='Ano de Validade' placeholder='Ex. 22' />
                                    </Line>
									<InputField label='Código de Segurança' placeholder='Ex. 22' />
									<InputField
										label='Nome do Titular'
										placeholder='Ex. Antônio Rocha'
									/>
									<InputField
										label='CPF do Titular'
										placeholder='Ex. 123.456.789-10'
									/>
									<ButtonsContainer
										style={{ marginTop: '1rem', justifyContent: 'flex-end' }}
									>
										<>
											<Button
												type='submit'
												color={Theme.colors.white}
												backgroundColor={Theme.colors.green}
											>
												Salvar
											</Button>
										</>
									</ButtonsContainer>
								</>
							</Form>
						</BoxCard>
					)}
				</Section>
			</>
		</Container>
	);
};

export default Payment;
