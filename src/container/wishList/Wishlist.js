import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../utils/axios/axios'
import BookCard from '../../component/bookCard/BookCard'
import Navigation from '../../layout/Navigation';
import Spinner from '../../component/spinner/DotSpinner'
import { Link } from 'react-router-dom'

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const child = useSelector(state => state.user.child)

    useEffect(() => {
        axios.get(`/wishlist/${child._id}`).then(res => {
            setWishlistItems(res.data.data.wishList)
            setLoading(false)
        }).catch(err => {
            console.log(err.response)
            setLoading(false)
        })
        return () => { setWishlistItems([]) }
    }, [])

    let renderWishlist = <div style={{ textAlign: 'center' }}>
        <h1 className='wishlist__message'>Nothing in your Wishlist!</h1>
        <Link className='go__home__page' to='/home'>Back to home <span>&#8594;</span></Link>
    </div>
    if (wishlistItems.length !== 0) {
        renderWishlist = wishlistItems.map(el =>
            <BookCard key={el._id}
                link={`/book/${el.bookId._id}?_channel=${el.bookId.category[0]}`}
                book={el.bookId.cardPhoto}
                width='25' />)
    }

    return (
        <>
            <Navigation />
            <div className='wishlist__wrapper '>
                <h1 className='wishlist__wrapper__title marginBottom-big'>Your favorites</h1>
                {loading ? <Spinner /> :
                    <div className='wishlist__content'>
                        {renderWishlist}
                    </div>}
            </div>
        </>
    );
};

export default Wishlist;