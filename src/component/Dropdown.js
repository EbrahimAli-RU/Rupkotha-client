import React from 'react';
import profile from '../assets/img/profile.png'
const Dropdown = () => {
    return (
        <div className="dropdown">
            <button className="dropdown-btn"><img className='nav__items__profile-photo' src={profile} alt='profile' /></button>
            <div className="dropdown-content">
                <div className="dropdown-content-profile__div">
                    <img className='dropdown-content-profile' src={profile} alt='profile' />
                    <p>Isita</p>
                </div>
                <button className='dropdown-content-button'><a href="/">Change Profile</a></button>
                <a className='dropdown-content__link' href="/">Edit Profile</a>
                <a className='dropdown-content__link' href="/">Account</a>
                <a className='dropdown-content__link' href="/">Resources</a>
                <a className='dropdown-content__link' href="/">Billing</a>
                <a className='dropdown-content__link' href="/">Privacy Policy</a>
                <a className='dropdown-content__link' href="/logout">Logout</a>
            </div>
        </div>
    );
};

export default Dropdown;