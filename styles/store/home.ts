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
	display: flex;
	align-items: center;
	justify-content: center;
	grid-template-columns: 1fr 1fr;
	border-radius: 0.8rem;
	gap: 1rem;
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
	border-radius: 0.8rem;

	h1 {
		width: 100%;
		text-align: center;
		font-size: 1.4rem;
		margin-bottom: 0.4rem;

		@media (max-width: 620px) {
			margin-bottom: 0.7rem;
		}
	}
`;

export const InfoBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 0.4rem;

	@media (max-width: 620px) {
		align-items: flex-start;
		gap: 0.7rem;
	}

	h1 {
		width: 100%;
		text-align: center;
		font-size: 1.3rem;
		margin-bottom: 0;
	}
`;

export const Info = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	text-align: center;
	gap: 0.4rem;
	line-height: 1.2rem;
	font-size: 0.9rem;
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
	border-radius: 0.8rem;

	h1 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
`;

export const Message = styled.span`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${props => props.theme.colors.black};
	margin-top: 0.5rem;
	padding: 2rem;
`;
