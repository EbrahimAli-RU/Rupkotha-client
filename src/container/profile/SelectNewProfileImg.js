import React from 'react';
import ProfileImage from '../../component/profileImg/ProfileImage';
import ProfileTitle from '../../component/profileTitle/ProfileTitle';

const SelectNewProfileImg = () => {
    const arr = ['Unicorn and Horse', 'Unicorn and Horse']
    return (
        <>
            <ProfileTitle title='Choose Your Avater' />
            <div className='select__new__profile__img'>
                <ProfileImage profiles={arr}/>
            </div>
        </>
    );
};

export default SelectNewProfileImg;