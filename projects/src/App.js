import { useState, useEffect } from "react";
import Photo from "./draft/19-stock/Photo.js";
import { FaSearch } from "react-icons/fa";

// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

const mainUrl = "https://api.unsplash.com/photos/";
const searchUrl = "https://api.unsplash.com/search/photos";

function App() {
  return (
    <>
      <h2>stock project</h2>
      <Photo />
    </>
  );
}

export default App;
