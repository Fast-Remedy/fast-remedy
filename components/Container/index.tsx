import React from 'react';
import { ReactElement } from 'react';
import { ContainerBox } from './styles';

interface ContainerProps {
	children: ReactElement;
	style?: object;
}

const Container = ({ children, style }: ContainerProps) => {
	return <ContainerBox style={style}>{children}</ContainerBox>;
};

export default Container;
