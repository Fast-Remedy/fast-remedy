import styled from 'styled-components';

export const MessageBox = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
	font-size: 0.85rem;
	font-weight: 600;
	color: ${props => props.theme.colors.red};
`;
