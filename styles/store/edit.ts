import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Section = styled.section`
	max-width: 800px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: flex-start;
	gap: 1rem;
	padding: 1rem 2.5rem;

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
	width: 100%;
	padding: 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 1rem;
	background-color: ${props => props.theme.colors.white};
	transition: 0.2s;
	cursor: pointer;
	margin: 1.1rem auto 0 auto;

	&:first-child {
		border: 0;
	}

	&:hover {
		filter: brightness(0.85);
	}

	@media (max-width: 800px) {
		&:hover {
			filter: none;
		}
	}
`;

export const Text = styled.span`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 0.5rem;
`;

export const Title = styled.span`
	font-size: 1.2rem;
	font-weight: 400;
`;

export const Message = styled.span`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${props => props.theme.colors.green};
	margin-top: 0.5rem;
`;
