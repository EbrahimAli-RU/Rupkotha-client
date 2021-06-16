import React, {useState} from 'react';
import { withRouter } from 'react-router'
import axios from '../../utils/axios/axios'
import photo from '../../assets/img/rupkotha.png'
import AuthInput from '../../component/authInput/AuthInput';
import Button from '../../component/button/Button';
import Error from '../../component/Error';
import Spinner from '../../component/Spinner';

const signinObj = {
    email: '',
    password: '',
}

const errorObj = {
    error: false,
    message: ''
}

const Signin = (props) => {
    const [signinData, setSigninData] = useState(signinObj)
    const [isShow, setIsShow] = useState(errorObj)
    const [showSpinner, setShowSpinner] = useState(false)

    const inputHandler = e => {
        const {name, value} = e.target
        const signinDataCopy = {...signinData}
        signinDataCopy[name] = value

        setSigninData(signinDataCopy);
    }

    const signinHandler = () => {
        setShowSpinner(true)
        axios.post('/user/signin', {
            email: signinData.email,
            password: signinData.password
        }).then(res => {
            setShowSpinner(false)
            props.history.push('/select/profile')
            console.log(res.data.data)
        }).catch(err => {
            console.log(err.response)
            setShowSpinner(false)
            setIsShow({error: true, message: err.response.data.message})
            setTimeout(() => {
                vanisErrorHandler()
            }, 500)
        })
    }
    const vanisErrorHandler = () => {
        setIsShow({error: false, message: ''})
    }
    return (
        <div className='auth__wrapper signin'> 
            <Spinner show={showSpinner} />
            <Error show={isShow.error} message={isShow.message} />
            <div className='auth__container'>
                <div className='auth__logo'>
                    <img src={photo} alt='logo' />
                    <h2>Log In</h2>
                </div>   
                <AuthInput placeholder='E-mail'
                           type='text'
                           valueof={signinData.email}
                           name='email'
                           handler={inputHandler} />
                <AuthInput placeholder='Password'
                           type='password'
                           valueof={signinData.password}
                           name='password'
                           handler={inputHandler} />
                <Button text='Sign in' handler={signinHandler} />
                <div className='auth__link'>
                    <p className='auth__link__new-member'><a href='/register'>register </a>here</p>
                    <a href='/forgot-password'>forgot password?</a>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Signin);