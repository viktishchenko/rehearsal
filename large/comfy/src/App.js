import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return <h4>comfy starter</h4>;
  /*   return (
<BrowserRouter>
 <Routes>
<Route path='/' element={<Home />} />
<Route path='/add' element={<Add />} />
<Route path='/update/:id' element={<Update />} />
<Route path='*' element={<NotFound />} />
</Routes>
 </BrowserRouter>
  ); */
}

export default App;
