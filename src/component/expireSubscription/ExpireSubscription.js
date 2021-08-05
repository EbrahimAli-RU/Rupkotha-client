import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import Button from '../button/Button'


const ExpireSubscription = () => {
    /////METHODE FOR REDIRECTING TO ACCOUNT
    const history = useHistory()
    const updateSubscriptionHandler = () => {
        history.push('/account')
    }
    /////RENDERING
    return (
        <div className='expire__subscription'>
            <h1 className='expire__subscription__title'>Your Subscription Has</h1>
            <h1 className='expire__subscription__title marginBottom-extralarge'>Expired</h1>
            <p className='expire__subscription__message'>To continue enjoying Rupkotha, please fill in your</p>
            <p className='expire__subscription__message'>payment details and resume your account.</p>
            <div style={{ marginLeft: '10%' }}><Button text='update subscription' handler={updateSubscriptionHandler} /></div>
            <Link className='cancel__button display colorBlack' to='/home'>No Thanks</Link>
        </div>
    );
};

export default ExpireSubscription;