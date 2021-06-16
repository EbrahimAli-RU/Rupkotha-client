import React, {useState ,useEffect} from 'react';
import profile from '../assets/img/profile.png'
const Dropdown = () => {
    const [currentProfile, setcurrentProfile] = useState({})
    useEffect(() => {
        const currentProfile = JSON.parse(localStorage.getItem('currentProfile'))
        setcurrentProfile(currentProfile)
    }, [])
    return (
        <div className="dropdown">
            <button className="dropdown-btn"><img className='nav__items__profile-photo' src={`http://localhost:8000/${currentProfile.photo}`} alt='profile' /></button>
            <div className="dropdown-content">
                <div className="dropdown-content-profile__div">
                    <img className='dropdown-content-profile' src={`http://localhost:8000/${currentProfile.photo}`} alt='profile' />
                    <p>{currentProfile.name}</p>
                </div>
                <button className='dropdown-content-button'><a href="/select/profile">Change Profile</a></button>
                <a className='dropdown-content__link' href="/profile/edit">Edit Profile</a>
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