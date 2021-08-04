import React, {useState ,useEffect} from 'react';
import photo from '../assets/img/profile1.png'
import Icon from '../assets/img/sprite.svg'

const Dropdown = () => {
    const [currentProfile, setcurrentProfile] = useState({})
    const [cookie, setCookie] = useState(false)

    const getCookie = (token) => {
        let cookies = document.cookie.split(';').reduce((cookies, cookie) => {
            const [name, value ] = cookie.split('=').map(c => c.trim())
            cookies[name] = value
            return cookies[token]
        }, {})
        return cookies
    }

    useEffect(() => {
        const jwtToken = getCookie('token')
        setCookie(jwtToken ? true : false )
        const currentProfile = JSON.parse(localStorage.getItem('currentProfile'))
        setcurrentProfile(currentProfile)
    }, [])
    return (
        <div className="dropdown">
            {cookie === false || currentProfile === null ? <button className="dropdown-btn"><div className="nav__items__icon-wrapper" >
                        <svg className="nav__items__icon">
                            <use xlinkHref={`${Icon}#icon-user`}></use>
                        </svg>
                    </div></button> : 
            <>
                <button className="dropdown-btn"><img className='nav__items__profile-photo' src={`http://localhost:8000/${currentProfile.photo}`} alt='profile' /></button>
                <div className="dropdown-content">
                    <div className="dropdown-content-profile__div">
                        <img className='dropdown-content-profile' src={`http://localhost:8000/${currentProfile.photo}`} alt='profile' />
                        <p>{currentProfile.name}</p>
                    </div>
                    <button className='dropdown-content-button'><a href="/select/profile">Change Profile</a></button>
                    <a className='dropdown-content__link' href="/profile/edit">Edit Profile</a>
                    <a className='dropdown-content__link' href="/account">Account</a>
                    <a className='dropdown-content__link' href="/resource">Resources</a>
                    <a className='dropdown-content__link' href="/">Billing</a>
                    <a className='dropdown-content__link' href="/privacy-policy">Privacy Policy</a>
                    <a className='dropdown-content__link' href="/logout">Logout</a>
                </div>
            </>
            }
        </div>
    );
};

export default Dropdown;