import { useSelector, useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { fetchData } from "./components/Cart/fetchingFromServer";

function App() {
  const dispatch = useDispatch();
  const cartselector = useSelector((state) => state.cart.cardVisibility);
  console.log(cartselector);
  const cartItems = useSelector((state) => state.addToCart.myCart);
  console.log(cartItems);
  if (cartItems.length >= 1) {
    console.log("true");
  } else {
    console.log("false");
  }
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  useEffect(() => {
    if (cartItems) {
      fetch(
        "https://expensetracker-c084c-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartItems),
        }
      ).catch((error) => {
        alert(error);
      });
    }
  }, [cartItems]);
  return (
    <Layout>
      {cartselector && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
