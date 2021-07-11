import React from 'react';

const Button = (props) => {
    return (
        <button className='btn' onClick={props.handler} disabled={props.isDisable}>{props.text}</button>

    );
};

export default Button;