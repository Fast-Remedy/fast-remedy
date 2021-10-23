import styled from 'styled-components';

export const BoxCard = styled.div`
	width: 100%;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.colors.green};
	border-radius: 0.8rem;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	gap: 1rem;
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		filter: brightness(0.85);
		transform: translateY(-10px);
	}

	@media (max-width: 800px) {
		flex-direction: row;
		justify-content: space-between;

		&:hover {
			filter: none;
			transform: none;
		}

		&:active {
			filter: brightness(0.85);
		}
	}
`;

export const Image = styled.img`
	width: 6rem;
	height: 6rem;
	border-radius: 50%;
	object-fit: contain;
	background-color: ${props => props.theme.colors.white};
`;

export const Text = styled.span`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 100%;

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

export const Subtitle = styled.span`
	color: ${props => props.theme.colors.white};
	font-size: 0.8rem;
	font-weight: 300;
	width: 100%;
	max-width: 200px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 800px) {
		font-size: 1rem;
	}

	@media (max-width: 480px) {
		max-width: 180px;
	}

	@media (max-width: 402px) {
		font-size: 0.8rem;
	}

	@media (max-width: 350px) {
		&:last-child {
			margin-top: 0.2rem;
		}
	}

	span {
		font-size: 0.9rem;
		font-weight: 400;
		white-space: nowrap;

		@media (max-width: 800px) {
			font-size: 1.1rem;
		}

		@media (max-width: 402px) {
			font-size: 1rem;
		}

		@media (max-width: 360px) {
			margin-left: 0.2rem;
		}
	}
`;
