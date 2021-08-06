import React, {useState, useEffect} from 'react';
import { useDispatch} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from '../../utils/axios/axios'
import ProfileImage from '../../component/profileImg/ProfileImage';
import ProfileTitle from '../../component/profileTitle/ProfileTitle';
import Spinner from '../../component/Spinner'
import * as action from '../../redux/action/index'
import Navigation from '../../layout/Navigation';

const SelectNewProfileImg = ( props ) => {
    const dispatch = useDispatch()
    const [avater, setAvater] = useState([])

    useEffect(() => {
        axios.get('/avater').then(res => {
            setAvater(res.data.data.avaters)
        }).catch(err => {
            console.log(err.response)
        })
        
    }, [])

    const selectProfilePicHandler = (name) => {
        dispatch(action.userInputHandler('photo', name))
        console.log(name)
        props.history.push('/profile/create')
    }
    return (
        <>
            {avater.length === 0 ? <Spinner show />: 
            <>
                <Navigation />
                <ProfileTitle title='Choose Your Avater' />
                <div className='select__new__profile__img'>
                    {avater.map((el, i) => <ProfileImage handler={selectProfilePicHandler} key={i} profiles={el}/>)}
                </div>
            </>}
        </>
    );
};

export default withRouter(SelectNewProfileImg);