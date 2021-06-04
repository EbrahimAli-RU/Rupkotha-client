import React from 'react';
import logo from '../assets/img/rupkotha.png'
import profile from '../assets/img/profile.png'
import Icon from '../assets/img/sprite.svg'
const Navigation = () => {
    return (
        <header className='nav'>
            <div className='nav__logo'><img src={logo} alt='logo' /></div>
            <div className='nav__items'>
                <a href='/home'>
                    <div className="nav__items__icon-wrapper" >
                        <svg className="nav__items__icon">
                            <use xlinkHref={`${Icon}#icon-home`}></use>
                        </svg>
                    </div>
                </a>
                <a href='/search'>
                    <div className="nav__items__icon-wrapper" >
                        <svg className="nav__items__icon">
                            <use xlinkHref={`${Icon}#icon-search`}></use>
                        </svg>
                    </div>
                </a>
                <a href='/'>
                    <div className="nav__items__icon-wrapper" >
                        <svg className="nav__items__icon">
                            <use xlinkHref={`${Icon}#icon-home`}></use>
                        </svg>
                    </div>
                </a>
                <img src={profile} alt='profile' />
                
            </div>
        </header>
    );
};

export default Navigation;