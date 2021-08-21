import styled from 'styled-components';

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	background-color: ${props => props.theme.colors.blackRGBA};
	width: 100vw;
	height: 100vh;
	padding: 0 2.5rem;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1100;
`;

export const Alert = styled.div`
	background-color: ${props => props.theme.colors.white};
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 1rem;
	width: 100%;
	max-width: 400px;
	padding: 1rem;
	border-radius: 1rem;
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	height: 100%;
	margin: auto 0;

	svg {
		margin-left: 0.5rem;
		width: 2rem;
	}

	@media (max-width: 350px) {
		svg {
            margin-left: 0;
            width: 0;
            visibility: hidden;
		}
	}
`;

export const Close = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	position: relative;
	height: 100%;
	width: 1.5rem;

	svg {
		width: 1.8rem;
		position: absolute;
	}

    @media (max-width: 350px) {
		svg {
			width: 1.4rem;
		}
	}
`;

export const Text = styled.span`
	color: ${props => props.theme.colors.black};
	font-size: 0.9rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	height: 1.8rem;

	@media (max-width: 400px) {
		font-size: 0.8rem;
	}

	@media (max-width: 350px) {
		font-size: 0.7rem;
	}
`;

export const Text2 = styled.span`
	color: ${props => props.theme.colors.black};
	font-size: 0.8rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
    
	@media (max-width: 400px) {
		font-size: 0.7rem;
	}

	@media (max-width: 350px) {
		font-size: 0.6rem;
	}
`;

export const Img = styled.img`
	width: 1rem;
	margin: 0 0.5rem 0.2rem 0.5rem;
`;

export const Arrow = styled.div`
	border-top: 20px solid ${props => props.theme.colors.white};
	border-left: 20px solid transparent;
	border-right: 20px solid transparent;
	border-bottom: 20px solid transparent;
	/* background-color: ${props => props.theme.colors.white}; */
`;
