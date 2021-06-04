import React from 'react';
import photo from '../../assets/img/rupkotha.png'
import AuthInput from '../../component/authInput/AuthInput';
import Button from '../../component/button/Button';

const Signup = () => {
    return (
        <div className='auth__wrapper signup'> 
            <div className='auth__container'>
                <div className='auth__logo'>
                    <img src={photo} alt='logo' />
                    <h2>Register</h2>
                </div>
                <AuthInput placeholder='User Name' />
                <AuthInput placeholder='E-mail' />
                <AuthInput placeholder='Placeholder' />
                <AuthInput placeholder='Confirm Password' />
                <Button text='Sign Up' />
                <a className='cancel__button' href='/'>Cancel</a>
            </div>
        </div>
    );
};

export default Signup;