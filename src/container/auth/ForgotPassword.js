import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import axios from '../../utils/axios/axios';
import photo from '../../assets/img/rupkotha.png'
import AuthInput from '../../component/authInput/AuthInput';
import Button from '../../component/button/Button';
import Error from '../../component/Error';
import * as action from '../../redux/action/index'

const ForgotPassword = () => {
    ////////////STATE//////////
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({ error: false, message: '' })

    //////HOOKS
    const history = useHistory();
    const dispatch = useDispatch()

    //////USER INPUT HANDLER 
    const emailHandler = (e) => { setEmail(e.target.value) }

    /////SENDS REQUEST TO BACKEND FOR RESET PASSWORD LINK
    const forgotPasswordHandler = () => {
        setLoading(true)
        axios.post('/user/forgotpassword', { email }).then(res => {
            dispatch(action.userMessageHandler(res.data.message, 'To Reset your password!'))
            history.push('/success');
            setLoading(false)
        }).catch(err => {
            console.log(err.response)
            setLoading(false)
            setError({ error: true, message: err.response.data.message })
            setTimeout(() => { vanisErrorHandler() }, 4200)
        })
    }
    ///////VANISERROEHANDLER FOR CLOSING ERROR MESSAGE
    const vanisErrorHandler = () => { setError({ error: false, message: '' }) }

    ////RENDEING 
    return (
        <>
            <Error show={error.error} message={error.message} handler={vanisErrorHandler} />
            <div className='auth__wrapper forgotPassword'>
                <div className='auth__container'>
                    <div className='auth__logo'>
                        <img src={photo} alt='logo' />
                        <h2>Forgot Password</h2>
                    </div>
                    <AuthInput type='text'
                        valueof={email}
                        handler={emailHandler}
                        name='email'
                        placeholder='E-mail' />
                    <Button text='Forgot password' loading={loading} handler={forgotPasswordHandler} />
                    <a className='cancel__button' href='/'>Cancel</a>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;