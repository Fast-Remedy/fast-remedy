import styled from 'styled-components';

export const Section = styled.section`
	max-width: 800px;
	width: 100%;
	padding: 1rem 2.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;

	.title {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.6rem;
	}
`;

export const BoxCard = styled.div`
	max-width: 800px;
	width: 100%;
	margin: 1.1rem auto 1.1rem auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;

	@media (max-width: 800px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const Greeting = styled.div`
	width: 100%;
	font-size: 1.2rem;
	text-align: center;
	margin-bottom: 1rem;
`;

export const InfoCard = styled.div`
	width: 100%;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border: 2px solid ${props => props.theme.colors.white};
	background-color: ${props => props.theme.colors.white};
	border-radius: 1rem;
	gap: 0.4rem;

	h1 {
		font-size: 1.5rem;
		margin-bottom: 0;
	}
`;

export const NewOrders = styled.div`
	max-width: 800px;
	width: 100%;
	margin: 0 auto 8rem auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`;

export const NewOrdersCard = styled.div`
	width: 100%;
	padding-top: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background-color: ${props => props.theme.colors.white};
	border-radius: 1rem;

	h1 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
`;
