'use client'

import { React } from 'react';
import { useState } from 'react';
import Button from './Button';

const Display = () =>{
    const [state,setState] = useState({count:0});
    return <div>
        Count:{state.count}
        <Button {...{state,setState}}/>
    </div>;
}
	

export default Display;