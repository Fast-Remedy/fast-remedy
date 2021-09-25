import styled from 'styled-components';

export const Box = styled.a`
	height: 2.5rem;
	width: 9.5rem;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.5rem;

	&:focus {
		outline: none;
		filter: brightness(0.85);
	}

	@media (max-width: 800px) {
		&:focus {
			filter: none;
		}
	}
`;

export const BoxEnd = styled.a`
	height: 2.5rem;
	width: 9.5rem;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 0.5rem;
`;

export const Image = styled.svg`
	height: 3rem;
	width: 3rem;
	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.85);
	}

	@media (max-width: 800px) {
		&:hover {
			filter: none;
		}
	}
`;

export const Items = styled.div`
	height: 1.8rem;
	width: 6rem;
	font-size: 1rem;
	font-weight: 600;
	color: ${props => props.theme.colors.white};
	background-color: ${props => props.theme.colors.green};
	border-radius: 0.8rem;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.85);
	}

	@media (max-width: 800px) {
		&:hover {
			filter: none;
		}
	}
`;
