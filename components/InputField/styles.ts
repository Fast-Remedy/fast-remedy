import styled from 'styled-components';

export const ContainerBox = styled.span`
	max-width: 800px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

export const Label = styled.label`
	width: 100%;
	color: ${props => props.theme.colors.black};
	font-size: 1rem;
	font-weight: 400;
	padding: 1rem;
	outline: 0;
	text-align: start;
	font-size: 0.85rem;
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: space-between;

	&:focus {
		border: 1.5px solid ${props => props.theme.colors.green};
	}

	svg {
		margin-top: 1px;
		width: 1rem;
		height: 1rem;
	}
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
	-webkit-appearance: none;
    transition: all 0.2s;

	&:focus {
		border: 1.5px solid ${props => props.theme.colors.green};
	}

	&::placeholder {
		color: ${props => props.theme.colors.darkerGray};
	}

    &.incorrect {
        border: 1.5px solid ${props => props.theme.colors.red};
    }
`;
