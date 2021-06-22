import {useState, useEffect} from 'react'
import axios from '../../utils/axios/axios'
export default function Books(page)  {
    const [book, setBook] = useState([])
    const [loading, setLoading] = useState(true)
    const [hasMore, setHasMore] = useState(false)
    const [carosulItem, setCarosulItem] = useState([])
    useEffect(() => {
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
                setBook(hhh)
                if(page === 0) setCarosulItem(res.data.data.carosul)
                console.log(res.data.data.carosul)
                // setBook(preBook => [...new Set([...preBook, ...res.data.data.book.map(book => book._id)])])
    
            }).catch(err => {
                setLoading(false)
                console.log(err.response)
            })
        }, 1000)
    }, [page])
    return {book, loading, hasMore, carosulItem};
};
