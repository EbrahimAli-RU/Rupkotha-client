import React from 'react';
import { Spinner as Spin } from 'react-bootstrap'

const Spinner = ({ show }) => {
    return (
        <>
        {show ? <div className='spinner__container'>
            <div className='spin__wrapper'><Spin className='spinner__container__spin' animation="border" variant="danger" /></div>
        </div>: null}
        </>
    );
};

export default Spinner;