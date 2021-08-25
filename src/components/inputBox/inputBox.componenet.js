import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const InputBox = (props) => {
    const {inputValue,keyDown,change} = props;
    return ( <>
    <Form.Control size="lg" value={inputValue} placeholder="Search..." type="text" onKeyDown={keyDown} onChange={change} />
    </> );
}
 
export default InputBox;