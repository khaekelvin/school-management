import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav>
      <h1 className="logo">
        School
        <span>
          FLow
          <FontAwesomeIcon className="plane" icon={faPaperPlane} />
        </span>
      </h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          <Link to="/Cards">School</Link>
        </li>
        <li>
          <Link to="/Landing">Dashboard</Link>
        </li>
      </ul>

      <Link to="/login">
        <button>
          <p>Login</p>
        </button>
      </Link>
    </nav>
  );
}

export default Nav;
