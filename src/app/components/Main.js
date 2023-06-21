
import { React } from 'react';
import NameTextBox from './nameInput';
import PhoneNoTextBox from './phoneNoInput';
import GenderInput from './genderInput';
import SaveButton from './saveButton';
import CustomerList from './customerList';

const Main = (context) => <div className="App" role="App">
	<div  className="header" >
	<h2>Super Market - Add Customer Details</h2>
	</div>
	<div className="text-box"><NameTextBox {...context}/></div>
	<div className="text-box"><PhoneNoTextBox {...context}/></div>
	<div className="text-box"><GenderInput {...context}/></div>
	<div className="text-box"><SaveButton {...context}/></div>
	<div className="grid-container" id="grid-container">
		<CustomerList {...context}/>
	</div>
</div>;

export default Main;
