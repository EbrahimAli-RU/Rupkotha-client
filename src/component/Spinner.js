import React from 'react';

const Spinner = ({ show }) => {
    return (
        <>
        {show ? <div className='spinner__container'>
            <p>Loading............</p>
        </div>: null}
        </>
    );
};

export default Spinner;