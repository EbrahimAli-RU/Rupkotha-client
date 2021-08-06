import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../utils/axios/axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import jwt_decode from "jwt-decode";

import Navigation from "../../layout/Navigation"
import AuthInput from "../../component/authInput/AuthInput"
import SecondInput from "../../component/authInput/SecondInput"
import Button from "../../component/button/Button"
import AccountInput from '../../component/authInput/AccountInput'
import Modal from '../../component/Modal'
import Subscription from '../../component/subscription/Subscription';
import Error from '../../component/Error';


const userData = {
    email: '',
    password: '********',
    userName: '',
    language: 'English'
}

const Account = (props) => {
    const [show, setShow] = useState(true)
    const [user, setUser] = useState(userData)
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const [cancelReward, setCancelReward] = useState(false)
    const [showCuppon, setShowCuppon] = useState(false)
    const [subscriptionPackage, setSubscriptionPackage] = useState(false)
    const [error, setError] = useState({ error: false, message: '' })

    const token = useSelector(state => state.user.token)

    useEffect(() => {
        axios.get(`/user/${jwt_decode(token).id}`).then(res => {
            setUser({ email: res.data.users.email, userName: res.data.users.userName })
        }).catch(err => {
            console.log(err.response)
        })
    }, [])

    const reloginHandler = () => {
        setLoading(true)
        axios.post(`/user/signin`, { email: user.email, password: password }).then(res => {
            setLoading(false)
            setShow(false);
            console.log(res.data)
        }).catch(err => {
            setLoading(false)
            setError({ error: true, message: err.response.data.message })
            setTimeout(() => { vanisErrorHandler() }, 4200)
            console.log(err.response)
        })
    }
    const passwordHandler = (e) => {
        const { name, value } = e.target
        setPassword(value);
    }

    const cancelRewardHandler = () => {
        setCancelReward(true);
    }
    const closeModal = () => {
        setCancelReward(false)
    }
    const applyCupponHandler = () => {
        setShowCuppon(true);
    }
    const closeCupponHandler = () => {
        setShow(false)
        setShowCuppon(false)
    }

    const showSubscriptionPackageHandler = () => {
        setSubscriptionPackage(true)
    }

    const closeSubscriptionPackageHandler = () => {
        setShow(false)
        setSubscriptionPackage(false)
    }

    ///IT CLOSE ERROR MESSAGE AFTER 4.2s
    const vanisErrorHandler = () => { setError({ error: false, message: '' }) }

    return (
        <>
            <Navigation />
            <Subscription show={subscriptionPackage} handler={closeSubscriptionPackageHandler} />
            <Error show={error.error} message={error.message} handler={vanisErrorHandler} />

            <div className={!showCuppon && !subscriptionPackage ? 'blockDisplay' : 'noneDisplay'}>
                <Modal show={cancelReward} >
                    <div style={{ backgroundColor: 'white', width: '42rem' }}>
                        <h3 style={{ padding: '3rem 0rem 0rem 1rem', color: 'black' }}>Cancel Subscription</h3>
                        <p className='popup__question' style={{ fontSize: '1.6rem' }}>Are you sure? Your subscription will finish when the period ends</p>
                        <div className='popup__button'>
                            <button onClick={closeModal} className='popup__btn'>Cancel</button>
                            <button style={{ color: 'red' }} className='popup__btn'>Confirm</button>
                        </div>
                    </div>
                </ Modal>
                <Modal show={show} >
                    <div className='model__content'>
                        <p className='reenterPassword'>Please re-enter your password</p>
                        <AuthInput placeholder='Password'
                            type='password'
                            valueof={password}
                            handler={passwordHandler}
                            name='password' />
                        <Link to='/forgot-password' style={{ display: 'flex', alignSelf: 'flex-end', marginRight: '5rem' }}>forgot password</Link>
                        <Button text='Continue' handler={reloginHandler} loading={loading} />
                        <Link className='cancel__button display' to='/home'>Cancel</Link>
                    </div>
                </ Modal>
                <div className='create__profile__wrapper' style={{ marginTop: '10rem' }}>
                    <div className='create__profile__content'>
                        <h2 style={{ fontFamily: 'Lobster, sans-sarif', fontSize: '3.5rem' }}>Account</h2>
                        <AuthInput width={true}
                            placeholder='E-Mail'
                            type='email'
                            valueof={user.email}
                            //    handler={inputHandler}
                            name='email' />
                        <AuthInput placeholder='Password'
                            type='password'
                            valueof={user.password}
                            //    handler={inputHandler}
                            name='password'
                            width={true} />
                        <AuthInput placeholder='First Name'
                            type='text'
                            valueof="Ebrahim"
                            //    handler={inputHandler}
                            name='name'
                            width={true} />
                        {/* <AuthInput placeholder='Last Name'
                            type='text'
                            valueof="Ali"
                            //    handler={inputHandler}
                            name='name'
                            width={true} />
                        <SecondInput link={`/profile/interest?n=false`} width /> */}
                        <h2 style={{ fontFamily: 'Lobster, sans-sarif', fontSize: '3rem', marginTop: '1rem' }}>Subscription</h2>
                        <AccountInput width={true} link='/' title="Expired subscription" date="Expires June 21, 2021" toShow handler={showSubscriptionPackageHandler} />
                        {/* <AccountInput width={true} link='/' title="Redeem Gift Card / Code" handler={applyCupponHandler} /> */}
                        <AccountInput width={true} link='/' title="Cancel renewal" handler={cancelRewardHandler} />
                        <Button text='Save Changes' />
                        <Link className='cancel__button display' to='/profile/edit'>Cancel</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Account;