import React, { ReactNode } from 'react';
import { ReactElement } from 'react';

interface ContainerProps {
    children: ReactElement
}

const Container = ({ children }: ContainerProps) => {
	return ( children );
};

export default Container;
