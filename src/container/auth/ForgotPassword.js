import React from 'react';
import photo from '../../assets/img/rupkotha.png'
import AuthInput from '../../component/authInput/AuthInput';
import Button from '../../component/button/Button';

const ForgotPassword = () => {
    return (
        <div className='auth__wrapper forgotPassword'> 
            <div className='auth__container'>
                <div className='auth__logo'>
                    <img src={photo} alt='logo' />
                    <h2>Forgot Password</h2>
                </div>   
                <AuthInput placeholder='E-mail' />
                <Button text='Forgot password' />
                <a className='cancel__button' href='/'>Cancel</a>
            </div>
        </div>
    );
};

export default ForgotPassword;