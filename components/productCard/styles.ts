import styled from 'styled-components';

export const BoxCard = styled.div`
	width: 100%;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.colors.green};
	border-radius: 1rem;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    gap: 1rem;

    @media (max-width: 800px) {
		flex-direction: row;
        justify-content: space-between;
	}
`;

export const Image = styled.img`
	width: 6rem;
	height: 6rem;
    border-radius: 50%;
`;

export const Text = styled.span`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

    @media (max-width: 800px) {
        align-items: flex-start;
	}
`;

export const Title = styled.span`
	color: ${props => props.theme.colors.white};
	font-size: 1.1rem;
	font-weight: 600;

	@media (max-width: 800px) {
		font-size: 1.4rem;
	}
`;

export const Category = styled.span`
	color: ${props => props.theme.colors.white};
	font-size: 0.9rem;
	font-weight: 400;

	@media (max-width: 800px) {
		font-size: 1.1rem;
	}
`;

export const Price = styled.span`
	color: ${(props) => props.theme.colors.white};
	font-size: 30px;
	font-weight: 700;
`;
