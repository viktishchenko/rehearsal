import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  SingleProduct,
  Card,
  Checkout,
  Error,
  About,
  Products,
  Private,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/card" element={<Card />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
