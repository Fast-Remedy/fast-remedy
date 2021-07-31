import React from 'react';
import { MessageBox } from './styles';

const LoadingMessage = ({ children }) => {
	return <MessageBox>{children}</MessageBox>;
};

export default LoadingMessage;
