import styled from "styled-components";
import Styled from "styled-components";

export const Text = Styled.span`
	color: ${(props) => props.theme.colors.white};
	font-size: 15px;
`;

export const Title = Styled.span`
	color: ${(props) => props.theme.colors.black};
	font-size: 50px;
	font-weight: 700;
`;

export const Section = Styled.section`
	text-align: center;
	margin: 40px 0;
`;

export const BoxCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 90%;
	margin: 0 auto;

	@media screen and (min-width: 630px) {
		display: grid;
		grid-template-columns: 200px 200px;
	}

	@media screen and (min-width: 800px) {
		display: grid;
		grid-template-columns: 250px 250px 250px;
	}
`;

export const Price = Styled.span`
	color: ${(props) => props.theme.colors.white};
	font-size: 30px;
	font-weight: 700;
`;
