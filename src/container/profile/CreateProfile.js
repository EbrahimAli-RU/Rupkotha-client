import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import AuthInput from '../../component/authInput/AuthInput';
import { withRouter } from 'react-router-dom'
import Profile from '../../component/profileTitle/Profile';
import ButtonLink from '../../component/button/ButtonLink';
import * as action from '../../redux/action/index'

const CreateProfile = () => {
    const dispatch = useDispatch()
    const profileState = useSelector(state => state.profile)
    const nameHandler = (e) => { dispatch(action.nameHandler(e.target.value))}
    const ageHandler = (e) => { dispatch(action.ageHandler(e.target.value))}
    const languageHandler = (e) => { dispatch(action.languageHandler(e.target.value))}

    return (
        <div className='create__profile__wrapper'>
            <div className='create__profile__content'>
            <h2>Create Profile</h2>
            <Profile profile={profileState.photo} isDisplay={false} />
            <AuthInput placeholder='Name' name='name' type='text' handler={nameHandler} valueof={profileState.name} />
            <AuthInput placeholder='Age' name='age' type='number' handler={ageHandler} valueof={profileState.age}/>
            <AuthInput placeholder='Language' name='language' type='text' handler={languageHandler} valueof={profileState.language}/>
            <ButtonLink text='Continue' link='/profile/interest' />
            <a className='cancel__button display' href='/'>Cancel</a>
        </div>
        </div>
    );
};

export default withRouter(CreateProfile);