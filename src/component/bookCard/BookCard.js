import React from 'react';
import Book1 from '../../assets/img/book/1.png'
import Icon from '../../assets/img/sprite.svg'
import Book2 from '../../assets/img/book/2.png'
import Book3 from '../../assets/img/book/3.png'
import Book4 from '../../assets/img/book/4.png'

const BookCard = (props) => {
    return (
        <a href='/bookdetail'>
            <div className={props.width === '25' ? 'bookCard__wrapper width25': 'bookCard__wrapper width33'} >
                <img className='bookCard__wrapper__img' src={Book1} alt='book' />
                <div className="main__carosoul__wishlist" style={{position: 'absolute', left: '2rem', bottom: '2rem'}} >
                    <svg className="nav__items__icon">
                        <use xlinkHref={`${Icon}#icon-home`}></use>
                    </svg>
                </div>
                <div className="main__carosoul__wishlist" style={{position: 'absolute', right: '2rem', bottom: '2rem'}} >
                    <svg className="nav__items__icon">
                        <use xlinkHref={`${Icon}#icon-home`}></use>
                    </svg>
                </div>
            </div>
        </a>
    );
};

export default BookCard;