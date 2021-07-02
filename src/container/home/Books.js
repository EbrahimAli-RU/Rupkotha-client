import {useState, useEffect, useLayoutEffect} from 'react'
import axios from '../../utils/axios/axios'
import * as action from '../../redux/action/index'
import { useDispatch, useSelector } from 'react-redux'
export default function Books(page)  {
    const [book, setBook] = useState([])
    const [loading, setLoading] = useState(true)
    const [hasMore, setHasMore] = useState(false)
    const wishlist = useSelector(state => state.wishlist)
    // const [carosulItem, setCarosulItem] = useState([])
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        dispatch(action.fetchWishlist('60d35cc36099a233849ae2e7'));
    }, [])

    useEffect(() => {
        console.log(page)
        setLoading(true)
        setTimeout(() => {
            axios({
                method: 'GET',
                url: '/book',
                params: {l: 5, s: page}
            }).then(res => {
                setHasMore(res.data.data.book.length > 0)
                setLoading(false)
                let hhh = [...book, ...res.data.data.book]
                hhh = [...new Map(hhh.map(item => [item["_id"], item])).values()]

                
               let ggg = hhh.map(el => {
                    return {
                        ...el, 
                        books: el.books.map(el => { 
                            return { 
                                ...el, 
                                isWishlisted:  wishlist.wishlist.findIndex(wish => wish.bookId._id === el.id)
                            } 
                        })
                    }
                })
                console.log(ggg)
                setBook(ggg)
                //wishlist.wishlist.filter(el => el.bookId._id === el._id)
                // if(page === 0) setCarosulItem(res.data.data.carosul)
                // console.log(res.data.data.carosul)
                // setBook(preBook => [...new Set([...preBook, ...res.data.data.book.map(book => book._id)])])
    
            }).catch(err => {
                setLoading(false)
                console.log(err.response)
            })
        }, 1000)
    }, [page])
    return {book, loading, hasMore};
};
