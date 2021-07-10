import { useState ,useEffect, useRef, useCallback} from 'react';
import axios from '../../utils/axios/axios'
import { withRouter } from 'react-router'
import BookCard from '../../component/bookCard/BookCard';
import Navigation from '../../layout/Navigation';
import DotSpinner from '../../component/spinner/DotSpinner';

const ViewMore = (props) => {
    const [book, setBook] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasmore] = useState(false)
    const [loading, setLoading] = useState(true)

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

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            axios.get(`/book/channel${props.location.search}&l=5&p=${page}`).then(res => {
                setHasmore(res.data.data.channel.length > 0)
                let books = [...book, ...res.data.data.channel]
                books = [...new Map(books.map(item => [item["_id"], item])).values()]
                setBook(books)
                setLoading(false)
            }).catch(err => {
                setLoading(false)
                console.log(err.response)
            })
        }, 2000)
    }, [page])
    return (
        <>
        <Navigation />
        <div className='view__more__wrapper'>
            {book.length === 0 ? <DotSpinner />: 
            <>
            <h1 className='view__more__primary__title'>{book[0].category}</h1>
            <p className='view__more__secondary__title'>{book[0].category}</p>
            <div> 
                {book.map(el => 
                        <BookCard 
                            key={el._id} 
                            link={`/book/${el._id}?_channel=${el.category}`} 
                            width='25' 
                            book={el.cardPhoto}/> )}
                <div ref={lastBookElementRef} ></div>
            </div>
            {loading ? <DotSpinner />: null}
            </>}
        </div>
        </>
    );
};

export default withRouter(ViewMore);