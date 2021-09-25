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
	grid-template-columns: 1fr 1fr 1fr;
	gap: 2rem;

	@media (max-width: 800px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const BoxCard2 = styled.div`
	max-width: 800px;
	width: 100%;
	margin: 1.1rem auto 8rem auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.colors.white};
	border-radius: 0.8rem;
`;
