import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, add } from "../redux/slices/cartSlice";
import "./product.css";
function Product({ Item }) {
  const { cart } = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const removefromcart = () => {
    dispatch(remove(Item.id));
  };
  const addtocart = () => {
    dispatch(add(Item));
  };
  return (
    <div className="single-product">
      <div className="shooping-desc">
        <h3 className="heading">{Item.title.split(" ").slice(0, 3).join(" ") + "...."}</h3>
        <p >{Item.description.split(" ").slice(0, 8).join(" ") + "...."}</p>
        <img className="shopping-image" src={`${Item.image}`} alt="" />
      </div>

      <div className="shopping-desc2">
        <p className="shopping-price">${Item.price}</p>
        <div>
          {cart.some((p) => p.id === Item.id) ? (
            <button className="shopping-btn" onClick={removefromcart}>
              Remove Item
            </button>
          ) : (
            <button className="shopping-btn" onClick={addtocart}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
