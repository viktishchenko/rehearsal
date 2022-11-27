import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>NotFound</h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
