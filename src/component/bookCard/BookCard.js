import React from 'react';
import { Link } from 'react-router-dom'
import Icon from '../../assets/img/sprite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const BookCard = (props) => {
    return (
        <Link to={props.link}>
            {/* <div className={props.width === '25' ? 'bookCard__wrapper width25': 'bookCard__wrapper width100'} > */}
            <div className={`bookCard__wrapper width${props.width}`} >
                <img className='bookCard__wrapper__img' src={`http://localhost:8000/${props.book}`} alt='book' />
                <div className="main__carosoul__wishlist" style={{position: 'absolute', left: '2rem', bottom: '2rem'}} >
                    {/* <svg className="nav__items__icon">
                        <use xlinkHref={`${Icon}#icon-home`}></use>
                    </svg> */}
                    <FontAwesomeIcon icon={faHeart} size='lg' color='crismon' />
                </div>
                <div className="main__carosoul__wishlist" style={{position: 'absolute', right: '2rem', bottom: '2rem'}} >
                    <svg className="nav__items__icon">
                        <use xlinkHref={`${Icon}#icon-book`}></use>
                    </svg>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;