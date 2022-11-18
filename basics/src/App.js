/* imprrd */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./tutorial/11-react-router/pages/Home";
import About from "./tutorial/11-react-router/pages/About";
import Dashboard from "./tutorial/11-react-router/pages/Dashboard";
import Products from "./tutorial/11-react-router/pages/Products";
import SingleProduct from "./tutorial/11-react-router/pages/SingleProduct";
import Error from "./tutorial/11-react-router/pages/Error";
import Login from "./tutorial/11-react-router/pages/Login";
import SharedLayout from "./tutorial/11-react-router/pages/SharedLayout";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
