import { BrowserRouter, Routes, Route } from "react-router-dom";
/* pages */
import Home from "./draft/15-cockt/page/Home";
import About from "./draft/15-cockt/page/About";
import NotFound from "./draft/15-cockt/page/NotFound";
import SingleCocktail from "./draft/15-cockt/page/SingleCocktail";
/* components */
import Navbar from "./draft/15-cockt/components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
