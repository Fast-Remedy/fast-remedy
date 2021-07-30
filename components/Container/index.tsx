import React from 'react';
import { ReactElement } from 'react';
import { ContainerBox } from './styles';

interface ContainerProps {
    children: ReactElement
}

const Container = ({ children }: ContainerProps) => {
	return (
        <ContainerBox>
            {children}
        </ContainerBox>
     );
};

export default Container;
