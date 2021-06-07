import React from 'react';
import BookCard from '../../component/bookCard/BookCard';
import HomePageCarosul from '../../component/homePagecarosul/HomePageCarosul'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const main = () => {
    return (
        <>
            <OwlCarousel items={1}
                className="owl-theme"
                 nav center loop={true} dots={false} autoplay={true} autoplayTimeout={3000} autoplayHoverPause={true}>
                    <HomePageCarosul />
                    <HomePageCarosul />
                    <HomePageCarosul />
                    <HomePageCarosul />
            </OwlCarousel>
            <div className='main__books'>
                <div className='main__books__category'>
                    <p>Recent Added</p>
                    <a href='/'>View More</a>
                </div>
                <BookCard />
            </div>
            <div className='main__books'>
                <div className='main__books__category'>
                    <p>Most Popular</p>
                    <a href='/'>View More</a>
                </div>
                <BookCard />
            </div>
        </>
    );
};

export default main;