import React from 'react';
import profile from '../../assets/img/profile.png'
import Icon from '../../assets/img/sprite.svg'
const SelectProfile = () => {
    return (
        <div className='select__profile__container'>
            <h1 className='select__profile__title'>Who is Watching?</h1>
            <div className='select__profile__btn-search'>
                <button className='btn btn-read'> 
                    <svg className="nav__items__icon" style={{marginRight: '1rem', fill: 'white'}}>
                            <use xlinkHref={`${Icon}#icon-home`}></use>
                    </svg>Read</button>
                    <div className='search__box__wrapper'>
                        <div className='search__button_div'>
                            <svg className="search__button">
                                        <use xlinkHref={`${Icon}#icon-search`}></use>
                                </svg>
                        </div>
                        <input className='search__box' type='search' placeholder='Search...' />
                    </div>
            </div>
            <div className='select__profile__wrapper'>
                <div className='select__profile__user'>
                    <img className='select__profile__user-photo' src={profile} alt='profile' />
                    <p className='select__profile__user-name'>default</p>
                </div>
            </div>
        </div>
    );
};

export default SelectProfile;