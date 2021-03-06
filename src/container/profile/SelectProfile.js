import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import axios from "../../utils/axios/axios";
import Profile from "../../component/profileTitle/Profile";
import SearchBox from "../../component/searchBox/SearchBox";
import Spinner from "../../component/Spinner";
import Navigation from "../../layout/Navigation";
import * as action from "../../redux/action/index";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

const SelectProfile = (props) => {
  const [childs, setChilds] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filterChild, setFilterChild] = useState([]);
  const [flag, setFlag] = useState(true);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    axios
      .get(`/user/${jwt_decode(token).id}`)
      .then((res) => {
        setChilds(res.data.users.children);
      })
      .catch((err) => {
        console.log(err.response);
      });
    setFlag(false);
  }, [flag]);
  const searchHandler = (e) => {
    setSearchItem(e.target.value);
    const filter = childs.filter((el) =>
      el.name.toLowerCase().startsWith(`${e.target.value.toLowerCase()}`)
    );
    setFilterChild(filter);
  };

  const selectHandler = (id) => {
    const matchedProfile = childs.find((el) => el._id === id);
    dispatch(action.saveChildHandler(matchedProfile));
    localStorage.setItem("currentProfile", JSON.stringify(matchedProfile));
    props.history.push("/home");
  };
  return (
    <>
      <Navigation />
      {childs.length === 0 ? (
        <Spinner show />
      ) : (
        <div className="select__profile__container width60">
          <h1 className="select__profile__title">Who is Watching?</h1>
          <div className="select__profile__btn-search">
            <Link to="/profile/new" style={{ textDecoration: "none" }}>
              <div className="add_profile_button">
                <AddCircleOutlineOutlinedIcon
                  style={{ fontSize: "2rem", fontWeight: "500" }}
                />{" "}
                <span>Add Profile</span>
              </div>
            </Link>
            <SearchBox handler={searchHandler} value={searchItem} />
          </div>

          <div className="select__profile__wrapper width80">
            {searchItem.length === 0 ? (
              <>
                {childs.map((child) => (
                  <Profile
                    handler={selectHandler}
                    key={child._id}
                    id={child._id}
                    profile={child.photo}
                    name={child.name}
                    isDisplay={false}
                  />
                ))}
              </>
            ) : (
              <>
                {filterChild.map((child) => (
                  <Profile
                    handler={selectHandler}
                    key={child._id}
                    id={child._id}
                    profile={child.photo}
                    name={child.name}
                    isDisplay={false}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(SelectProfile);
