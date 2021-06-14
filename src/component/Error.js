import React from 'react';

const Error = ({show, message}) => {
    return (
        <div className='error' style={{
            top: show ? '5rem' : '-50rem'
        }}><p className='error__message'>{message}</p></div>
    );
};

export default Error;