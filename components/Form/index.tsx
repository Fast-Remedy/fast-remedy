import React, { FormEvent } from 'react';
import { ReactElement } from 'react';
import { FormBox } from './styles';

interface ContainerProps {
	children: ReactElement;
	onSubmit(e: FormEvent): void;
}

const Form = ({ children, onSubmit }: ContainerProps) => {
	return <FormBox onSubmit={onSubmit}>{children}</FormBox>;
};

export default Form;
