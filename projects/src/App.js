/* imrse */
import { useState, useEffect } from "react";
import data from "./draft/20-mode/data";
import Article from "./draft/20-mode/Article.js";

/* rfce */

function App() {
  return (
    <main>
      <nav className="nav-center">
        <h1>overreacted</h1>
        <button className="btn">toggle</button>
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
