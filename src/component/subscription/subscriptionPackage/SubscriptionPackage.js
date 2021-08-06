import React from 'react';

const SubscriptionPackage = () => {
    return (
        <div className='subscription__package'>
            <div className='subscription__package__category'><p>Individual</p></div>
            <p className='subscription__package__price'>$4.49</p>
            <p className='subscription__package__duration'>Monthly</p>
            <p className='subscription__package__message'>No commitment cancel anytime</p>
        </div>
    );
};

export default SubscriptionPackage;