import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../../utils/axios/axios";
import AuthInput from "../../component/authInput/AuthInput";
import SecondInput from "../../component/authInput/SecondInput";
import Button from "../../component/button/Button";
import Profile from "../../component/profileTitle/Profile";
import Spinner from "../../component/Spinner";
import Modal from "../../component/Modal";
import Navigation from "../../layout/Navigation";
import * as action from "../../redux/action/index";

const EditSingleProfile = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [isCurrentProfileMessage, setIsCurrentProfileMesage] = useState("");

  const dispatch = useDispatch();
  const id = props.location.pathname.split("/")[2];
  const childProfile = useSelector((state) => state.profile);

  useEffect(() => {
    if (!childProfile.check) {
      dispatch(action.fetchChildProfile(id));
      dispatch(action.redirectLinkHandler(props.location.pathname));
      dispatch(action.isSubmittedHandler());
    }
  }, [childProfile.child.isSumitted]);

  const dumyHandler = () => {};

  const inputHandler = (e) => {
    const { name, value } = e.target;
    dispatch(action.userInputHandler(name, value));
  };

  const showModalHandler = () => {
    const profile = JSON.parse(localStorage.getItem("currentProfile"));
    if (JSON.parse(localStorage.getItem("currentProfile"))._id === id) {
      setIsCurrentProfileMesage(`Can't delete current profile:(`);
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const deleteprofileHandler = () => {
    axios
      .delete(`/child/${id}`)
      .then((res) => {
        props.history.push("/profile/edit");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const updateProfileHandler = () => {
    setLoading(true);
    axios
      .patch(`/child/${childProfile.child._id}`, {
        name: childProfile.child.name,
        photo: childProfile.child.photo,
        age: childProfile.child.age,
        language: childProfile.child.language,
        interest: childProfile.child.interest,
      })
      .then((res) => {
        props.history.push("/profile/edit");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        // setError(err.response.data)
        setLoading(false);
      });
  };

  return (
    <>
      {/* <Navigation /> */}
      <Modal
        show={showModal}
        id={id}
        deleteHandler={deleteprofileHandler}
        closeHandler={closeModal}
      >
        <div style={{ backgroundColor: "white" }}>
          <p className="popup__question">Do you Want to Delete?</p>
          <div className="popup__button">
            <button onClick={closeModal} className="popup__btn">
              CANCEL
            </button>
            <button
              onClick={deleteprofileHandler}
              style={{ color: "red" }}
              className="popup__btn"
            >
              DELETE
            </button>
          </div>
        </div>
      </Modal>
      {childProfile.loading || loading ? (
        <Spinner show />
      ) : (
        <div className="create__profile__wrapper">
          <div className="create__profile__content">
            <h2>Edit Profile</h2>
            <Profile
              link="/profile/new"
              profile={childProfile.child.photo}
              handler={dumyHandler}
              isDisplay={false}
            />
            <AuthInput
              placeholder="Name"
              type="text"
              valueof={childProfile.child.name}
              handler={inputHandler}
              name="name"
            />
            <AuthInput
              placeholder="Age"
              type="number"
              valueof={childProfile.child.age}
              handler={inputHandler}
              name="age"
            />
            <AuthInput
              placeholder="Language"
              type="text"
              valueof={childProfile.child.language}
              handler={inputHandler}
              name="language"
            />
            <SecondInput
              link={`/profile/interest?n=false`}
              numberOfInterest={childProfile.child.interest.length}
            />
            <div style={{ height: "2rem", marginTop: "1rem" }}>
              <p style={{ fontSize: "1.2rem", color: "red" }}>
                {isCurrentProfileMessage}
              </p>
            </div>
            <button
              style={{
                border: "none",
                outline: "none",
                color: "red",
                backgroundColor: "transparent",
                fontSize: "2rem",
                paddingTop: ".2rem",
                marginBottom: "-1.8rem",
                fontWeight: "bolder",
              }}
              onClick={showModalHandler}
            >
              Delete
            </button>
            <Button text="Continue" handler={updateProfileHandler} />
            <Link className="cancel__button display" to="/profile/edit">
              Cancel
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(EditSingleProfile);
