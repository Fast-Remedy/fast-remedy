import styled from 'styled-components';

export const MessageBox = styled.span`
	display: flex;
	align-items: center;
    justify-content: center;
    padding: 2rem;
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme.colors.black}
`;
