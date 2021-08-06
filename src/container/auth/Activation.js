import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useRouteMatch, useHistory } from 'react-router-dom'

import axios from '../../utils/axios/axios'
import * as action from '../../redux/action/index'

const Activation = () => {
    ////////STATE///////
    const [message, setMessage] = useState('');

    /////HOOKS
    const dispatch = useDispatch()
    const match = useRouteMatch()
    const history = useHistory()

    ///////ACTIVATE USER WHEN CLICKING ACTIVATE LINK AND REDIRECT TO PROFILE PAGE
    useEffect(() => {
        axios.post('/user/activation', { activationToken: match.params.token }).then(res => {
            dispatch(action.tokenHandler(res.data.data.token))
            history.push('/select/profile');
        }).catch(err => {
            setMessage(err.response.data.message)
        })
    }, [])

    /////RENDERING ERROR IF OCCURE
    return (
        <div>
            <p style={{ textAlign: 'center', color: 'black', marginTop: '5rem' }}>{message}</p>
        </div>
    );
};

export default Activation;