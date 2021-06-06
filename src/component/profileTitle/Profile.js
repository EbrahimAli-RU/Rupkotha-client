import React from 'react';
import Icon from '../../assets/img/sprite.svg'

const Profile = (props) => {
    return (
        <div className='profile__wrapper'>
            <div className='profile__user'>
                <div className='profile__user__photo__container'>
                    <img className='profile__user-photo' src={props.profile} alt='profile' />
                    {props.isDisplay ? 
                        <div className='profile__user__edit-button__div'>
                            <svg className='profile__user__edit-button' >
                                <use xlinkHref={`${Icon}#icon-home`}></use>
                            </svg>
                        </div> : null }
                </div>
                <p className='select__profile__user-name'>{props.name}</p>
            </div>
        </div>
    );
};

export default Profile;
