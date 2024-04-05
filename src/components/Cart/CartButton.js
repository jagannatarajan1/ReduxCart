import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { cardSlicerActions } from "../UI/cardSlicer";

const CartButton = () => {
  const dispatch = useDispatch();

  const cartButtonHandler = () => {
    dispatch(cardSlicerActions.toggleCardVisibility());
  };
  return (
    <button className={classes.button}>
      <span onClick={cartButtonHandler}>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
