import React from 'react';
import Subscription from '../../component/subscription/Subscription';
import Navigation from '../../layout/Navigation';
const Billing = () => {
    return (
        <div>
            <Navigation />
            <Subscription show={true} />
        </div>
    );
};

export default Billing;