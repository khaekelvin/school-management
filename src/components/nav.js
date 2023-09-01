import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav>
      <h1 className="logo">
        School
        <span className="flow-blue">
          FLow
          <FontAwesomeIcon className="plane" icon={faPaperPlane} />
        </span>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/FeaturesPage">Features</Link>
        </li>

        <li>
          <Link to="/AboutUs">About</Link>
        </li>
      </ul>

      <Link to="/login">
        <button className="login-btn">
          <p>Login</p>
        </button>
      </Link>
    </nav>
  );
}

export default Nav;
