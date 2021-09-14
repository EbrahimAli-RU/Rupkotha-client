import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import SubscriptionPackage from './subscriptionPackage/SubscriptionPackage';
import AccountInput from '../authInput/AccountInput';
import Button from '../button/Button';
import Error from '../Error';
import axios from '../../utils/axios/axios'

const Subscription = (props) => {
    const [showCuppon, setShowCuppon] = useState(false)
    const [packages, setPackages] = useState([])
    const [activePackage, setActivePackage] = useState(0)
    const [flag, setFlag] = useState(false)
    const [cuponCode, setCuponCode] = useState('')
    const [discount, setDiscount] = useState(0)
    const [showError, setShowError] = useState({ error: false, message: '' })
    const history = useHistory();
    useEffect(() => {
        axios.get('/package').then(res => {
            setPackages(res.data.data.package)
            setFlag(true)
        }).catch(err => {
            console.log(err.response)
        })
    }, [])
    const checkHandler = () => {
        axios.post('/payment/init', {
            tomalAmount: packages[activePackage].price,
            price: packages[activePackage].price - ((discount * packages[activePackage].price) / 100),
            duration: packages[activePackage].time,
            usedCupon: cuponCode
        }).then(res => {
            window.location.replace(res.data.data.url)
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

    const handleSelect = (price, duration, index) => {
        setActivePackage(index)
    }
    const cuponCodeHandler = (e) => {
        setCuponCode(e.target.value)
    }
    const applyCuponCodeHandler = () => {
        axios.get(`/cupon/${cuponCode}`).then(res => {
            console.log(res.data.data.cupon.discountInPercent)
            setDiscount(res.data.data.cupon.discountInPercent)
            setShowCuppon(false)
        }).catch(err => {
            console.log(err.response)
            setShowError({ error: true, message: err.response.data.message })

        })
    }
    const closeErrorHandler = () => { setShowError({ error: false, message: '' }) }
    return (
        <>
            <Error show={showError.error} handler={closeErrorHandler} message={showError.message} />
            {flag ?
                <>
                    <div className={showCuppon ? 'blockDisplay' : 'noneDisplay'} >
                        <div className='apply__cuppon__wrapper'>
                            <div className='create__profile__content'>
                                <div className='apply__cuppon__title__back__wrapper'>
                                    <div className='apply__cuppon__back_btn' onClick={closeCupponHandler}><FontAwesomeIcon icon={faArrowLeft} /></div>
                                    <h2 className='apply__cuppon__title'>Redeem Gift Card / Code</h2>
                                </div>
                                <div className='apply__cuppon__input__box'>
                                    <input
                                        className='apply__cuppon__input__field'
                                        type='text'
                                        placeholder='Enter Code'
                                        onChange={cuponCodeHandler}
                                        value={cuponCode} />
                                    <button className='apply__cuppon__apply__button' onClick={applyCuponCodeHandler}>apply</button>
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
                                    {packages.map((el, index) => <SubscriptionPackage
                                        activePackage={activePackage}
                                        handler={handleSelect}
                                        key={el._id}
                                        index={index}
                                        color={el.color}
                                        duration={el.duration} price={el.price} />)}
                                </div>
                                <div>
                                    <p className='subscription__terms'>
                                        By clicking below you agree you are enrolling in automatic payments of
                                        <span style={{ fontWeight: 'bold', color: 'black' }}> ৳ {packages[activePackage].price - ((discount * packages[activePackage].price) / 100)} TAKA </span>
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
                    </div></> : null}
        </>

    );
};

export default Subscription;