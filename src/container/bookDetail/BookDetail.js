import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router'
import axios from '../../utils/axios/axios'
import HomePageCarosul from '../../component/homePagecarosul/HomePageCarosul'
import BookCard from '../../component/bookCard/BookCard'
import Spinner from '../../component/Spinner';
import Navigation from '../../layout/Navigation';

const BookDetail = (props) => {
    const [active, setActive] = useState(1)
    const [data, setData] = useState({book: {}, channelTitle: ''})
    const [channel, setChannel] = useState([])
    const activeHandler = (activeVal) => {
        setActive(activeVal)
    }
    useEffect(() => {
        axios.get(`${props.location.pathname}${props.location.search}&l=5&p=1`).then(res => {
            setData({book: res.data.data.book, channelTitle: res.data.data.channelTitle })
            let channelBook = [...channel, ...res.data.data.channel]
            channelBook = [...new Map(channelBook.map(item => [item["_id"], item])).values()]
            setChannel(channelBook)
        }).catch(err => {
            console.log(err.response)
        })
    }, [])
    return (
        <>
        {Object.keys(data.book).length === 0 ? <Spinner show /> : 
            <>
                <Navigation />
                <HomePageCarosul title={data.book.bookTitle} 
                                 shortDescription={data.book.shortDescription} 
                                 time={data.book.timeToRead} 
                                 category={data.book.category} />
                <div className='book__detail__content'>
                    <nav>
                        <ul>
                            <li className={active === 1 ? 'hoverClass' : ''} onClick={() => activeHandler(1)}>Channel</li>
                            <li className={active === 2 ? 'hoverClass' : ''} onClick={() => activeHandler(2)}>Detail</li>
                        </ul>
                    </nav>
                    <div  className={active === 1 ? 'book__detail__channel__content active__block' : 'book__detail__channel__content inactive__block'}>
                        <h2 className='book__detail__channel-title'><strong>{data.channelTitle}</strong></h2>
                        {channel.map(el => <BookCard key={el._id} link={`/book/${el._id}?_channel=${el.category}`} width='33' book={el.cardPhoto}/>)}
                    </div>
                    <div  className={active === 2 ? 'book__detail__channel__content active__block' : 'book__detail__channel__content inactive__block'}>
                        <div className='book__detail__detail__content'>
                            <div className='book__detail__detail__content__long-description'>
                                description
                            </div>
                            <div className='book__detail__detail__content__about-book'>
                                About
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }
        </>
    );
};

export default withRouter(BookDetail);