import React from 'react';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FiChevronRight } from 'react-icons/fi';
import { BoxCard, Text, Name, Line } from './styles';

interface IAddressCustomer {
	_id: string;
	streetNameCustomer: string;
	streetNumberCustomer: string;
	complementCustomer: string;
	neighborhoodCustomer: string;
	cityCustomer: string;
	stateCustomer: string;
	mainAddressCustomer: boolean;
	idCustomer: string;
}

interface IProduct {
	_id: string;
	idStore: string;
	categoryProduct: string;
	descriptionProduct: string;
	compositionProduct: string;
	imageProduct: string;
	priceProduct: number;
	availabilityProduct: boolean;
	registrationDateProduct: string;
	quantity: number;
	storeName: string;
}

interface Props {
	orderId: string;
	customerName: string;
	customerAddress: IAddressCustomer[];
	items: IProduct[];
	time: string;
}

const StoreNewOrderCard: React.FC<Props> = ({
	orderId,
	customerName,
	customerAddress,
	items,
	time,
}) => {
	let totalQuantity = 0;
	const itemsQuantity = items.map(product => product.quantity);
	if (itemsQuantity.length > 0) {
		totalQuantity = itemsQuantity.reduce((a: number, b: number) => a + b);
	}

	return (
		<Link href={`/store/order/${orderId}`}>
			<BoxCard>
				<Text>
					<Name>{customerName}</Name>
					<Line>{totalQuantity} item(s)</Line>
					<Line>
						{`${customerAddress[0].streetNameCustomer}, Nº ${
							customerAddress[0].streetNumberCustomer
						}, ${
							customerAddress[0].complementCustomer &&
							customerAddress[0].complementCustomer + ', '
						}${customerAddress[0].neighborhoodCustomer}, ${
							customerAddress[0].cityCustomer
						} - ${customerAddress[0].stateCustomer}`}
					</Line>
					<Line>
						{format(parseISO(time), 'iiiiii, dd MMM yy - HH:mm', { locale: ptBR })}
					</Line>
				</Text>
				<FiChevronRight size={30} style={{ color: '#212121', marginRight: '-0.7rem' }} />
			</BoxCard>
		</Link>
	);
};

export default StoreNewOrderCard;
