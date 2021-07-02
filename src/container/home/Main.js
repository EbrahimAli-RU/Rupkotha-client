import React, {useState, useEffect, useCallback, useRef, useLayoutEffect} from 'react';
import { useDispatch } from 'react-redux'
import axios from '../../utils/axios/axios'
import BookCard from '../../component/bookCard/BookCard';
import HomePageCarosul from '../../component/homePagecarosul/HomePageCarosul'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navigation from '../../layout/Navigation';
import Books from './Books'
import DotSpinner from '../../component/spinner/DotSpinner';
import * as action from '../../redux/action/index'

const Main = () => {
    /////STATE
    const [page, setPage] = useState(0)
    const [carosulItem, setCarosulItem] = useState([])
    const dispatch = useDispatch();

    /////GET DATA FROM BOOK.JS 
    const {loading, hasMore, book} = Books(page)

    //FOR INFINITE SCROLLING
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

    //FETCHING WISHLIST
    // useLayoutEffect(() => {
    //     dispatch(action.fetchWishlist('60d35cc36099a233849ae2e7'));
    // }, [])

    //FTECHING CAROSUL ITEMS
    useEffect(() => {
        axios.get('/book/carosul').then(res => {
            setCarosulItem(res.data.data.carosul)
        }).catch(err => {
            console.log(err.response)
        })
    }, [])

    /////RENDERING
    return (
        <div id='scroll'>           
        <Navigation />
            {carosulItem.length === 0 ? <DotSpinner />: 
                <OwlCarousel items={1}
                className="owl-theme"
                 nav center loop={true} dots={true} autoplay={true} autoplayTimeout={3000} autoplayHoverPause={true}>
                     {carosulItem.map((el, i) => <HomePageCarosul key={i} title={el.bookTitle} 
                                 shortDescription={el.shortDescription} 
                                 time={el.timeToRead} 
                                 category={el.category} />)}
                </OwlCarousel>
            }
            {book.length === 0 ? <DotSpinner />: 
            <div style={{width: '98%', margin: 'auto', scrollBehavior: 'smooth'}} >
            {book.map((el, i) => {
                if((i+1) === book.length) {
                    return (
                        <div className='main__books'  key={i}>
                            <div className='main__books__category' >
                                <p>{el._id}</p>
                                <a href={`/book/channel?_channel=${el._id}`}>View More</a>
                            </div>
                            <div className='bookCard'>
                                {el.books.length < 5 ?  <>{el.books.map((singleBook, i) => <BookCard wishlist={singleBook.isWishlisted} link={`/book/${singleBook.id}?_channel=${singleBook.channel}`} key={i} book={singleBook.cardPhoto} width='25' /> )}</>: 
                            <OwlCarousel items={5}
                                className="owl-theme" margin={10}
                                nav center loop={true} dots={true} autoplay={false} autoplayTimeout={3000} autoplayHoverPause={true}>
                                {el.books.map((singleBook, i) => <BookCard wishlist={singleBook.isWishlisted} link={`/book/${singleBook.id}?_channel=${singleBook.channel}`} key={i} book={singleBook.cardPhoto} width='100' /> )}
                            </OwlCarousel>}
                            </div>
                            <div ref={lastBookElementRef} ></div>
                        </div>
                    )
                } else {
                    return (
                     <div className='main__books' key={i}>
                            <div className='main__books__category' >
                                <p>{el._id}</p>
                                <a href={`/book/channel?_channel=${el._id}`}>View More</a>
                            </div>
                            <div className='bookCard'>
                            {el.books.length < 5 ?  <>{el.books.map((singleBook, i) => <BookCard wishlist={singleBook.isWishlisted} link={`/book/${singleBook.id}?_channel=${singleBook.channel}`} key={i} book={singleBook.cardPhoto} width='25' /> )}</>:
                            <OwlCarousel items={5}
                                className="owl-theme" margin={10}
                                nav center loop={true} dots={false} autoplay={false} autoplayTimeout={3000} autoplayHoverPause={true}>
                                {el.books.map((singleBook, i) => <BookCard wishlist={singleBook.isWishlisted} key={i} link={`/book/${singleBook.id}?_channel=${singleBook.channel}`} book={singleBook.cardPhoto} width='100' /> )}
                            </OwlCarousel>}
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