import { useState, useEffect } from "react";
import Photo from "./draft/19-stock/Photo.js";
import { FaSearch } from "react-icons/fa";

const mainUrl = "https://api.unsplash.com/photos/";
const searchUrl = "https://api.unsplash.com/search/photos";
const clientID = `?client_id=${process.env.REACT_APP_19_ACCESS_KEY}`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    url = `${mainUrl}${clientID}${urlPage}`;
    console.log("url>>", url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      /* save current data array, get new */
      setPhotos((allCurrentPhotos) => {
        return [...allCurrentPhotos, ...data];
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  const event = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 50
    ) {
      setPage((currentPage) => {
        return currentPage + 1;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", event);
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
