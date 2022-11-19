import { useState } from "react";

const PostRequest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <section>
      <h2 className="text-center">post request</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            className="form-input"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            className="form-input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-block" type="submit">
          login
        </button>
      </form>
    </section>
  );
};

export default PostRequest;
