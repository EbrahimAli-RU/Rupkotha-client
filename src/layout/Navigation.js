import React from 'react';
import logo from '../assets/img/rupkotha.png'
import Icon from '../assets/img/sprite.svg'
import Dropdown from '../component/Dropdown';

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
                <a href='/wishlist'>
                    <div className="nav__items__icon-wrapper" >
                        <svg className="nav__items__icon">
                            <use xlinkHref={`${Icon}#icon-home`}></use>
                        </svg>
                    </div>
                </a>
                <Dropdown />
                
            </div>
        </header>
    );
};

export default Navigation;