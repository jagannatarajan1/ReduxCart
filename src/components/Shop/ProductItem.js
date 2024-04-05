import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCartReducerActions } from "../Cart/addToCartReducer";
import { useEffect } from "react";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  // Assuming your state structure is { addToCart: { cartItem: [...] } }
  const cartItems = useSelector((state) => state.addToCart.cartItem);
  // const cartselector-useselector(state=>state.addToCart.cartItem)
  const AddtoCartButtonHandler = (item) => {
    dispatch(addToCartReducerActions.addToCart(item));
  };

  return (
    <li className={classes.item}>
      {cartItems.map((item, index) => (
        <Card key={index}>
          <header>
            <h3>{item.title}</h3>
            <div className={classes.price}>${item.price.toFixed(2)}</div>
          </header>
          <p>{item.description}</p>
          <div className={classes.actions}>
            <button onClick={() => AddtoCartButtonHandler(item)}>
              Add to Cart
            </button>
          </div>
        </Card>
      ))}
    </li>
  );
};

export default ProductItem;
