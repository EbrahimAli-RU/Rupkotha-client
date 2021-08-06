import { useState, useEffect, useLayoutEffect } from 'react'
import axios from '../../utils/axios/axios'
import * as action from '../../redux/action/index'
import { useDispatch, useSelector } from 'react-redux'

export default function Books(page, wishlistId, wishlistCategory, wishlistIsInserted) {
    /////STATE--------
    const [book, setBook] = useState([])
    const [loading, setLoading] = useState(true)
    const [hasMore, setHasMore] = useState(false)
    const wishlist = useSelector(state => state.wishlist)

    const dispatch = useDispatch();
    const child = useSelector(state => state.user.child)
    ////FETCHING WISHLIST
    useLayoutEffect(() => {
        dispatch(action.fetchWishlist(child._id));
    }, [])
    ////HADLING WISHLIST: ADDING AND REMOVING
    useEffect(() => {
        const bookCopy = [...book]
        for (let i = 0; i < bookCopy.length; i++) {
            if (bookCopy[i]._id === wishlistCategory) {
                for (let j = 0; j < bookCopy[i].books.length; j++) {
                    if (bookCopy[i].books[j].id == wishlistId) {
                        wishlistIsInserted ? bookCopy[i].books[j].isWishlisted = 1 : bookCopy[i].books[j].isWishlisted = -1
                        setBook(bookCopy)
                    }
                }
            }
        }
    }, [wishlistId, wishlistIsInserted])

    //////FETCHING BOOK EACH TIME WHEN PAGE REACHED AT BOTTOM
    useEffect(() => {
        setLoading(true)
        if (wishlist.success) {
            setTimeout(() => {
                axios({
                    method: 'GET',
                    url: '/book',
                    params: { l: 5, s: page }
                }).then(res => {
                    setHasMore(res.data.data.book.length > 0)
                    setLoading(false)
                    /////FILTERING RESPONSE SO THAT NO DUPLICATE DATA IS PRESENT.
                    let ggg = res.data.data.book.map(el => {
                        return {
                            ...el,
                            books: el.books.map(el => {
                                return { ...el, isWishlisted: wishlist.wishlist.findIndex(wish => wish.bookId._id === el.id) }
                            })
                        }
                    })
                    let hhh = [...book, ...ggg]
                    hhh = [...new Map(hhh.map(item => [item["_id"], item])).values()]
                    setBook(hhh)
                }).catch(err => {
                    setLoading(false)
                    console.log(err.response)
                })
            }, 1000)
        }
    }, [page, wishlist.wishlist, wishlist.success])
    ///////RETURNING DATA TO MAIN.JS
    return { book, loading, hasMore };
};
