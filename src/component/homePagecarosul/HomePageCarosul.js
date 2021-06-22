import React from 'react';
import Icon from '../../assets/img/sprite.svg'
import Book from '../../assets/img/little.png'
import backgroundImg from '../../assets/img/2.jpg'

const HomePageCarosul = (props) => {
    return (
        <div className='main__carosoul'>
                <img src={backgroundImg} alt='background' className='main__carosoul__background-img' />
                <div className='main__carosoul__content'>
                    <div className='main__carosoul__left__div'>
                        <h1>{props.title}</h1>
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
                        <p>{props.shortDescription}</p>
                            <p style={{display: 'inline-block'}}>{props.time} </p>
                            {props.category.map(el => <p style={{display: 'inline-block', marginLeft: '4px'}} key={el}> •{el}</p> )}
                    </div>
                    <img className='main__carosoul__image'  src={Book} alt='book' />
                </div>
            </div>
    );
};

export default HomePageCarosul;