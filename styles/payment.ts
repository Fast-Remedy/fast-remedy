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
`;

export const BoxCard = styled.div`
	max-width: 800px;
	width: 100%;
	margin: 1.1rem auto 8rem auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 1rem;
	gap: 1rem;

	div {
		width: 100%;
	}
`;

export const Line = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 1.5rem;
`;
