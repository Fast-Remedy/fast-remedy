import styled from 'styled-components';

export const BoxCard = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 2px solid ${props => props.theme.colors.white};
	background-color: ${props => props.theme.colors.white};
	border-radius: 0.8rem;
	transition: 0.2s;
	cursor: pointer;

	&.active {
		border: 2px solid ${props => props.theme.colors.green};
	}

	img {
		height: 2rem;
		width: 2rem;
	}
`;

export const LeftDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 2rem;
	gap: 1.5rem;
	background-color: ${props => props.theme.colors.white};
	transition: 0.2s;
	border-radius: 0.8rem 0 0 0.8rem;

	&:hover {
		filter: brightness(0.85);
	}

	@media (max-width: 800px) {
		&:hover,
		&:focus {
			filter: none;
		}

		&:active {
			filter: brightness(0.85);
		}
	}
`;

export const Text = styled.span`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 0.2rem;
`;

export const Description = styled.span`
	font-size: 1.1rem;
	font-weight: 400;
`;
