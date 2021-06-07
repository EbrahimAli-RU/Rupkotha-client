import React from 'react';

const ButtonLink = (props) => {
    return (
        <a className='btn' style={{color: 'white', textDecoration: 'none', textAlign: 'center'}} href={props.link}>{props.text}
        </a>
    );
};

export default ButtonLink;