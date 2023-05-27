import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";
import ProductDetails from "./components/products/ProductDetails";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
