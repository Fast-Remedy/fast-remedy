import styled from 'styled-components';

export const BoxCard = styled.div`
	width: 100%;
	padding: 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
    background-color: ${props => props.theme.colors.white};
    border-bottom: 1px solid ${props => props.theme.colors.darkGray};
    border-radius: 1rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        filter: brightness(0.85);
    }

    &:last-child {
        border: 0;
    }

    @media (max-width: 800px) {
        &:hover {
            filter: none;
        }
    }
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

export const Description = styled.span`
	font-size: 1.1rem;
	font-weight: 400;
`;

export const Price = styled.span`
	font-size: 1.4rem;
	font-weight: 600;
`;
