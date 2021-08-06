import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import SubscriptionPackage from './subscriptionPackage/SubscriptionPackage';
import AccountInput from '../authInput/AccountInput';
import Button from '../button/Button';
import axios from '../../utils/axios/axios'

const Subscription = (props) => {
    const [showCuppon, setShowCuppon] = useState(false)
    const checkHandler = () => {
        console.log('OKKKK')
        axios.get('/avater/init', {}).then(res => {
            console.log(res)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
            console.log(err.response);
        })
    }
    const applyCupponHandler = () => {
        setShowCuppon(true);
    }
    const closeCupponHandler = () => {
        // setShow(false)
        setShowCuppon(false)
    }
    return (
        <>
            <div className={showCuppon ? 'blockDisplay' : 'noneDisplay'} >
                <div className='apply__cuppon__wrapper'>
                    <div className='create__profile__content'>
                        <div className='apply__cuppon__title__back__wrapper'>
                            <div className='apply__cuppon__back_btn' onClick={closeCupponHandler}><FontAwesomeIcon icon={faArrowLeft} /></div>
                            <h2 className='apply__cuppon__title'>Redeem Gift Card / Code</h2>
                        </div>
                        <div className='apply__cuppon__input__box'>
                            <input className='apply__cuppon__input__field' type='text' placeholder='Enter Code' />
                            <button className='apply__cuppon__apply__button'>apply</button>
                        </div>
                        <p className='cancel__button display' style={{ color: 'rgb(36, 82, 246)', cursor: 'pointer' }} onClick={closeCupponHandler} >Cancel</p>
                    </div>
                </div>
            </div>
            <div className={props.show && !showCuppon ? 'blockDisplay' : 'noneDisplay'} >
                <div className='subscription__wrapper'>
                    <div className='subscription__wrapper__content'>
                        <div className='apply__cuppon__title__back__wrapper'>
                            <div className='apply__cuppon__back_btn' onClick={props.handler}><FontAwesomeIcon icon={faArrowLeft} /></div>
                            <h2 className='apply__cuppon__title'>Choose Your Plan</h2>
                        </div>
                        <div className='subscription__package__wrapper'>
                            <SubscriptionPackage />
                            <SubscriptionPackage />
                            <SubscriptionPackage />
                        </div>
                        <div>
                            <p className='subscription__terms'>By clicking below you agree you are enrolling in automatic payments of $4.99 USD
                                (plus any tax) per month until your subscription is cancelled.</p>
                            <p className='subscription__terms'>
                                You can cancel at any time, effective at the end of the billing period.
                                There are no refunds or credits for partial months or years.
                            </p>
                        </div>
                        <div style={{ marginTop: '4rem' }}><AccountInput width={true} link='/' title="Redeem Gift Card / Code" handler={applyCupponHandler} /></div>
                        <div className='subscription__button'><Button text='Continue' handler={checkHandler} loading={false} /></div>
                        <p className='cancel__button display' style={{ color: 'rgb(36, 82, 246)', cursor: 'pointer' }} onClick={props.handler} >Cancel</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Subscription;