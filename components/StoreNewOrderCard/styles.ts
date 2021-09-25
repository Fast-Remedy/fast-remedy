import styled from 'styled-components';

export const BoxCard = styled.div`
	width: 100%;
	padding: 1rem 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${props => props.theme.colors.white};
	border-top: 1px solid ${props => props.theme.colors.darkGray};
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		filter: brightness(0.85);
	}

	@media (max-width: 800px) {
		&:hover {
			filter: none;
		}
	}

	&:last-child {
		border-radius: 0 0 0.8rem 0.8rem;
	}
`;

export const Text = styled.span`
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 0.5rem;
`;

export const Name = styled.span`
	width: 100%;
	font-size: 1.3rem;
	font-weight: 400;
	display: inline-block;
	gap: 0.5rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const Line = styled.span`
	display: flex;
	flex-direction: column;
	font-size: 0.9rem;
	font-weight: 400;
`;
