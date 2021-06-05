import React from 'react';
import ProfileImage from '../../component/profileImg/ProfileImage';

const SelectNewProfileImg = () => {
    const arr = ['Unicorn and Horse', 'Unicorn and Horse']
    return (
        <div className='select__new__profile__img'>
            <div className='select__new__profile__img-title__wrapper'>
                <h1 className='select__new__profile__img-title'>Choose Your Avater</h1>
                <a className='cancel__button skip' href='/'>Skip</a>
            </div>
            <ProfileImage profiles={arr}/>
        </div>
    );
};

export default SelectNewProfileImg;