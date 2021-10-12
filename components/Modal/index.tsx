import React from 'react';
import Button from '../Button';
import { Section, Text } from './styles';

interface Props {
	modalType: string;
	mainFunction: () => void;
	backFunction: () => void;
}

const Modal: React.FC<Props> = ({ modalType, mainFunction, backFunction }) => {
	return (
		<Section>
			{modalType === 'storeError' && (
				<>
					<Text>Não é possível adicionar produtos de lojas diferentes!</Text>
					<Button className='icon margin right' width='22rem' onClick={mainFunction}>
						<svg
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
								clipRule='evenodd'
							/>
						</svg>
						Limpar itens e adicionar novo
					</Button>
					<Button className='icon back' width='22rem' onClick={backFunction}>
						<svg
							className='icon'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
								clipRule='evenodd'
							/>
						</svg>
						Voltar
					</Button>
				</>
			)}
		</Section>
	);
};

export default Modal;
