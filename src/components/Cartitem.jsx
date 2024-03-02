import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlice";
import "./cartitem.css";
function Cartitem({ item, index }) {
  const dispatch = useDispatch();
  const removefromcart = () => {
    dispatch(remove(item.id));
  };
  return (
    <div className="cartitem-container">
      <img className="item-image" src={item.image} alt='bad internet' />
      <div>
        <h1>{item.title}</h1>
        <p>{item.description.split(" ").slice(0, 30).join(" ")+'...'}</p>
        <div className="item-end">
          <p>${item.price}</p>
          <button onClick={removefromcart}>Delet Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
