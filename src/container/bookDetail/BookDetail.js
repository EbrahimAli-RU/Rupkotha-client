import React, {useState} from 'react';
import HomePageCarosul from '../../component/homePagecarosul/HomePageCarosul'
import BookCard from '../../component/bookCard/BookCard'
const BookDetail = () => {
    const [active, setActive] = useState(1)
    const activeHandler = (activeVal) => {
        setActive(activeVal)
    }
    return (
        <>
            <HomePageCarosul />
            <div className='book__detail__content'>
                <nav>
                    <ul>
                        <li className={active === 1 ? 'hoverClass' : ''} onClick={() => activeHandler(1)}>Channel</li>
                        <li className={active === 2 ? 'hoverClass' : ''} onClick={() => activeHandler(2)}>Detail</li>
                    </ul>
                </nav>
                <div  className={active === 1 ? 'book__detail__channel__content active__block' : 'book__detail__channel__content inactive__block'}>
                    <h2><strong>New Release</strong></h2>
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
                <div  className={active === 2 ? 'book__detail__channel__content active__block' : 'book__detail__channel__content inactive__block'}>
                    <div className='book__detail__detail__content'>
                        <div className='book__detail__detail__content__long-description'>
                            description
                        </div>
                        <div className='book__detail__detail__content__about-book'>
                            About
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookDetail;