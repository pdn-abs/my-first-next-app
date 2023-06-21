import { React } from 'react';

const Customer = (customerDetail) => {
	const { id, name, phoneNo, gender } = customerDetail;

	return (
		<div
			key={ id }
			className={ `customer ${ gender }` }
			id={ `customer ${ gender }` }
		>
			<div>{name}</div>
			<div>{phoneNo}</div></div>
	);
};

export default Customer;
