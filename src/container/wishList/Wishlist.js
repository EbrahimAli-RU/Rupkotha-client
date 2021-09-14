import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "../../utils/axios/axios";
import BookCard from "../../component/bookCard/BookCard";
import Navigation from "../../layout/Navigation";
import Spinner from "../../component/spinner/DotSpinner";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const child = useSelector((state) => state.user.child);

  const getWishList = () => {
    axios
      .get(`/wishlist/${child._id}`)
      .then((res) => {
        setWishlistItems(res.data.data.wishList);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
      });
  };

  useEffect(() => {
    getWishList();
    return () => {
      setWishlistItems([]);
    };
  }, []);

  /////HANDLING WISHLIST
  const wishlistHandler = (id, category) => {
    axios
      .get(`/wishlist/delete?bookId=${id}&userId=${child._id}`)
      .then((res) => {
        getWishList();
      })
      .catch((err) => {
        // setError({ error: true, message: err.response.data.message })
        // setTimeout(() => {
        //     vanisError()
        // }, 4000)
        console.log(err.response);
      });
  };

  let renderWishlist = (
    <div style={{ textAlign: "center" }}>
      <h1 className="wishlist__message">Nothing in your Wishlist!</h1>
      <Link className="go__home__page" to="/home">
        Back to home <span>&#8594;</span>
      </Link>
    </div>
  );
  if (wishlistItems.length !== 0) {
    renderWishlist = wishlistItems.map((el) => (
      <BookCard
        key={el._id}
        link={`/book/${el.bookId._id}?_channel=${el.bookId.category[0]}`}
        book={el.bookId.cardPhoto}
        id={el.bookId._id}
        title={el.bookId.shortDescription}
        handler={wishlistHandler}
        width="25"
      />
    ));
  }

  return (
    <>
      <Navigation />
      <div className="wishlist__wrapper ">
        <h1 className="wishlist__wrapper__title marginBottom-big">
          Your favorites
        </h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="wishlist__content">{renderWishlist}</div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
