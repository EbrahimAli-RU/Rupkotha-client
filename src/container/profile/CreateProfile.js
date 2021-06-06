import React from 'react';
import profile from '../../assets/img/profile.png'
import AuthInput from '../../component/authInput/AuthInput';
import Button from '../../component/button/Button';
import { withRouter } from 'react-router-dom'
import Profile from '../../component/profileTitle/Profile';

const CreateProfile = () => {
    return (
        <div className='create__profile__wrapper'>
            <div className='create__profile__content'>
            <h2>Create Profile</h2>
            <Profile profile={profile} isDisplay={false} />
            {/* <img src={profile} alt='new profile'/> */}
            <AuthInput placeholder='Name'/>
            <AuthInput placeholder='Age'/>
            <AuthInput placeholder='Country'/>
            <Button text='Continue'/>
            <a className='cancel__button display' href='/'>Cancel</a>
        </div>
        </div>
    );
};

export default withRouter(CreateProfile);