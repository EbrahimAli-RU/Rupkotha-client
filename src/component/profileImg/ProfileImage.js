import React from 'react';
import profile from '../../assets/img/profile.png'
import {withRouter} from 'react-router-dom'

const ProfileImage = (props) => {

    const selectProfilePicHandler = () => {
        props.history.push('/profile/create')
    }

    return (
        <>
            {props.profiles.map((el, i) => (
                <div key={i+1} className='one__category__profile__imgs'>
                    <p className='one__category__profile__imgs__title'>{el}</p>
                    <img onClick={selectProfilePicHandler} className='one__category__profile__img' src={profile} alt='new profile' />
                    <img className='one__category__profile__img' src={profile} alt='new profile' />
                    <img className='one__category__profile__img' src={profile} alt='new profile' />
                    <img className='one__category__profile__img' src={profile} alt='new profile' />
            </div>
            ))}
        </>
    );
};

export default withRouter(ProfileImage);