import React from "react";
import Icon from "../../assets/img/sprite.svg";

const SearchBox = (props) => {
  return (
    <div className="search__box__wrapper">
      <div className="search__button_div">
        <svg className="search__button">
          <use xlinkHref={`${Icon}#icon-search`}></use>
        </svg>
      </div>
      <input
        className="search__box"
        onKeyDown={props.handleEnterEvent}
        value={props.value}
        onChange={props.handler}
        type="search"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
