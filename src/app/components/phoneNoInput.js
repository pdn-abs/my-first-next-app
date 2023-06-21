import { React } from 'react';

const PhoneNoTextBox = (context) => {
	const { state,setState } = context;

	return (
		<label>Customer Mobile No:{}
			<input
				id="input"
				type="text"
				value={ state.phoneNo }
				onChange={ (evt) =>
					setState({
						...state,
						phoneNo:evt.target.value,
						}) }
			/>
		</label>);
};

export default PhoneNoTextBox;
