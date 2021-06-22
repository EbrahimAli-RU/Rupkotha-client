import { useState ,useEffect} from 'react';
import axios from '../../utils/axios/axios'
import { withRouter } from 'react-router'
import BookCard from '../../component/bookCard/BookCard';
import Book from '../../assets/img/book/5_copy.png'
import Navigation from '../../layout/Navigation';
const ViewMore = (props) => {
    const [book, setBook] = useState([])


    useEffect(() => {
        axios.get(`/book/channel${props.location.search}&l=5&p=1`).then(res => {
            console.log(res.data.data.channel)
            let books = [...book, ...res.data.data.channel]
            books = [...new Map(books.map(item => [item["_id"], item])).values()]
            setBook(books)
        }).catch(err => {
            console.log(err.response)
        })
    }, [])
    return (
        <>
        <Navigation />
        <div className='view__more__wrapper'>
            {book.length === 0 ? <p>Loading........</p>: 
            <>
            <h1 className='view__more__primary__title'>{book[0].category}</h1>
            <p className='view__more__secondary__title'>{book[0].category}</p>
            <div>
                
                {book.map(el => <BookCard key={el._id} width='25' book={el.cardPhoto}/> )}
            </div>
            </>}
        </div>
        </>
    );
};

export default withRouter(ViewMore);