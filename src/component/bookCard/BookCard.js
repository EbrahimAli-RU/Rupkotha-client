import React from 'react';
import Book1 from '../../assets/img/book/1.png'
import Book2 from '../../assets/img/book/2.png'
import Book3 from '../../assets/img/book/3.png'
import Book4 from '../../assets/img/book/4.png'

const BookCard = (props) => {
    return (
        <div className='bookCard'>
            <div className='bookCard__wrapper'>
                <img className='bookCard__wrapper__img' src={Book1} alt='book' />
            </div>
            <div className='bookCard__wrapper'>
                <img className='bookCard__wrapper__img' src={Book2} alt='book' />
            </div>
            <div className='bookCard__wrapper'>
                <img className='bookCard__wrapper__img' src={Book3} alt='book' />
            </div>
            <div className='bookCard__wrapper'>
                <img className='bookCard__wrapper__img' src={Book4} alt='book' />
            </div>
        </div>
    );
};

export default BookCard;