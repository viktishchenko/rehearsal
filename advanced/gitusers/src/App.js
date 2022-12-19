import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Login, NotFound, AuthWrapper } from "./pages";
import { GithubContext } from "./context/context";

function App() {
  const { isAuthenticated } = React.useContext(GithubContext);

  return (
    <BrowserRouter>
      <AuthWrapper>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Dashboard /> : <Login />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthWrapper>
    </BrowserRouter>
  );
}

export default App;
