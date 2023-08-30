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
        <li>Features</li>
        <li>Contact</li>
      </ul>
      {/* <link to="/">
        <button>Log In</button>
      </link> */}

      <button>Log In</button>
    </nav>
  );
}

export default Nav;
