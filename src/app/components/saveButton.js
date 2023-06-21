import { React } from 'react';

const customerManager = {
	addCustomer: (context) => {
		const { state ,setState} = context;

		return [
			...state.customerDetails,
			{
				id: 'ajhajsb',
				name: state.name,
				phoneNo: state.phoneNo,
				gender: state.gender,
			},
		];
	},
};
const SaveDetails=(setState, state)=> {
	return setState({
		...state,
		customerDetails: customerManager.addCustomer({ state, setState }),
		name: '',
		phoneNo: '',
		gender: '',
	});
}
const SaveButton = ({ state ,setState}) =>
	<button onClick={ ()=>SaveDetails(setState, state) }>
		Save
	</button>;

export default SaveButton;


