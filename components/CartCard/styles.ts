import styled from 'styled-components';

export const BoxCard = styled.div`
	width: 100%;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-top: 1px solid ${props => props.theme.colors.darkGray};
	transition: 0.2s;

	&:first-child {
		border: 0;
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
	border-radius: 0.8rem;
	object-fit: contain;
	color: ${props => props.theme.colors.white};
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

export const Store = styled.span`
	font-size: 0.85rem;
	font-weight: 400;
`;

export const Description = styled.span`
	font-size: 1.1rem;
	font-weight: 400;
`;

export const Composition = styled.span`
	font-size: 0.8rem;
	font-weight: 400;
`;

export const Price = styled.span`
	font-size: 1rem;
	font-weight: 400;
`;

export const TotalPrice = styled.span`
	font-size: 1.4rem;
	font-weight: 600;
`;
