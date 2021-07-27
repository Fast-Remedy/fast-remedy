import styled from 'styled-components';

export const BoxCard = styled.div`
	width: 100%;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background-color: ${props => props.theme.colors.white};
	border-top: 1px solid ${props => props.theme.colors.darkGray};
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		filter: brightness(0.85);
	}

	&:first-child {
		border-radius: 1rem 1rem 0 0;
		border: 0;
	}

	&:last-child {
		border-radius: 0 0 1rem 1rem;
	}
`;

export const Line = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Image = styled.img`
	width: 6rem;
	height: 6rem;
`;

export const Text = styled.span`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 0.5rem;
`;

export const Quantity = styled.span`
	color: ${props => props.theme.colors.green};
	font-size: 1.2rem;
	font-weight: 400;
`;

export const Description = styled.span`
	font-size: 1.1rem;
	font-weight: 400;
`;

export const Price = styled.span`
	font-size: 1.4rem;
	font-weight: 600;
`;
