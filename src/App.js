import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const cartselector = useSelector((state) => state.cart.cardVisibility);
  console.log(cartselector);
  return (
    <Layout>
      {cartselector && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
