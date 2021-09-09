import { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../utils/axios/axios'
import { withRouter } from 'react-router'
import BookCard from '../../component/bookCard/BookCard';
import Navigation from '../../layout/Navigation';
import DotSpinner from '../../component/spinner/DotSpinner';
import Error from '../../component/Error';
import * as action from '../../redux/action/index'

const ViewMore = (props) => {
    const [book, setBook] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasmore] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState({ error: false, message: '' })

    const dispatch = useDispatch()
    const wishlist = useSelector(state => state.wishlist)
    const child = useSelector(state => state.user.child)
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

    useLayoutEffect(() => { dispatch(action.fetchWishlist(child._id)) }, [])

    useEffect(() => {
        setLoading(true)
        if (wishlist.success) {
            axios.get(`/book/channel${props.location.search}&l=5&p=${page}`).then(res => {
                setHasmore(res.data.data.channel.length > 0)
                let channelCopy = [...res.data.data.channel]
                channelCopy = channelCopy.map(el => { return { ...el, isWishlisted: wishlist.wishlist.findIndex(wish => wish.bookId._id === el._id) } })
                let books = [...book, ...channelCopy]
                books = [...new Map(books.map(item => [item["_id"], item])).values()]
                setBook(books)
                setLoading(false)
            }).catch(err => {
                setLoading(false)
                console.log(err.response)
            })
        }
    }, [page, wishlist.success])

    const wishlistHandler = (id) => {
        axios.post('/wishlist', { bookId: id, userId: child._id }).then(res => {
            const bookCopy = [...book]
            if (res.data.data.message === 'created') {
                for (let i = 0; i < bookCopy.length; i++) {
                    if (bookCopy[i]._id === id) {
                        bookCopy[i].isWishlisted = 2
                    }
                }
            } else {
                for (let i = 0; i < bookCopy.length; i++) {
                    if (bookCopy[i]._id === id) {
                        bookCopy[i].isWishlisted = -1
                    }
                }
            }
            setBook(bookCopy)
        }).catch(err => {
            setError({ error: true, message: err.response.data.message })
            setTimeout(() => { vanisError() }, 4000)
            console.log(err.response)
        })
    }

    const vanisError = () => { setError({ error: false, message: '' }) }
    return (
        <>
            <Error show={error.error} message={error.message} handler={vanisError} />
            <Navigation />
            <div className='view__more__wrapper'>
                {book.length === 0 ? <DotSpinner /> :
                    <>
                        <h1 className='view__more__primary__title'>{book[0].category}</h1>
                        <p className='view__more__secondary__title'>{book[0].category}</p>
                        <div>
                            {book.map(el =>
                                <BookCard
                                    title={el.shortDescription}
                                    key={el._id}
                                    link={`/book/${el._id}?_channel=${el.category}`}
                                    width='25'
                                    book={el.cardPhoto}
                                    wishlist={el.isWishlisted}
                                    id={el._id}
                                    handler={wishlistHandler} />)}
                            <div ref={lastBookElementRef} ></div>
                        </div>
                        {loading ? <DotSpinner /> : null}
                    </>}
            </div>
        </>
    );
};

export default withRouter(ViewMore);