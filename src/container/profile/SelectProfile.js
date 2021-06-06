import React from 'react';
import profile from '../../assets/img/profile.png'
import Icon from '../../assets/img/sprite.svg'
import Profile from '../../component/profileTitle/Profile';
import SearchBox from '../../component/searchBox/SearchBox';
const SelectProfile = () => {
    return (
        <div className='select__profile__container'>
            <h1 className='select__profile__title'>Who is Watching?</h1>
            <div className='select__profile__btn-search'>
                <button className='btn btn-read'> 
                    <svg className="nav__items__icon" style={{marginRight: '1rem', fill: 'white'}}>
                            <use xlinkHref={`${Icon}#icon-home`}></use>
                    </svg>add </button>
                   <SearchBox /> 
            </div>

            <div className='select__profile__wrapper'>
                <Profile profile={profile} name='default' isDisplay={false} />
                <Profile profile={profile} name='Isita' isDisplay={false} />
            </div>
        </div>
    );
};

export default SelectProfile;