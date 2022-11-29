import { useState, useEffect } from "react";
import { useFetch } from "./draft/18-pagination/useFetch";
import Follower from "./draft/18-pagination/Flower";

function App() {
  const { loading, data } = useFetch();

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination project"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {data.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
