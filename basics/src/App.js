/* imprrd */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./tutorial/11-react-router/pages/Home";
import About from "./tutorial/11-react-router/pages/About";
import Dashboard from "./tutorial/11-react-router/pages/Dashboard";
import Products from "./tutorial/11-react-router/pages/Products";
import SingleProduct from "./tutorial/11-react-router/pages/SingleProduct";
import Error from "./tutorial/11-react-router/pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="singleproduct" element={<SingleProduct />} />
          <Route path="stats" element={<div>stats...</div>} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
