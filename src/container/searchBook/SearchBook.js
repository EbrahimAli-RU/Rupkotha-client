import { useState, useEffect, useLayoutEffect } from "react";
import Profile from "../../component/profileTitle/Profile";
import SearchBox from "../../component/searchBox/SearchBox";
import SearchingCard from "../../component/searchingCard/SearchingCard";
import Navigation from "../../layout/Navigation";
import axios from "../../utils/axios/axios";

const SearchBook = () => {
  const [search, setSearch] = useState([]);
  const [flag, setFlag] = useState(false);
  const [recentSearchTopic, setRecentSearchTopic] = useState([]);
  const [searchBy, setSearchBy] = useState("");

  useLayoutEffect(() => {
    let recentSea = localStorage.getItem("recentSearch");
    if (recentSea === null) localStorage.setItem("recentSearch", []);
    else setRecentSearchTopic(JSON.parse(recentSea));
  }, []);
  useEffect(() => {
    axios
      .get("/searching")
      .then((res) => {
        console.log(res.data.data);
        setSearch(res.data.data.search);
        setFlag(true);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const searchHandler = (e) => {
    setSearchBy(e.target.value);
  };

  const handleEnterEvent = (e) => {
    if (e.key === "Enter" && recentSearchTopic[0] !== searchBy) {
      const topic = [...recentSearchTopic];
      topic.unshift(searchBy);
      if (topic.length > 12) topic.pop();
      setRecentSearchTopic(topic);
      localStorage.setItem("recentSearch", JSON.stringify(topic));
    }
  };
  return (
    <>
      <Navigation />
      {flag ? (
        <>
          <div className="search__book__wrapper">
            <div className="search__book__content">
              <div style={{ marginLeft: "20%", paddingTop: "6rem" }}>
                <SearchBox
                  value={searchBy}
                  handler={searchHandler}
                  handleEnterEvent={handleEnterEvent}
                />
              </div>
              {/* {recentSearchTopic.length !== 0 ? (
                <div className="search__book__recent-searchs">
                  <h2>Recent Searches</h2>
                  <div className="search__book__title__wrapper">
                    {recentSearchTopic.map((el) => (
                      <p key={el} className="search__book__recent-search-title">
                        {el}
                      </p>
                    ))}
                  </div>
                </div>
              ) : null} */}
              <SearchingCard />
              <SearchingCard />
              <SearchingCard />
              <SearchingCard />

              <div className="search__book__recent-searchs">
                <h2>Popular Searches</h2>
                <div className="search__book__title__wrapper">
                  <p className="search__book__recent-search-title">Summer</p>
                  <p className="search__book__recent-search-title">
                    Kid's Math
                  </p>
                  <p className="search__book__recent-search-title">Winter</p>
                </div>
              </div>
              <div className="search__book__recent-searchs">
                {search.map((el) => (
                  <div key={el._id}>
                    <h2>{el.title}</h2>
                    <div className="search__book__title__wrapper">
                      {el.search.map((topic) => (
                        <Profile
                          key={topic.photo}
                          profile={topic.photo}
                          width={true}
                          name={topic.topic_title}
                          isDisplay={false}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SearchBook;
