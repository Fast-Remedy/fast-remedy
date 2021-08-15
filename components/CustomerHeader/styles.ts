import styled from 'styled-components';

export const HeaderContainer = styled.header`
	width: 100%;
	background-color: ${props => props.theme.colors.green};
	margin-bottom: 1rem;
	z-index: 1000;

	@media (max-width: 800px) {
		background-color: ${props => props.theme.colors.white};
		border-top: 1px solid ${props => props.theme.colors.darkGray};
		position: fixed;
		bottom: 0;
		margin-bottom: 0;
	}
`;

export const Content = styled.div`
	max-width: 800px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4rem;

	@media (max-width: 800px) {
		gap: 0;
	}
`;

export const TitleImage = styled.img`
	max-width: 300px;
	height: 5rem;
	margin: 1rem 0;
	cursor: pointer;
	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.85);
	}

	@media (max-width: 800px) {
		visibility: hidden;
		padding: 0;
		height: 0;
	}
`;

export const Separator = styled.div`
	width: 1px;
	height: 4rem;
	border-right: 1px solid ${props => props.theme.colors.white};

	@media (max-width: 800px) {
		visibility: hidden;
		padding: 0;
		height: 0;
		width: 0;
	}
`;

export const Nav = styled.nav`
	width: 100%;
	max-width: 500px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 0;

	@media (max-width: 800px) {
		padding-bottom: 2.5rem;
		justify-content: space-around;
	}
`;

export const Picture = styled.picture`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.3rem;
	cursor: pointer;
	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.7);
	}

	&.active:hover {
		filter: brightness(0.85);
	}

	@media (max-width: 800px) {
		&:hover {
			filter: none;
		}
	}
`;

export const Image = styled.img`
	width: 2rem;
	height: 2rem;
	filter: brightness(0) invert(1) brightness(0.8);

	&.active {
		filter: none;
	}

	@media (min-width: 801px) {
		filter: brightness(0) invert(1) brightness(0.82);

		&.active {
			filter: brightness(0) invert(1);
		}
	}
`;

export const Text = styled.span`
	color: ${props => props.theme.colors.white};
	font-size: 0.8rem;
	filter: brightness(0) invert(1) brightness(0.8);

	&.active {
		filter: none;
	}

	@media (max-width: 800px) {
		color: ${props => props.theme.colors.green};
	}
`;
