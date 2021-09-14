import React from "react";
import Photo from "../../assets/img/17.png";
const SearchingCard = () => {
  return (
    <div className="searching_card_container">
      <div className="searching_card_photo">
        <img src={Photo} alt="card photo" />
      </div>
      <div style={{ padding: "1.2rem" }}>
        <p
          style={{ fontSize: "1.7rem", paddingBottom: "2rem", color: "black" }}
        >
          আমাদের আছে যত বিড়াল
        </p>
        <div className="searching_card_detail">
          <div>
            <p>Age</p>
            <p>Level</p>
            <p>Page</p>
          </div>
          <div>
            <p>2-8</p>
            <p>All</p>
            <p>26</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchingCard;
