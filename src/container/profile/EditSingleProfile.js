import React from 'react';
import profile from '../../assets/img/profile.png'
import AuthInput from '../../component/authInput/AuthInput';
import SecondInput from '../../component/authInput/SecondInput';
import Button from '../../component/button/Button';
import Profile from '../../component/profileTitle/Profile';

const EditSingleProfile = () => {
    return (
        <div className='create__profile__wrapper'>
            <div className='create__profile__content'>
                <h2>Edit Profile</h2>
                <Profile link='/profile/new' profile={profile} isDisplay={true} />
                <AuthInput placeholder='Name'/>
                <AuthInput placeholder='Age'/>
                <AuthInput placeholder='Country'/>
                <SecondInput />
                <Button text='Continue'/>
                <a className='cancel__button display' href='/'>Cancel</a>
            </div>
        </div>
    );
};

export default EditSingleProfile;