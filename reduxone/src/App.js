import { Landing, Error, Dashboard, Register } from "./pages";
/* imprrd */
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
