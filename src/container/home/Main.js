import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../utils/axios/axios'
import BookCard from '../../component/bookCard/BookCard';
import HomePageCarosul from '../../component/homePagecarosul/HomePageCarosul'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navigation from '../../layout/Navigation';
import Books from './Books'
import DotSpinner from '../../component/spinner/DotSpinner';
import Error from '../../component/Error'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import * as action from '../../redux/action/index'
import { responsive, responsiveCarosul } from '../../utils/utils/utils'

const Main = () => {
    /////STATE
    const [page, setPage] = useState(0)
    const [carosulItem, setCarosulItem] = useState([])
    const [wishlist, setWishlist] = useState({ id: '', category: '', isInserted: false })
    const [error, setError] = useState({ error: false, message: '' })
    const child = useSelector(state => state.user.child)
    const wishlistFromRedux = useSelector(state => state.wishlist)

    /////GET DATA FROM BOOK.JS 
    const { loading, hasMore, book } = Books(page, wishlist.id, wishlist.category, wishlist.isInserted)

    //FOR INFINITE SCROLLING
    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevPage => prevPage + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [book])


    useEffect(() => {
        axios.get('/book/carosul').then(res => {
            res.data.data.carosul = res.data.data.carosul.map(el => {
                return { ...el, isWishlisted: wishlistFromRedux.wishlist.findIndex(wish => wish.bookId._id === el._id) }
            })
            setCarosulItem(res.data.data.carosul)
        }).catch(err => {
            setError({ error: true, message: err.response.data.message })
            setTimeout(() => {
                vanisError()
            }, 4000)
            console.log(err.response)
        })
    }, [wishlistFromRedux.wishlist])

    const carosulWishlistHandler = (id) => {

        axios.post('/wishlist', { bookId: id, userId: child._id }).then(res => {
            let carosulItemCopy = [...carosulItem]
            for (let i = 0; i < carosulItemCopy.length; i++) {
                if (carosulItemCopy[i]._id === id) {
                    res.data.data.message === 'created' ?
                        carosulItemCopy[i].isWishlisted = i + 1 :
                        carosulItemCopy[i].isWishlisted = -1
                }
            }
            setCarosulItem(carosulItemCopy);
        }).catch(err => {
            setError({ error: true, message: err.response.data.message })
            setTimeout(() => {
                vanisError()
            }, 4000)
        })
    }

    const vanisError = () => {
        setError({ error: false, message: '' })
    }
    const vanisErrorHandler = () => {
        setError({ error: false, message: '' })
    }
    /////HANDLING WISHLIST 
    const wishlistHandler = (id, category) => {
        axios.post('/wishlist', { bookId: id, userId: child._id }).then(res => {
            res.data.data.message === 'created' ?
                setWishlist({ id, category, isInserted: true }) :
                setWishlist({ id, category, isInserted: false })
        }).catch(err => {
            setError({ error: true, message: err.response.data.message })
            setTimeout(() => {
                vanisError()
            }, 4000)
            console.log(err.response)
        })
    }

    /////RENDERING
    return (
        <div id='scroll'>
            <Error show={error.error} message={error.message} handler={vanisErrorHandler} />
            <Navigation />
            {carosulItem.length === 0 ? <DotSpinner /> :
                <Carousel
                    responsive={responsiveCarosul} showDots autoPlay infinite autoPlaySpeed={3000} dotListClass="custom-dot-list-style" >
                    {carosulItem.map((el, i) => <HomePageCarosul key={i}
                        title={el.bookTitle}
                        shortDescription={el.shortDescription}
                        time={el.timeToRead}
                        category={el.category}
                        handler={carosulWishlistHandler}
                        id={el._id}
                        wishlist={el.isWishlisted} />)}
                </Carousel>
            }
            {book.length === 0 ? <DotSpinner /> :
                <div style={{ width: '98%', margin: 'auto', scrollBehavior: 'smooth' }} >
                    {book.map((el, i) => {
                        if ((i + 1) === book.length) {
                            return (
                                <div className='main__books' key={i}>
                                    <div className='main__books__category' >
                                        <p>{el._id}</p>
                                        <a href={`/book/channel?_channel=${el._id}`}>View More</a>
                                    </div>
                                    <div className='bookCard'>
                                        {el.books.length < 5 ? <>
                                            {el.books.map((singleBook, i) =>
                                                <BookCard
                                                    wishlist={singleBook.isWishlisted}
                                                    link={`/book/${singleBook.id}?_channel=${singleBook.channel}`}
                                                    key={i}
                                                    book={singleBook.cardPhoto}
                                                    width='25'
                                                    handler={wishlistHandler}
                                                    id={singleBook.id}
                                                    category={el._id} />)}</> :
                                            <Carousel
                                                responsive={responsive}>
                                                {el.books.map((singleBook, i) =>
                                                    <BookCard
                                                        wishlist={singleBook.isWishlisted}
                                                        link={`/book/${singleBook.id}?_channel=${singleBook.channel}`}
                                                        key={i}
                                                        book={singleBook.cardPhoto}
                                                        width='100'
                                                        handler={wishlistHandler}
                                                        id={singleBook.id}
                                                        category={el._id} />)}
                                            </Carousel>}
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
                                        {el.books.length < 5 ? <>
                                            {el.books.map((singleBook, i) =>
                                                <BookCard
                                                    handler={wishlistHandler}
                                                    wishlist={singleBook.isWishlisted}
                                                    link={`/book/${singleBook.id}?_channel=${singleBook.channel}`}
                                                    key={i}
                                                    book={singleBook.cardPhoto}
                                                    width='25'
                                                    id={singleBook.id}
                                                    category={el._id} />)}</> :
                                            <Carousel
                                                responsive={responsive}>
                                                {el.books.map((singleBook, i) =>
                                                    <BookCard
                                                        handler={wishlistHandler}
                                                        wishlist={singleBook.isWishlisted}
                                                        key={i}
                                                        link={`/book/${singleBook.id}?_channel=${singleBook.channel}`}
                                                        book={singleBook.cardPhoto}
                                                        width='100'
                                                        id={singleBook.id}
                                                        category={el._id} />)}
                                            </Carousel>}
                                    </div>
                                    <div ></div>
                                </div>
                            )
                        }
                    })}
                    {loading ? <DotSpinner /> : null}
                </div>}
        </div>
    );
};

export default Main;