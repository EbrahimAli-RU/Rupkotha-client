import React from 'react';
import { Link } from 'react-router-dom'
import Icon from '../../assets/img/sprite.svg'
import Book from '../../assets/img/little.png'
import backgroundImg from '../../assets/img/2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart, faBookOpen } from '@fortawesome/free-solid-svg-icons'

const HomePageCarosul = (props) => {
    return (
        <div className='main__carosoul'>
            <img src={backgroundImg} alt='background' className='main__carosoul__background-img' />
            <div className='main__carosoul__content'>
                <div className='main__carosoul__left__div'>
                    <h1>{props.title}</h1>
                    <div style={{ margin: '4rem 0' }}>
                        <Link to='/read'>
                            <button className='read__button'>
                                <FontAwesomeIcon icon={faBookOpen} style={{ color: 'white', fontSize: '2rem', cursor: 'pointer', marginRight: '1rem' }} />
                                Read</button>
                        </Link>
                        <div className="main__carosoul__wishlist">
                            {props.wishlist !== -1 ? <FontAwesomeIcon onClick={() => props.handler(props.id)} icon={fasHeart} style={{ color: 'red', fontSize: '2.5rem', cursor: 'pointer', }} /> :
                                <FontAwesomeIcon onClick={() => props.handler(props.id)} icon={faHeart} style={{ color: 'red', fontSize: '2.5rem', cursor: 'pointer', }} />}
                        </div>
                    </div>
                    <p>{props.shortDescription}</p>
                    <p style={{ display: 'inline-block' }}>{props.time} </p>
                    {props.category.map(el => <p style={{ display: 'inline-block', marginLeft: '4px' }} key={el}> •{el}</p>)}
                </div>
                <img className='main__carosoul__image' src={`http://localhost:8000/${props.bookPhoto}`} alt='book' />
            </div>
        </div>
    );
};

export default HomePageCarosul;