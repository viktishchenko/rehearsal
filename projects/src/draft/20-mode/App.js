/* imrse */
import { useState, useEffect } from "react";
import data from "./draft/20-mode/data";
import Article from "./draft/20-mode/Article.js";

/* rfce */

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme);

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main>
      <nav className="nav-center">
        <h1>overreacted</h1>
        <button className="btn" onClick={toggleTheme}>
          toggle
        </button>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
