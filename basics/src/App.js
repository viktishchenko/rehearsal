import React from "react";
import Second from "./tutorial/12-useMemoCallback";

function App() {
  return (
    <div className="container">
      <h2>basics react</h2>
      <Second />
    </div>
  );
}

export default App;

/* imprrd */
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./tutorial/11-react-router/pages/Home";
// import About from "./tutorial/11-react-router/pages/About";
// import Dashboard from "./tutorial/11-react-router/pages/Dashboard";
// import Products from "./tutorial/11-react-router/pages/Products";
// import SingleProduct from "./tutorial/11-react-router/pages/SingleProduct";
// import Error from "./tutorial/11-react-router/pages/Error";
// import Login from "./tutorial/11-react-router/pages/Login";
// import SharedLayout from "./tutorial/11-react-router/pages/SharedLayout";
// import { useState } from "react";
// import ProtectedRoute from "./tutorial/11-react-router/pages/ProtectedRoute";
// import SharedProductLayout from "./tutorial/11-react-router/pages/SharedProductLayout";

// function App() {
//   const [user, setUser] = useState(null);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<SharedLayout />}>
//           <Route index element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/products" element={<SharedProductLayout />}>
//             <Route index element={<Products />} />
//             <Route path=":productId" element={<SingleProduct />} />
//           </Route>
//           <Route path="/login" element={<Login setUser={setUser} />} />
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute user={user}>
//                 <Dashboard user={user} />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="*" element={<Error />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
