import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import Button from '../button/Button'


const ExpireSubscription = (props) => {
    /////METHODE FOR REDIRECTING TO ACCOUNT
    const history = useHistory()
    const updateSubscriptionHandler = () => {
        history.push('/account')
    }
    /////RENDERING
    return (
        <div className='expire__subscription'>
            <h1 className='expire__subscription__title'>{props.message}</h1>
            <h1 className='expire__subscription__title marginBottom-extralarge'>{props.sMessage}</h1>
            <p className='expire__subscription__message'>To continue enjoying Rupkotha, please fill in your</p>
            <p className='expire__subscription__message'>payment details and {props.secMessage} your account.</p>
            <div style={{ marginLeft: '10%' }}><Button text='update subscription' handler={updateSubscriptionHandler} /></div>
            <Link className='cancel__button display colorBlack' to='/home'>No Thanks</Link>
        </div>
    );
};

export default ExpireSubscription;