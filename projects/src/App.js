import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./draft/21-movie/Home";
import SingleMovie from "./draft/21-movie/SingleMovie";
import NotFound from "./draft/21-movie/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
