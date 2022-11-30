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
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      /*       console.log(`innerHight, ${window.innerHeight}`);
      console.log(`scrollY, ${window.scrollY}`);
      console.log(`bodyHight, ${document.body.scrollHeight}`); */
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 10
      ) {
        console.log("its time to fetching...>>");
      }
    });

    return () => {
      window.removeEventListener("scroll", event);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("halo");
  };

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input type="text" placeholder="search" className="form-input" />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((item) => {
            return <Photo key={item.id} {...item} />;
          })}
        </div>
        {/* infinite scroll loading title */}
        {loading && <h2 className="loading">Loading</h2>}
      </section>
    </main>
  );
}

export default App;
