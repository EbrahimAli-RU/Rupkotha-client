import React from 'react';
import Icon from '../../assets/img/sprite.svg'

const SecondInput = () => {
    return (
        <div className='second__input'>
        <div className='second__input-title'>
            <p>Interests</p>
            <p className='second__input__interest' >3 Selected</p>
        </div>
        <a href='/profile/interest'>
            <svg className='profile__user__edit-button marginRight-small cursor-pointer'>
                <use xlinkHref={`${Icon}#icon-home`}></use>
            </svg>
        </a>
    </div>
    );
};

export default SecondInput;