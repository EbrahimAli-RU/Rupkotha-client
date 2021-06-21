import React, {useState, useEffect, useCallback, useRef} from 'react';
import axios from '../../utils/axios/axios'
import BookCard from '../../component/bookCard/BookCard';
import HomePageCarosul from '../../component/homePagecarosul/HomePageCarosul'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navigation from '../../layout/Navigation';
import Books from './Books'
import DotSpinner from '../../component/spinner/DotSpinner';

const Main = () => {
    const [page, setPage] = useState(0)

    const {loading, hasMore, book} = Books(page)

    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore) {
                setPage(prevPage => prevPage + 1)
            }
        })
        if(node) observer.current.observe(node)
    }, [book])

    return (
        <div id='scroll'>
            
        <Navigation />
            <OwlCarousel items={1}
                className="owl-theme"
                 nav center loop={true} dots={false} autoplay={true} autoplayTimeout={3000} autoplayHoverPause={true}>
                    <HomePageCarosul />
                    <HomePageCarosul />
                    <HomePageCarosul />
                    <HomePageCarosul />
            </OwlCarousel>
            {book.length === 0 ? <DotSpinner />: 
            <div style={{width: '98%', margin: 'auto'}} >
            {book.map((el, i) => {
                if((i+1) === book.length) {
                    return (
                        <div className='main__books'  key={i}>
                            <div className='main__books__category' >
                                <p>{el._id}</p>
                                <a href='/'>View More</a>
                            </div>
                            <div className='bookCard'>
                                {el.books.map(el => <BookCard key={el.id} book={el.cardPhoto} width='25' /> )}
                            </div>
                            <div ref={lastBookElementRef} ></div>
                        </div>
                    )
                } else {
                    return (
                        <div className='main__books' key={i}>
                            <div className='main__books__category' >
                                <p>{el._id}</p>
                                <a href='/'>View More</a>
                            </div>
                            <div className='bookCard'>
                                {el.books.map(el => <BookCard key={el.id} book={el.cardPhoto} width='25' /> )}
                            </div>
                            <div ></div>
                        </div>
                    )
                }
                
            })}
            {loading ? <DotSpinner />: null}
        </div>}
        </div>
    );
};

export default Main;



{/* <div className='main__books' >
                    <div className='main__books__category' >
                        <p>Recent Added</p>
                        <a href='/'>View More</a>
                    </div>
                    <div className='bookCard'>
                        <BookCard width='25' />
                        <BookCard width='25' />
                        <BookCard width='25' />
                        <BookCard width='25' />
                    </div>
                </div>
                <div className='main__books'>
                    <div className='main__books__category'>
                        <p>Most Popular</p>
                        <a href='/'>View More</a>
                    </div>
                    <div className='bookCard'>
                        <BookCard width='25' />
                        <BookCard width='25' />
                        <BookCard width='25' />
                        <BookCard width='25' />
                    </div>
                </div>
                <div className='main__books'>
                    <div className='main__books__category'>
                        <p>Most Popular</p>
                        <a href='/'>View More</a>
                    </div>
                    <div className='bookCard'>
                        <BookCard width='25' />
                        <BookCard width='25' />
                        <BookCard width='25' />
                        <BookCard width='25' />
                    </div>
                </div> */}