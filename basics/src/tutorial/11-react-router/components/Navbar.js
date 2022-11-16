import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/products">products</Link>
    </nav>
  );
};

export default Navbar;
