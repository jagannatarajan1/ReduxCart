import { useDispatch, useSelector } from "react-redux";
import classes from "./CartItem.module.css";
import React from "react";
import { addToCartReducerActions } from "./addToCartReducer";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.addToCart.myCart);
  let totalAmount = 0;
  cartItems.forEach((element) => {
    totalAmount += element.quantity * element.price;
  });
  console.log(totalAmount + "44444444444444444444");
  console.log(cartItems);
  const removeHandler = (item) => {
    dispatch(addToCartReducerActions.removecart(item));
  };

  return (
    <React.Fragment>
      <li className={classes.item}>
        {cartItems.map((item, index) => (
          <div key={index}>
            <header>
              <h3>{item.title}</h3>
              <div className={classes.price}>
                ${item.total.toFixed(2)}{" "}
                <span className={classes.itemprice}>
                  (${item.price.toFixed(2)}/item)
                </span>
              </div>
            </header>
            <div className={classes.details}>
              <div className={classes.quantity}>
                x <span>{item.quantity}</span>
              </div>
              <div className={classes.actions}>
                <button onClick={() => removeHandler(item)}>-</button>
                <button>+</button>
              </div>
            </div>
          </div>
        ))}
      </li>
    </React.Fragment>
  );
};

export default CartItem;
