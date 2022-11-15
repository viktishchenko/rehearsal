/* imprrd */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./tutorial/11-react-router/pages/Home";
import NotFound from "./tutorial/11-react-router/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/testing"
          element={
            <div>
              <h3>testing page</h3>
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
