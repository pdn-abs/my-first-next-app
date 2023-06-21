import { React } from 'react';

const GenderInput = ({state,setState}) =>
	<label htmlFor="gender">Gender:{}
		<select
			name="gender"
			id="gender"
			onChange={ (evt) =>
				setState({
					...state,
					gender:evt.target.value,
					}) }
		>
			<option value="male">Male</option>
			<option value="female">Female</option>
		</select>
	</label>;

export default GenderInput;
