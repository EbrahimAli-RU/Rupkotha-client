import { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import axios from '../../utils/axios/axios'
import photo from '../../assets/img/rupkotha.png'
import AuthInput from '../../component/authInput/AuthInput';
import Button from '../../component/button/Button';
import Error from '../../component/Error';
import * as action from '../../redux/action/index'

///OBJ FOR USER INPUT
const signupObj = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

////OBJ FOR ERROR
const errorObj = {
    error: false,
    message: ''
}

const Signup = (props) => {
    /////STATE
    const [signupData, setSignupData] = useState(signupObj);
    const [isShow, setIsShow] = useState(errorObj)
    const [showSpinner, setShowSpinner] = useState(false)

    ///HOOKS
    const dispatch = useDispatch();

    ///HANDLE USER INPUT
    const inputHandler = e => {
        const { name, value } = e.target;
        const signupDataCopy = { ...signupData }
        signupDataCopy[name] = value

        setSignupData(signupDataCopy);
    }

    ///SEND REQUEST TO BACKEND FOR SIGN UP
    const signupHandler = () => {
        setShowSpinner(true)
        axios.post('/user/register', {
            userName: signupData.userName,
            email: signupData.email,
            password: signupData.password,
            confirmPassword: signupData.confirmPassword
        }).then(res => {
            if (res.data.status === 'success') {
                dispatch(action.userMessageHandler(res.data.message, 'Thank You ForSigning Up!'))
                props.history.push('/success')
            }
            setShowSpinner(false)
        }).catch(err => {
            console.log(err.response)
            setIsShow({ error: true, message: err.response.data.message })
            setShowSpinner(false)
            setTimeout(() => { vanisErrorHandler() }, 4200)
        })
    }

    ///CLOSE ERROR MODEL AFTER 4.2s
    const vanisErrorHandler = () => { setIsShow({ error: false, message: '' }) }

    ///RENDERING
    return (
        <div className='auth__wrapper signup'>
            <Error show={isShow.error} message={isShow.message} handler={vanisErrorHandler} />
            <div className='auth__container'>
                <div className='auth__logo'>
                    <img src={photo} alt='logo' />
                    <h2>Register</h2>
                </div>
                <AuthInput type='text'
                    name='userName'
                    valueof={signupData.userName}
                    handler={inputHandler}
                    placeholder='User Name' />
                <AuthInput type='email'
                    valueof={signupData.email}
                    handler={inputHandler}
                    name='email'
                    placeholder='E-mail' />
                <AuthInput type='password'
                    valueof={signupData.password}
                    handler={inputHandler}
                    name='password'
                    placeholder='password' />
                <AuthInput type='password'
                    valueof={signupData.confirmPassword}
                    handler={inputHandler}
                    name='confirmPassword'
                    placeholder='Confirm Password' />
                <Button text='Sign Up' loading={showSpinner} handler={signupHandler} />
                <a className='cancel__button' href='/'>Cancel</a>
            </div>
        </div>
    );
};

export default withRouter(Signup);