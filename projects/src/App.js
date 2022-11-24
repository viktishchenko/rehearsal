/* imrs */
import { useState } from "react";
import Navbar from "./draft/11-navbar/Navbar";
import logo from "./draft/11-navbar/logo.svg";
import { FaBars, FaTwitter } from "react-icons/fa";

/* rfce */

function App() {
  return (
    <nav className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="nav-toggle">
          <FaBars />
        </button>
      </div>
      <div className="links-container show-container">
        <ul className="links">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">products</a>
          </li>
        </ul>
      </div>
      <ul className="social-icons">
        <li>
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
        </li>
      </ul>
      {/* <Navbar /> */}
    </nav>
  );
}

export default App;
