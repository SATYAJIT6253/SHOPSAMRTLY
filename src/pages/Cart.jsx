import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Cartitem from "../components/Cartitem";
import "./cart.css";
function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalamount, settotalamount] = useState(0);

  useEffect(() => {
    settotalamount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div>
      {cart.length > 0 ? (
        <div className="parent-container">
          <div className="container">
            {cart.map((item, index) => {
              return <Cartitem key={item.id} item={item} itemindex={index} />;
            })}
          </div>
          <div className="Cart-summury">
            <div>
              <h1>Your Cart</h1>
              <h1>SUMMARY</h1>
            </div>
            <div>
              <p>
                <span>Total items : {cart.length}</span>
              </p>
              <p>Total amount : ${totalamount}</p>
              <button className="order-btn">Place Order</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-section">
          <h1>cart empty</h1>
          <NavLink to="/">
            <button className="shop-btn">Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
