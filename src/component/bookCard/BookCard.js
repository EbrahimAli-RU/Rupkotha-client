import React from 'react';
import { Link } from 'react-router-dom'
import Icon from '../../assets/img/sprite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'

const BookCard = (props) => {
    return (
        <Link to={props.link}>
            <div className={`bookCard__wrapper width${props.width}`} >
                <img className='bookCard__wrapper__img' src={`http://localhost:8000/${props.book}`} alt='book' />
                <div className="main__carosoul__wishlist" style={{position: 'absolute', left: '2rem', bottom: '2rem'}} >
                    {props.wishlist !==-1 ? <FontAwesomeIcon icon={fasHeart}  style={{color: 'red', fontSize: '2.5rem'}}  />:
                    <FontAwesomeIcon icon={faHeart}  style={{color: 'red', fontSize: '2.5rem'}} />}
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