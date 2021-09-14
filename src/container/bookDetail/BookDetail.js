import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../utils/axios/axios";
import HomePageCarosul from "../../component/homePagecarosul/HomePageCarosul";
import BookCard from "../../component/bookCard/BookCard";
import Spinner from "../../component/Spinner";
import Navigation from "../../layout/Navigation";
import DotSpinner from "../../component/spinner/DotSpinner";
import * as action from "../../redux/action/index";

const BookDetail = (props) => {
  const [active, setActive] = useState(1);
  const [data, setData] = useState({ book: {}, channelTitle: "" });
  const [channel, setChannel] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasmore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ error: false, message: "" });

  const wishlist = useSelector((state) => state.wishlist);
  const child = useSelector((state) => state.user.child);
  const dispatch = useDispatch();
  const observer = useRef();

  const lastBookElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [channel]
  );

  const activeHandler = (activeVal) => {
    setActive(activeVal);
  };

  useLayoutEffect(() => {
    dispatch(action.fetchWishlist(child._id));
  }, []);

  useEffect(() => {
    setLoading(true);
    if (wishlist.success) {
      axios
        .get(`${props.location.pathname}${props.location.search}&l=4&p=${page}`)
        .then((res) => {
          setHasmore(res.data.data.channel.length > 0);
          setData({
            book: {
              ...res.data.data.book,
              isWishlisted: wishlist.wishlist.findIndex(
                (wish) => wish.bookId._id === res.data.data.book._id
              ),
            },
            channelTitle: res.data.data.channelTitle,
          });
          let channelCopy = [...res.data.data.channel];
          channelCopy = channelCopy.map((el) => {
            return {
              ...el,
              isWishlisted: wishlist.wishlist.findIndex(
                (wish) => wish.bookId._id === el._id
              ),
            };
          });
          let channelBook = [...channel, ...channelCopy];
          channelBook = [
            ...new Map(channelBook.map((item) => [item["_id"], item])).values(),
          ];
          setChannel(channelBook);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.response);
          setLoading(false);
        });
    }
  }, [page, wishlist.success]);

  const wishlistHandler = (id) => {
    axios
      .post("/wishlist", { bookId: id, userId: child._id })
      .then((res) => {
        const bookCopy = [...channel];
        const mainBook = { ...data };
        const caroBook = { ...mainBook.book };
        if (res.data.data.message === "created") {
          if (caroBook._id === id) {
            caroBook.isWishlisted = 1;
          }
          for (let i = 0; i < bookCopy.length; i++) {
            if (bookCopy[i]._id === id) bookCopy[i].isWishlisted = 2;
          }
        } else {
          if (caroBook._id === id) {
            caroBook.isWishlisted = -1;
          }
          for (let i = 0; i < bookCopy.length; i++) {
            if (bookCopy[i]._id === id) bookCopy[i].isWishlisted = -1;
          }
        }
        setChannel(bookCopy);
        setData({ book: caroBook, channelTitle: mainBook.channelTitle });
      })
      .catch((err) => {
        setError({ error: true, message: err.response.data.message });
        setTimeout(() => {
          vanisError();
        }, 4000);
        console.log(err.response);
      });
  };
  const vanisError = () => {
    setError({ error: false, message: "" });
  };
  return (
    <>
      {Object.keys(data.book).length === 0 || loading ? (
        <Spinner show />
      ) : (
        <>
          <Navigation />
          <HomePageCarosul
            title={data.book.bookTitle}
            shortDescription={data.book.shortDescription}
            time={data.book.timeToRead}
            category={data.book.category}
            wishlist={data.book.isWishlisted}
            id={data.book._id}
            handler={wishlistHandler}
            bookPhoto={data.book.bookPhoto}
          />
          <div className="book__detail__content">
            <nav>
              <ul>
                <li
                  className={active === 1 ? "hoverClass" : ""}
                  onClick={() => activeHandler(1)}
                >
                  Channel
                </li>
                <li
                  className={active === 2 ? "hoverClass" : ""}
                  onClick={() => activeHandler(2)}
                >
                  Detail
                </li>
              </ul>
            </nav>
            <div
              className={
                active === 1
                  ? "book__detail__channel__content active__block width80"
                  : "width80 book__detail__channel__content inactive__block"
              }
            >
              <h2 className="book__detail__channel-title">
                <strong>{data.channelTitle}</strong>
              </h2>
              {channel.map((el) => (
                <BookCard
                  title={el.shortDescription}
                  key={el._id}
                  link={`/book/${el._id}?_channel=${el.category}`}
                  width="33"
                  book={el.cardPhoto}
                  wishlist={el.isWishlisted}
                  handler={wishlistHandler}
                  id={el._id}
                />
              ))}
              <div ref={lastBookElementRef}></div>
              {loading ? <DotSpinner /> : null}
            </div>

            <div
              className={
                active === 2
                  ? "book__detail__channel__content active__block width95"
                  : "width95 book__detail__channel__content inactive__block"
              }
            >
              <div className="book__detail__detail__content">
                <div className="book__detail__detail__content__long-description">
                  <h1 style={{ color: "black", margin: " 4rem 0 1rem 0" }}>
                    {data.book.bookTitle}
                  </h1>
                  <p className="detail_paragrap_title">
                    {data.book.longDescription}
                  </p>
                </div>
                <div className="book__detail__detail__content__about-book">
                  <div style={{ marginTop: "4rem" }}>
                    <div>
                      <p className="detail_paragrap_title">Author:</p>
                      <p className="detail_paragrap">Harriet Ziefert</p>
                    </div>
                    <div>
                      <p className="detail_paragrap_title">Illustrations:</p>
                      <p className="detail_paragrap">Simms Taback</p>
                    </div>
                    <div>
                      <p className="detail_paragrap_title">Release:</p>
                      <p className="detail_paragrap">January 1997</p>
                    </div>
                  </div>
                  <div style={{ marginTop: "4rem" }}>
                    <div>
                      <p className="detail_paragrap_title">Length:</p>
                      <p className="detail_paragrap">4m 23s</p>
                    </div>
                    <div>
                      <p className="detail_paragrap_title">Ages:</p>
                      <p className="detail_paragrap">2-8</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default withRouter(BookDetail);
