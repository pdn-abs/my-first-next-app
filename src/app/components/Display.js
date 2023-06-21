'use client'

import { React } from 'react';
import { useState } from 'react';
import Main from '../components/Main';

const Display = () =>{
    const [state,setState] = useState({
        name: '',
        phoneNo: '',
        gender: '',
        customerDetails: [],
    });
    return <Main {...{state,setState}}/>;
}
	

export default Display;