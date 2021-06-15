import React from 'react';
import { Link } from 'react-router-dom'

const ButtonLink = (props) => {
    return (
        <Link className='btn' style={{color: 'white', textDecoration: 'none', textAlign: 'center'}} to={props.link}>{props.text}
        </Link>
    );
};

export default ButtonLink;