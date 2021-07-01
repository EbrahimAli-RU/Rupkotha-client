import {useState, useEffect} from 'react';
import axios from '../../utils/axios/axios'
import BookCard from '../../component/bookCard/BookCard'
import Navigation from '../../layout/Navigation';
import Spinner from '../../component/spinner/DotSpinner'

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);
    useEffect(() => {
        axios.get(`/wishlist/60d35cc36099a233849ae2e7`).then(res => {
            setWishlistItems(res.data.data.wishList)
        }).catch(err => {
            console.log(err.response)
        })
        return () => {setWishlistItems([])}
    }, [])

    return (
        <>
        <Navigation />
            <div className='wishlist__wrapper '>
            <h1 className='wishlist__wrapper__title marginBottom-big'>Your favorites</h1>
            {wishlistItems.length === 0 ? <Spinner /> :
                <div className='wishlist__content'>
                    {wishlistItems.map(el => 
                        <BookCard key={el._id}
                            link={`/book/${el.bookId._id}?_channel=${el.bookId.category[0]}`}
                            book={el.bookId.cardPhoto}
                            width='25' /> )}
                </div>}
        </div>
        </>
    );
};

export default Wishlist;