import React, { ReactNode } from 'react';
import { ReactElement } from 'react';
import { ContainerBox } from './styles';

interface ContainerProps {
    children: ReactElement
    width?: string;
    justify?: string;
}

const ButtonsContainer = ({ children, width, justify }: ContainerProps) => {
	return (
        <ContainerBox width={width} justify={justify}>
            {children}
        </ContainerBox>
     );
};

export default ButtonsContainer;
