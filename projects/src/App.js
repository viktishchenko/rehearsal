import { useState, useEffect } from "react";
import Photo from "./draft/19-stock/Photo.js";
import { FaSearch } from "react-icons/fa";

const mainUrl = "https://api.unsplash.com/photos/";
const searchUrl = "https://api.unsplash.com/search/photos";
const clientID = `?client_id=${process.env.REACT_APP_19_ACCESS_KEY}`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    url = `${mainUrl}${clientID}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("data>>", data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <h2>stock project</h2>
      <Photo />
    </>
  );
}

export default App;
