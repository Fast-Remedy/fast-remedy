import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Alert, Section, Box, Text, Img, Close, Arrow } from './styles';

import { useNavigation } from '../../contexts/NavigationContext';

const InstallMessage1: React.FC = () => {
	const { installMessage, setInstallMessageState } = useNavigation();

	return (
		<>
			<AnimatePresence>
				{installMessage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<Section>
							<Alert>
								<Box>
									<svg
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
											clipRule='evenodd'
										/>
									</svg>
								</Box>
								<Box>
									<Text>Instale nosso aplicativo no seu iPhone:</Text>
									<Text>
										Clique no ícone{' '}
										<Img src='/images/icons/ios-share.png' alt='Compartilhar' />{' '}
										e, em seguida,
									</Text>
									<Text>clique em "Adicionar à Tela de Início".</Text>
								</Box>
								<Close onClick={setInstallMessageState}>
									<svg
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
											clipRule='evenodd'
										/>
									</svg>
								</Close>
							</Alert>
							<Arrow />
						</Section>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default InstallMessage1;
