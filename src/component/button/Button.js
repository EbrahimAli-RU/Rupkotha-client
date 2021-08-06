import React from 'react';
import { Spinner } from 'react-bootstrap'
import DotSpinner from '../spinner/DotSpinner';

const Button = (props) => {
    return (
        <button className='btn' onClick={props.handler} disabled={props.isDisable}>{props.loading? <Spinner
            as="span"
            animation="border"
            // size="sm"
            role="status"
            aria-hidden="true"
          /> : `${props.text}` }</button>

    );
};

export default Button;