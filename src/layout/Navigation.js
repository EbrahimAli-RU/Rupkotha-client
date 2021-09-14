import { NavLink } from "react-router-dom";
import logo from "../assets/img/rupkotha.png";
import Icon from "../assets/img/sprite.svg";
import Dropdown from "../component/Dropdown";

const Navigation = () => {
  return (
    <header className="nav">
      <div className="nav__logo">
        <NavLink to="/home">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="nav__items">
        <NavLink to="/home" activeStyle={{ fill: "rgb(3, 169, 244)" }}>
          <div className="nav__items__icon-wrapper">
            <svg className="nav__items__icon">
              <use xlinkHref={`${Icon}#icon-home`}></use>
            </svg>
          </div>
        </NavLink>
        <NavLink to="/search" activeStyle={{ fill: "rgb(3, 169, 244)" }}>
          <div className="nav__items__icon-wrapper">
            <svg className="nav__items__icon">
              <use xlinkHref={`${Icon}#icon-search`}></use>
            </svg>
          </div>
        </NavLink>
        <NavLink to="/wishlist" activeStyle={{ fill: "rgb(3, 169, 244)" }}>
          <div className="nav__items__icon-wrapper">
            <svg className="nav__items__icon">
              <use xlinkHref={`${Icon}#icon-heart`}></use>
            </svg>
          </div>
        </NavLink>
        <Dropdown />
      </div>
    </header>
  );
};

export default Navigation;
