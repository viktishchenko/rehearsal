import { useState, useEffect } from "react";
import { useFetch } from "./draft/18-pagination/useFetch";
import Follower from "./draft/18-pagination/Follower";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const handlePage = (idx) => {
    setPage(idx);
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination project"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            {data.map((item, idx) => {
              return (
                <button
                  key={idx}
                  className={`page-btn ${idx === page ? "active-btn" : null}`}
                  onClick={() => {
                    handlePage(idx);
                  }}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
