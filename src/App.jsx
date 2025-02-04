import Navbar from "./components/Navbar/Navbar";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import "./App.css";
import products from "./data/Products";
import Toast from "./components/Toast/Toast";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import productsContext from "./Contexts/Productscontext";

function App() {
  const [allProducts, setAllProducts] = useState(products);
  const [userCart, setUserCart] = useState([]);
  const [isShowToast, setIsShowToast] = useState(false);
  const [isShowCart, setIsShowCart] = useState(false);

  return (
    <productsContext.Provider
      value={{
        allProducts,
        userCart,
        setUserCart,
        isShowToast,
        setIsShowToast,
        isShowCart,
        setIsShowCart,
      }}
    >
      <Navbar />
      <main className="pb-5">
        <div className="container">
          <h1 className="text.center main-title">All Products</h1>
          <ProductsSection />
        </div>
      </main>
      <Toast />
      <Cart />
    </productsContext.Provider>
  );
}

export default App;
