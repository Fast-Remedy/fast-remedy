import styled from "styled-components";
import Styled from "styled-components";

export const Text = Styled.span`
	color: ${(props) => props.theme.color.white};
	font-size: 18px;
	font-weight: 700;
`;

export const Title = Styled.span`
	color: ${(props) => props.theme.color.black};
	font-size: 50px;
	font-weight: 700;
`;

export const Section = Styled.section`
	text-align: center;
	margin: 40px 0 0 0;
`;

export const BoxCard = styled.div``;
