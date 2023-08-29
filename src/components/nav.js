import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav>
      <h1 className="logo">
        <FontAwesomeIcon icon={faCoffee} />
        School<span>FLow</span>
      </h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Features</li>
        <li>Contact</li>
      </ul>
      <button>Log In</button>
    </nav>
  );
}

export default Nav;
