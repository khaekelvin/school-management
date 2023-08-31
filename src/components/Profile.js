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
        <img className="" src={pro} alt=""></img>

        <section className="side-pro">
          <article className="profile-cred">
            <h1>Name:</h1>
            <h1>Age:</h1>
            <h1>Gender:</h1>
            <h1>Date of Birth:</h1>
            <h1>Coarse:</h1>
          </article>
        </section>
      </div>

      <section>
        <article className="">
          <h1>Name:</h1>
          <hr />
          <h1>Age:</h1>
          <hr />
          <h1>Gender:</h1>
          <hr />
          <h1>Date of Birth:</h1>
          <hr />
          <h1>Coarse:</h1>
        </article>
      </section>
    </div>
  );
}

export default Profile;
