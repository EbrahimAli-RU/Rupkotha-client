import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useRouteMatch, useHistory } from 'react-router-dom'

import axios from '../../utils/axios/axios';
import photo from '../../assets/img/rupkotha.png'
import AuthInput from '../../component/authInput/AuthInput';
import Button from '../../component/button/Button';
import Error from '../../component/Error';
import * as action from '../../redux/action/index'

const ResetPassword = () => {
    //////////////////STATE/////////////
    const [data, setData] = useState({ password: '', confirmPassword: '' });
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({ error: false, message: '' })

    ///////////HOOKS/////
    const dispatch = useDispatch();
    const match = useRouteMatch()
    const history = useHistory()

    /////HANDLE USER INPUT
    const inputHandler = (e) => {
        const { name, value } = e.target
        const dataCopy = { ...data }
        dataCopy[name] = value
        setData(dataCopy);
    }

    ////////SET NEW PASSWORD
    const changePasswordHandler = () => {
        setLoading(true)
        axios.patch('/user/resetpassword', {
            resetToken: match.params.resetToken,
            password: data.password,
            confirmPassword: data.confirmPassword
        }).then(res => {
            dispatch(action.tokenHandler(res.data.data.token))
            history.push('/select/profile')
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            console.log(err.response)
        })
    }
    /////CLOSE ERROR MODAL
    const vanisErrorHandler = () => { setError({ error: false, message: '' }) }

    /////////RENDERING
    return (
        <>
            <Error show={error.error} message={error.message} handler={vanisErrorHandler} />
            <div className='auth__wrapper forgotPassword'>
                <div className='auth__container'>
                    <div className='auth__logo'>
                        <img src={photo} alt='logo' />
                        <h2>Reset Password</h2>
                    </div>
                    <AuthInput type='password'
                        valueof={data.password}
                        handler={inputHandler}
                        name='password'
                        placeholder='New Password' />
                    <AuthInput type='password'
                        valueof={data.confirmPassword}
                        handler={inputHandler}
                        name='confirmPassword'
                        placeholder='Confirm Password' />
                    <Button text='Change password' loading={loading} handler={changePasswordHandler} />
                    <a className='cancel__button' href='/forgot-password'>Cancel</a>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;