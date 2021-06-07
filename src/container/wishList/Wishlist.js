import React from 'react';
import BookCard from '../../component/bookCard/BookCard'

const Wishlist = () => {
    return (
        <div className='wishlist__wrapper '>
            <h1 className='wishlist__wrapper__title marginBottom-big'>Your favorites</h1>
                <div className='wishlist__content'>
                    <BookCard width='25' />
                    <BookCard width='25' />
                    <BookCard width='25' />
                    <BookCard width='25' />
                    <BookCard width='25' />
                    <BookCard width='25' />
                    <BookCard width='25' />
                    <BookCard width='25' />
                    <BookCard width='25' />
                    <BookCard width='25' />
                    <BookCard width='25' />
                    <BookCard width='25' />
                    <BookCard width='25' />
                    <BookCard width='25' />
                </div>
        </div>
    );
};

export default Wishlist;