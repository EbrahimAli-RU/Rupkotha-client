import React from 'react';
import { Link } from 'react-router-dom'
import Icon from '../../assets/img/sprite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'

const BookCard = (props) => {
    return (
        <>
            <div className={`bookCard__wrapper width${props.width}`} >
                <a href={props.link}>
                    <img className='bookCard__wrapper__img'
                        src={`http://localhost:8000/${props.book}`} alt='book' />
                </a>
                <div className="main__carosoul__wishlist card__bw__position left">
                    {props.wishlist !== -1 ?
                        <FontAwesomeIcon onClick={() => props.handler(props.id, props.category)}
                            icon={fasHeart} style={{ color: 'red', fontSize: '2.5rem', cursor: 'pointer' }} /> :
                        <FontAwesomeIcon onClick={() => props.handler(props.id, props.category)}
                            icon={faHeart} style={{ color: 'red', fontSize: '2.5rem', cursor: 'pointer' }} />}
                </div>
                <div className="main__carosoul__wishlist card__bw__position right" >
                    <Link to='/read'>
                        <svg className="nav__items__icon">
                            <use xlinkHref={`${Icon}#icon-book`}></use>
                        </svg>
                    </Link>
                </div>
            </div>
        </>

    );
};

export default BookCard;