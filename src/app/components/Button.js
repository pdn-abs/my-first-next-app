import { React } from 'react';

const Button = ({state,setState}) =>
	<button onClick= {()=>setState({
        ...state,
        count:state.count+1
        })}>
		Click Me!
	</button>;

export default Button;