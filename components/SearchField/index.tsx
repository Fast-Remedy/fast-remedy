import React from 'react';
import { ContainerBox, InputBox } from './styles';

const SearchField: React.FC = () => {
	return (
		<ContainerBox>
			<InputBox type='text' placeholder='Digite algo aqui...' />
		</ContainerBox>
	);
};

export default SearchField;
