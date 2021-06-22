import React, {useState, useEffect} from 'react';
import { useDispatch} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import ProfileImage from '../../component/profileImg/ProfileImage';
import ProfileTitle from '../../component/profileTitle/ProfileTitle';
import Spinner from '../../component/Spinner'
import * as action from '../../redux/action/index'

const SelectNewProfileImg = ( props ) => {
    const dispatch = useDispatch()
    const [avater, setAvater] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/avater').then(res => {
            setAvater(res.data.data.avaters)
        }).catch(err => {
            console.log(err.response)
        })
        
    }, [])

    const selectProfilePicHandler = (name) => {
        dispatch(action.photoHandler(name))
        console.log(name)
        props.history.push('/profile/create')
    }
    return (
        <>
            {avater.length === 0 ? <Spinner show />: 
            <>
                <ProfileTitle title='Choose Your Avater' />
                <div className='select__new__profile__img'>
                    {avater.map((el, i) => <ProfileImage handler={selectProfilePicHandler} key={i} profiles={el}/>)}
                </div>
            </>}
        </>
    );
};

export default withRouter(SelectNewProfileImg);