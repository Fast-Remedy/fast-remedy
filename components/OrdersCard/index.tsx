import React from 'react';
import Link from 'next/link';
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
	Date,
} from './styles';

interface Items {
	quantity: number;
	description: string;
}

interface Props {
	orderId: string;
	imageSrc: string;
	storeName: string;
	status: string;
	time: string;
	items: Items[];
}

const OrdersCard: React.FC<Props> = ({ orderId, imageSrc, storeName, status, time, items }) => (
	<Link href={`/customer/order/${orderId}`}>
		<BoxCard>
			<Text>
				<Store>
					<img src={imageSrc} alt={storeName} />
					<Name>{storeName}</Name>
				</Store>
				{items.map((item, index) => (
					<Item key={index}>
						<Quantity>{item.quantity}x</Quantity>
						<Description>{item.description}</Description>
					</Item>
				))}
				<Status>
					<Description>
						Status:
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
				<Date>{time}</Date>
			</Text>
			<FiChevronRight size={30} style={{ color: '#212121' }} />
		</BoxCard>
	</Link>
);

export default OrdersCard;
