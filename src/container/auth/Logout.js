import {useEffect} from 'react';
import axios from '../../utils/axios/axios'
import { Redirect } from 'react-router-dom'

const Logout = () => {

    const delateAllCookie = () => {
        let allCookie = document.cookie.split(';')

        for(let i = 0; i< allCookie.length; i++) {
           document.cookie =   allCookie[i] + "=;expires=" + new Date(0).toUTCString();
        }
    }

    useEffect(() => {
        axios.get('/user/logout').then(res => {
            delateAllCookie()
            localStorage.clear()
        }).catch(err => {
            console.log(err.response)
        })
        
    }, [])
    return <Redirect to='/' />
};

export default Logout;