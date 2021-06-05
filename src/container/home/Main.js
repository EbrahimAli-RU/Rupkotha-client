import React from 'react';
import Icon from '../../assets/img/sprite.svg'
import Book from '../../assets/img/little.png'
import BookCard from '../../component/bookCard/BookCard';


const main = () => {
    return (
        <>
            <div className='main__carosoul'>
                <div className='main__carosoul__content'>
                    <div className='main__carosoul__left__div'>
                        <h1>Little Socks Makes a Friend</h1>
                        <div>
                            <button className='btn btn-read'> 
                            <svg className="nav__items__icon" style={{marginRight: '1rem', fill: 'white'}}>
                                    <use xlinkHref={`${Icon}#icon-home`}></use>
                                </svg>Read</button>
                            <div className="main__carosoul__wishlist" >
                                <svg className="nav__items__icon">
                                    <use xlinkHref={`${Icon}#icon-home`}></use>
                                </svg>
                            </div>
                        </div>
                        <p>Little Sock loves to visit Sock City—but sometimes, 
                            he gets a bit lonely. Will he be able to find a new friend?</p>
                            <p>4m 47s• New Releases• Popular Titles• Age: Elementary</p>
                    </div>
                    <img src={Book} alt='book' />
                </div>
            </div>
            <div className='main__books'>
                <div className='main__books__category'>
                    <p>Recent Added</p>
                    <a href='/'>View More</a>
                </div>
                <BookCard />
            </div>
        </>
    );
};

export default main;