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
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const Image = styled.img`
	width: 13rem;
	height: 13rem;
`;

export const Text = styled.span`
	margin-top: 2rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const Description = styled.span`
	font-size: 1.2rem;
	font-weight: 400;
	text-align: center;
`;

export const Price = styled.span`
	font-size: 1.6rem;
	font-weight: 600;
`;

export const Availability = styled.span`
	font-size: 1rem;
	font-weight: 400;
	color: ${props => props.theme.colors.red};
`;
