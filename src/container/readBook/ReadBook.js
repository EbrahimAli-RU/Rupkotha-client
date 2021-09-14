import React, { useState, useEffect, useLayoutEffect } from "react";
import jwt_decoded from "jwt-decode";
import axios from "../../utils/axios/axios";
import Icon from "../../assets/img/sprite.svg";
import { useSelector } from "react-redux";
import ExpireSubscription from "../../component/expireSubscription/ExpireSubscription";

const ReadBook = () => {
  const token = useSelector((state) => state.user.token);
  const decoded = jwt_decoded(token);
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkSubscription, setCheckSubscription] = useState(false);
  const [flag, setFlag] = useState(false);
  const [message, setMessage] = useState({
    message: "Your Subscription Has",
    sMessage: "Expired",
    secMessage: "resume ",
  });
  useLayoutEffect(() => {
    axios
      .get(`/payment/premium-user/${decoded.id}`)
      .then((res) => {
        setFlag(true);
        if (!res.data.data.premiumUser && !res.data.data.subscription)
          setMessage({
            message: "Please Subscribe to",
            sMessage: "Enjoy Rupkotha",
            secMessage: "start",
          });
        setCheckSubscription(res.data.data.premiumUser);
      })
      .catch((err) => {
        setCheckSubscription(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/page/611f75d8f3ff4a4cbc3cbc0d")
      .then((res) => {
        console.log(res.data.data.pages);
        setPages(res.data.data.pages);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
  }, []);
  const arr = pages;
  let currentLocation = 1;
  let numOfPages = arr.length;
  let maxLocation = numOfPages;

  const goNextPage = () => {
    let papers = document.querySelectorAll(".paper");
    if (currentLocation < maxLocation / 2) {
      console.log(currentLocation);
      papers[currentLocation].classList.add("flipped");
      papers[currentLocation].style.zIndex = numOfPages + currentLocation;
      currentLocation++;
    }
    if (currentLocation === numOfPages) {
      for (let i = 0; i < numOfPages; i++) {
        papers[i].style.zIndex = i;
      }
    }
  };

  const goPrevPage = () => {
    console.log(currentLocation);
    let papers = document.querySelectorAll(".paper");
    if (currentLocation > 1) {
      papers[currentLocation - 1].classList.remove("flipped");
      papers[currentLocation - 1].style.zIndex =
        2 * numOfPages - currentLocation;
      currentLocation--;
    }
    if (currentLocation === 0) {
      for (let i = 0; i < numOfPages; i++) {
        papers[i].style.zIndex = numOfPages - i;
      }
    }
  };

  const pageghh = [];
  if (arr.length !== 0) {
    for (let i = 1; i < arr.length; i = i + 2) {
      pageghh.push(
        <div
          key={i + 1}
          className="paper marginL marginR"
          style={{
            zIndex: `${arr.length - i}`,
          }}
        >
          <div className="front">
            <div id="f1" className="front__content">
              <img
                style={{ width: "100%", height: "100%" }}
                src={`http://localhost:8000/${arr[i].page}`}
                alt="ggg"
              />
            </div>
          </div>
          <div className="back">
            <div id="b1" className="back__content">
              <img
                style={{ width: "100%", height: "100%" }}
                src={`http://localhost:8000/${
                  i + 1 < arr.length ? arr[i + 1].page : null
                }`}
                alt="ggg"
              />
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <>
      {!checkSubscription && flag ? (
        <ExpireSubscription
          sMessage={message.sMessage}
          message={message.message}
          secMessage={message.secMessage}
        />
      ) : (
        <div className="read__book">
          <div className="read__book__pdf">
            {/* Prev--button */}
            <button onClick={goPrevPage} id="prev-btn" className="back__btn">
              <svg className="btn__svg">
                <use xlinkHref={`${Icon}#icon-circle-right`}></use>
              </svg>
            </button>
            {loading ? (
              <p>Loading......</p>
            ) : (
              <div className="book" id="book">
                <div
                  className="paper marginL marginR flipped"
                  style={{
                    zIndex: `${arr.length - 0}`,
                  }}
                >
                  <div className="front">
                    <div id="f1" className="front__content">
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={`http://localhost:8000/${arr[0].page}`}
                        alt="ggg"
                      />
                    </div>
                  </div>
                  <div className="back">
                    <div id="b1" className="back__content">
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={`http://localhost:8000/${arr[0].page}`}
                        alt="ggg"
                      />
                    </div>
                  </div>
                </div>

                {pageghh}
                <div className="paper1" id="p1"></div>
                <div className="paper1" id="p2"></div>
                <div className="paper1" id="p3"></div>
                <div className="paper1" id="p4"></div>
                <div className="paper1" id="p5"></div>
                <div className="paper1" id="p6"></div>
              </div>
            )}

            {/* next--button */}

            <button onClick={goNextPage} id="next-btn" className="forward__btn">
              <svg className="btn__svg">
                <use xlinkHref={`${Icon}#icon-circle-left`}></use>
              </svg>
            </button>
          </div>
          <div className="read__book__audio">
            <audio className="audio" controls>
              {loading ? (
                <p>Loading......</p>
              ) : (
                <source src={`http://localhost:8000/${arr[1].audio}`} />
              )}
            </audio>
          </div>
        </div>
      )}
    </>
  );
};

export default ReadBook;
