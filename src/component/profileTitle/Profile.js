import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../../assets/img/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

const Profile = (props) => {
  return (
    <div className="profile__wrapper">
      <div className="profile__user" onClick={() => props.handler(props.id)}>
        <div
          className={
            props.width
              ? "profile__user__photo__container width15"
              : "profile__user__photo__container width8"
          }
        >
          <img
            className="profile__user-photo"
            src={
              props.profile.length === 0
                ? `${profileImg}`
                : `http://localhost:8000/${props.profile}`
            }
            alt="profile"
          />
          {props.isDisplay ? (
            <Link to={props.link}>
              <div className="profile__user__edit-button__div">
                <FontAwesomeIcon icon={faUserEdit} color="black" />
              </div>
            </Link>
          ) : null}
        </div>
        <p className="select__profile__user-name">{props.name}</p>
      </div>
    </div>
  );
};

export default Profile;

//props.name.length > 8 ? `${props.name.substr(0, 8)}...`: `${props.name}`
