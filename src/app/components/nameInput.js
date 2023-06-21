
import { React } from 'react';

const NameTextBox = (context) => {
	const { state,setState } = context;

	return (
		<label>Customer Name:{}
			<input
				id="input"
				type="text"
				value={ state.name }
				onChange={ (evt) =>
					setState({
						...state,
						name:evt.target.value,
						}) }
			/>
		</label>);
};

export default NameTextBox;
