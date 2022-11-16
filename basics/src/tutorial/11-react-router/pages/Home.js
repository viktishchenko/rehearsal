import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <h2>Home</h2>
      {/* link inside app */}
      <Link to="/products" className="btn">
        products →
      </Link>
      {/* outside link */}
      <a href="http://google.com" target="_blank" rel="noopener noreferrer">
        google
      </a>
    </section>
  );
};

export default Home;
