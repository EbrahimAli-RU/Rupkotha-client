import React from 'react';
import Icon from '../../assets/img/sprite.svg'
import profileImg from '../../assets/img/profile.png'

const Profile = (props) => {
    return (
        <div className='profile__wrapper'>
            <div className='profile__user' onClick={() => props.handler(props.id)}>
                <div className={props.width ? 'profile__user__photo__container width15' : 'profile__user__photo__container width8'}>
                    <img className='profile__user-photo' src={props.profile.length === 0 ? `${profileImg}`: `http://localhost:8000/${props.profile}`} alt='profile' />
                    {props.isDisplay ?
                        <a href={props.link}>
                            <div className='profile__user__edit-button__div'>
                                <svg className='profile__user__edit-button' >
                                    <use xlinkHref={`${Icon}#icon-home`}></use>
                                </svg>
                            </div>
                        </a> : null }
                </div>
                <p className='select__profile__user-name'>{props.name}</p>
            </div>
        </div>
    );
};

export default Profile;

//props.name.length > 8 ? `${props.name.substr(0, 8)}...`: `${props.name}`
