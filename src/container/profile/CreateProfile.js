import React from 'react';
import profile from '../../assets/img/profile.png'
import AuthInput from '../../component/authInput/AuthInput';
import { withRouter } from 'react-router-dom'
import Profile from '../../component/profileTitle/Profile';
import ButtonLink from '../../component/button/ButtonLink';

const CreateProfile = () => {
    return (
        <div className='create__profile__wrapper'>
            <div className='create__profile__content'>
            <h2>Create Profile</h2>
            <Profile profile={profile} isDisplay={false} />
            <AuthInput placeholder='Name'/>
            <AuthInput placeholder='Age'/>
            <AuthInput placeholder='Country'/>
            <ButtonLink text='Continue' link='/profile/interest' />
            <a className='cancel__button display' href='/'>Cancel</a>
        </div>
        </div>
    );
};

export default withRouter(CreateProfile);