import React, {useState, useEffect } from 'react';
import axios from 'axios'
import profile from '../../assets/img/profile.png'
import Icon from '../../assets/img/sprite.svg'
import Profile from '../../component/profileTitle/Profile';
import SearchBox from '../../component/searchBox/SearchBox';
import Spinner from '../../component/Spinner'


const SelectProfile = () => {
    const [childs, setChilds] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/user/60c71ccee820ac18f425c090').then(res => {
            setChilds(res.data.users.children)
        }).catch(err => {
            console.log(err.response)
        })
    }, [])
    return (
        <>
        {childs.length === 0 ? <Spinner show /> :
        <div className='select__profile__container width60'>
            <h1 className='select__profile__title'>Who is Watching?</h1>
            <div className='select__profile__btn-search'>
               <a href='/profile/new'>
                    <button className='btn btn-read'> 
                        <svg className="nav__items__icon" style={{marginRight: '1rem', fill: 'white'}}>
                                <use xlinkHref={`${Icon}#icon-home`}></use>
                        </svg>add </button>
                </a>
                   <SearchBox /> 
            </div>

            <div className='select__profile__wrapper width80'>
                {childs.map(child => <Profile key={child._id} profile={profile} name={child.name} isDisplay={false} />)}
            </div>
        </div>}
        </>
    );
};

export default SelectProfile;