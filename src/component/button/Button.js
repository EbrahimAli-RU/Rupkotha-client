import React from 'react';

const Button = (props) => {
    return (
        <button className='btn' onClick={props.handler}>{props.text}</button>

    );
};

export default Button;