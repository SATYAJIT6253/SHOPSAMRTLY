import React from "react";
import "./customerreview.css";
function Customerreview({ image, review, id, name, username }) {
  return (
    <div className="review-card">
      <div className="review-card1">
        <img src={image} alt="" />
        <div>
          <h3 className="name">{name}</h3>
          <p className="username">{username}</p>
        </div>
      </div>

      <div className="review-card2">
        <p>{review}</p>
      </div>
    </div>
  );
}

export default Customerreview;
