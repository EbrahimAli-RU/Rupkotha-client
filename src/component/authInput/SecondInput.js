import React from 'react';
import Icon from '../../assets/img/sprite.svg'
import { Link } from 'react-router-dom'

const SecondInput = (props) => {
    return (
        <div className='second__input'>
        <div className='second__input-title'>
            <p id='second__input__para'>Interests</p>
            <p className='second__input__interest' >3 Selected</p>
        </div>
        <Link to={props.link}>
            <svg className='profile__user__edit-button marginRight-small cursor-pointer'>
                <use xlinkHref={`${Icon}#icon-home`}></use>
            </svg>
        </Link>
    </div>
    );
};

export default SecondInput;