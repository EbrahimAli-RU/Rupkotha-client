import React from 'react';

const ProfileTitle = ({title}) => {
    return (
        <div className='select__new__profile__img-title__wrapper'>
            <h1 className='select__new__profile__img-title'>{title}</h1>
            <a className='cancel__button skip' href='/'>Skip</a>
        </div>
    );
};

export default ProfileTitle;