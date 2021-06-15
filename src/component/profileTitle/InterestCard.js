import React from 'react';

const InterestCard = (props) => {

    return (
        <div className={props.isSelected?'profile__interest__topic profile__interest__selected': 'profile__interest__topic'} 
            onClick={() => props.handler(props.id, props.name)} >
            <img src={`http://localhost:8000/${props.photo}`} alt='interst' />
            <p>{props.name}</p>
        </div>
    );
};

export default InterestCard;