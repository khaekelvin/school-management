import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import pro from "../images/new2pfp.png";

function Profile() {
  return (
    <div>
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
            <Link to="/Landing">Dashboard</Link>
          </li>

          <li>
            <Link to="/Cards">Students</Link>
          </li>
        </ul>
      </nav>
      <div className="pro-div">
        <img className="pro-pic" src={pro} alt=""></img>

        <section className="side-pro">
          <article className="pro-all">
            <h1 className="pro-line">Name:</h1>
            <hr />
            <h1 className="pro-line">Age:</h1>
            <hr />
            <h1 className="pro-line">Gender:</h1>
            <hr />
            <h1 className="pro-line">Date of Birth:</h1>
            <hr />
            <h1 className="pro-line">Coarse:</h1>
            <hr />
          </article>
        </section>
      </div>
    </div>
  );
}

export default Profile;
