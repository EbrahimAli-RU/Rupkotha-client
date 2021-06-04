import React from 'react';
import photo from '../../assets/img/rupkotha.png'
import AuthInput from '../../component/authInput/AuthInput';
import Button from '../../component/button/Button';
const Signin = () => {
    return (
        <div className='auth__wrapper'> 
            <div className='auth__container'>
                <div className='auth__logo'>
                    <img src={photo} alt='logo' />
                    <h2>Log In</h2>
                </div>   
                <AuthInput placeholder='E-mail' />
                <AuthInput placeholder='Placeholder' />
                <Button text='Sign in' />
                <div className='auth__link'>
                    <p className='auth__link__new-member'><a href='/'>register </a>here</p>
                    <a href='/'>forgot password?</a>
                </div>
            </div>
        </div>
    );
};

export default Signin;