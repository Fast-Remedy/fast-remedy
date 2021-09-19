import styled from 'styled-components';

export const BoxCard = styled.div`
	width: 100%;
	padding: 1rem 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 2px solid ${props => props.theme.colors.white};
	background-color: ${props => props.theme.colors.white};
	border-radius: 1rem;
	transition: 0.2s;
	gap: 1.5rem;
	cursor: pointer;

	img {
		height: 2rem;
		width: 2rem;
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
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 0.2rem;
`;

export const Customer = styled.span`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 0.5rem;
	margin-bottom: 1rem;

	img {
		border: 1px solid ${props => props.theme.colors.darkGray};
		border-radius: 50%;
        height: 3rem;
        width: 3rem;
	}
`;

export const Name = styled.span`
	font-size: 1.3rem;
	font-weight: 400;
	display: flex;
	gap: 0.5rem;
	overflow: hidden;
`;

export const Details = styled.span`
	font-size: 1rem;
	font-weight: 400;
	display: flex;
	gap: 0.5rem;
	overflow: hidden;
`;

export const Item = styled.span`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 0.5rem;
`;

export const Quantity = styled.span`
	min-width: 1.2rem;
	font-size: 1.1rem;
	font-weight: 400;
`;

export const Status = styled.span`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: flex-start;
	gap: 0.5rem;
	margin-top: 1rem;
`;

export const Description = styled.span`
	width: 100%;
	display: flex;
	flex-direction: column;
	font-size: 1rem;
	font-weight: 400;
	display: flex;
	gap: 0.2rem;
	overflow: hidden;
`;

export const Span = styled.span`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.3rem;

	svg {
		height: 1.5rem;
		width: 1.5rem;
	}

    &.pending-acceptance {
		color: ${props => props.theme.colors.yellow};
	}
    
	&.in-progress {
		color: ${props => props.theme.colors.black};
	}

	&.finished {
		color: ${props => props.theme.colors.green};
	}

	&.canceled {
		color: ${props => props.theme.colors.red};
	}
`;

export const Date = styled.span`
	display: flex;
	flex-direction: column;
	font-size: 0.9rem;
	font-weight: 400;
	margin-top: 1rem;
`;
