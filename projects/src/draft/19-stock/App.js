// import { useState, useEffect } from "react";
// import Photo from "./draft/19-stock/Photo.js";
// import { FaSearch } from "react-icons/fa";

// const mainUrl = "https://api.unsplash.com/photos/";
// const searchUrl = "https://api.unsplash.com/search/photos";
// const clientID = `?client_id=${process.env.REACT_APP_19_ACCESS_KEY}`;

// function App() {
//   const [loading, setLoading] = useState(false);
//   const [photos, setPhotos] = useState([]);
//   const [page, setPage] = useState(0);
//   const [query, setQuery] = useState("");

//   const fetchImages = async () => {
//     setLoading(true);
//     let url;
//     const urlPage = `&page=${page}`;
//     const urlQuery = `&query=${query}`;
//     url = `${mainUrl}${clientID}${urlPage}`;

//     if (query) {
//       url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
//     } else {
//       url = `${mainUrl}${clientID}${urlPage}`;
//     }

//     console.log("url>>", url);
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       /* save current data array, get new */
//       setPhotos((allCurrentPhotos) => {
//         if (query && page === 1) {
//           return data.results;
//         } else if (query) {
//           return [...allCurrentPhotos, ...data.results];
//         } else {
//           return [...allCurrentPhotos, ...data];
//         }
//       });
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchImages();
//   }, [page]);

//   const event = () => {
//     if (
//       window.innerHeight + window.scrollY >=
//       document.body.scrollHeight - 50
//     ) {
//       setPage((currentPage) => {
//         return currentPage + 1;
//       });
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", event);
//     return () => {
//       window.removeEventListener("scroll", event);
//     };
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setPage(1);
//   };

//   return (
//     <main>
//       <section className="search">
//         <form className="search-form">
//           <input
//             type="text"
//             placeholder="search"
//             className="form-input"
//             value={query}
//             onChange={(e) => {
//               setQuery(e.target.value);
//             }}
//           />
//           <button type="submit" className="submit-btn" onClick={handleSubmit}>
//             <FaSearch />
//           </button>
//         </form>
//       </section>
//       <section className="photos">
//         <div className="photos-center">
//           {photos.map((item) => {
//             return <Photo key={item.id} {...item} />;
//           })}
//         </div>
//         {/* infinite scroll loading title */}
//         {loading && <h2 className="loading">Loading</h2>}
//       </section>
//     </main>
//   );
// }

// export default App;

/* prevent double loading variant */
import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

import Photo from "./draft/19-stock/Photo.js";
const clientID = `?client_id=${process.env.REACT_APP_19_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const mounted = useRef(false);
  const [newImages, setNewImages] = useState(false);
  const fetchImages = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    console.log("url>>", url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
      setNewImages(false);
      setLoading(false);
    } catch (error) {
      setNewImages(false);

      setLoading(false);
    }
  };
  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!newImages) return;
    if (loading) return;
    setPage((oldPage) => oldPage + 1);
  }, [newImages]);

  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setNewImages(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", event);
    return () => window.removeEventListener("scroll", event);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    if (page === 1) {
      fetchImages();
    }
    setPage(1);
  };
  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-input"
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
