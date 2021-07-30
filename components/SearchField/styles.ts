import styled from 'styled-components';

export const ContainerBox = styled.span`
	max-width: 800px;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const InputBox = styled.input`
	width: 100%;
	background-color: ${props => props.theme.colors.white};
	color: ${props => props.theme.colors.black};
	font-size: 1rem;
	font-weight: 400;
    border: 1.5px solid ${props => props.theme.colors.white};
    border-radius: 1rem;
    padding: 1rem;
    outline: 0;

    &:focus {
        border: 1.5px solid ${props => props.theme.colors.green}
    }
`;
