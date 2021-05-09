import Styled from "styled-components";

export const BoxCard = Styled.div`
	width: 180px;
	padding: 20px 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.background.green};
	margin: 20px 0 0 0;
	border-radius: 10px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Image = Styled.img`
	width: 80px;
	height: 80px;
	margin: 0 0 10px 0;
`;
