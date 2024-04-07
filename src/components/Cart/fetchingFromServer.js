import { addToCartReducerActions } from "./addToCartReducer";
export const fetchData = () => {
  return async (dispatch) => {
    const fetchFunction = async () => {
      const response = await fetch(
        "https://expensetracker-c084c-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Error while fetching");
      }
      console.log("fetching Successfully");
      const data = await response.json();
      console.log(data);
      return data;
    };
    try {
      const cartData = await fetchFunction();
      dispatch(addToCartReducerActions.fetchaddToCart(cartData));
    } catch (error) {
      console.log(error + "Error while fetching");
    }
  };
};
