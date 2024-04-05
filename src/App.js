import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";

function App() {
  const cartselector = useSelector((state) => state.cart.cardVisibility);
  console.log(cartselector);
  const cartItems = useSelector((state) => state.addToCart.myCart);
  useEffect(() => {
    fetch(
      "https://expensetracker-c084c-default-rtdb.firebaseio.com/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cartItems),
      }
    ).catch((error) => {
      alert(error);
    });
  }, [cartItems]);
  return (
    <Layout>
      {cartselector && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
