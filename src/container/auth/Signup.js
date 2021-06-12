import React, {useState} from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import photo from '../../assets/img/rupkotha.png'
import AuthInput from '../../component/authInput/AuthInput';
import Button from '../../component/button/Button';

const signupObj = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Signup = (props) => {
    const [signupData, setSignupData] = useState(signupObj);

    const inputHandler = e => {
        const {name, value} = e.target;
        const signupDataCopy = {...signupData}
        signupDataCopy[name] = value

        setSignupData(signupDataCopy);
    }

    const signupHandler = () => {
        console.log('CLICKED');
        axios.post('http://localhost:8000/api/v1/user/register', {
            userName: signupData.userName,
            email: signupData.email,
            password: signupData.password,
            confirmPassword: signupData.confirmPassword
        }).then(res => {
            props.history.push('/select/profile')
            // alert('Success');
        }).catch(err => {
            alert(err.response)
        })
    }

    return (
        <div className='auth__wrapper signup'> 
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
                <Button text='Sign Up' handler={signupHandler} />
                <a className='cancel__button' href='/'>Cancel</a>
            </div>
        </div>
    );
};

export default withRouter(Signup);