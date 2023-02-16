import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./Components/Navigation";
import Footer from "./pages/Footer";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from "./pages/CartContext";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState({});
  //fetch cart from local storage

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    setCart(JSON.parse(cart));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />}>
              {" "}
            </Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" exact element={<ProductsPage />}></Route>
            <Route
              path="/products/:_id"
              exact
              element={<SingleProduct />}
            ></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
          <Footer />
        </CartContext.Provider>
      </Router>
    </>
  );
}

export default App;
