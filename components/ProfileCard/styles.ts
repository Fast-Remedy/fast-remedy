import styled from 'styled-components';

export const Button = styled.button`
	width: 100%;
	border: 0;
	border-radius: 0.8rem;
	background-color: transparent;
`;

export const BoxCard = styled.div`
	width: 100%;
	padding: 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 0.8rem;
	background-color: ${props => props.theme.colors.white};
	transition: 0.2s;
	cursor: pointer;

	&:first-child {
		border: 0;
	}

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
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 0.5rem;
`;

export const Title = styled.span`
	font-size: 1.2rem;
	font-weight: 400;
	color: ${props => props.theme.colors.black};
	text-decoration: none;
`;
