import {useEffect} from 'react';
import { Redirect } from 'react-router-dom'

const Logout = () => {

    const delateAllCookie = () => {
        let allCookie = document.cookie.split(';')

        for(let i = 0; i< allCookie.length; i++) {
           document.cookie =   allCookie[i] + "=;expires=" + new Date(0).toUTCString();
        }
    }

    useEffect(() => {
        delateAllCookie()
        localStorage.clear()
    }, [])
    return <Redirect to='/' />
};

export default Logout;