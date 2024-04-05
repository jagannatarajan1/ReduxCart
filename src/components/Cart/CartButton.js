import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cardSlicerActions } from "../UI/cardSlicer";

const CartButton = () => {
  const dispatch = useDispatch();
  const countselector = useSelector((state) => state.addToCart.myCart);

  const cartButtonHandler = () => {
    dispatch(cardSlicerActions.toggleCardVisibility());
  };
  return (
    <button className={classes.button}>
      <span onClick={cartButtonHandler}>My Cart</span>
      <span className={classes.badge}>{countselector.length}</span>
    </button>
  );
};

export default CartButton;
