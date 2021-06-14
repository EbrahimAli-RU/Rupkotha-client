import React from 'react';
import interest1 from '../../assets/img/interest1.png'

const InterestCard = (props) => {
    return (
        <div className={props.isSelected?'profile__interest__topic profile__interest__selected': 'profile__interest__topic'} onClick={() => props.handler(props.id)} >
            <img src={interest1} alt='interst' />
            <p>{props.name}</p>
        </div>
    );
};

export default InterestCard;