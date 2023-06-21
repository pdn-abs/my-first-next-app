import Customer from './customer';

const CustomerList = (context) =>
	context.state.customerDetails.map(Customer);

export default CustomerList;
