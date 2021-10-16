import React from 'react';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FiChevronRight } from 'react-icons/fi';
import {
	BoxCard,
	Text,
	Store,
	Name,
	Item,
	Quantity,
	Description,
	Status,
	Span,
	Total,
	Line,
	Date,
} from './styles';

interface Items {
	quantity: number;
	descriptionProduct: string;
}

interface Props {
	orderId: string;
	imageSrc: string;
	storeName: string;
	status: string;
	time: string;
	total: number;
	items: Items[];
}

const OrdersCard: React.FC<Props> = ({
	orderId,
	imageSrc,
	storeName,
	status,
	time,
	total,
	items,
}) => {
	const timeConverted = format(parseISO(time), 'iiiiii, dd MMM yy - HH:mm', { locale: ptBR });
	const totalString = total.toFixed(2);
	const totalConverted = totalString.replace('.', ',');

	return (
		<Link href={`/customer/order/${orderId}`}>
			<BoxCard>
				<Text>
					<Store>
						<img src={imageSrc} alt={storeName} />
						<Line>
							<Name>{storeName}</Name>
							<Date>{timeConverted}</Date>
						</Line>
					</Store>
					<Text style={{ gap: '0.2rem' }}>
						{items.map((item, index) => (
							<Item key={index}>
								<Quantity>{item.quantity}x</Quantity>
								<Description>{item.descriptionProduct}</Description>
							</Item>
						))}
					</Text>
					<Status>
						<Description>
							Status:
							{status === 'pendingAcceptance' && (
								<Span className='pending-acceptance'>
									<svg
										fill='none'
										stroke='#b1b102'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
									Aguardando Aceitação
								</Span>
							)}
							{status === 'inProgress' && (
								<Span className='in-progress'>
									<svg
										fill='none'
										stroke='#212121'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
									Em andamento
								</Span>
							)}
							{status === 'finished' && (
								<Span className='finished'>
									<svg
										fill='none'
										stroke='#00c2b2'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
									Concluído
								</Span>
							)}
							{status === 'canceled' && (
								<Span className='canceled'>
									<svg
										fill='none'
										stroke='#e70101'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
									Cancelado
								</Span>
							)}
						</Description>
					</Status>
					<Total>R$ {totalConverted}</Total>
				</Text>
				<FiChevronRight size={30} style={{ color: '#212121' }} />
			</BoxCard>
		</Link>
	);
};

export default OrdersCard;
