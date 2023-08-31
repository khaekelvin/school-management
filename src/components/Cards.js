import React from "react";
import pfp from "../images/new2pfp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Cards() {
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
          <li>
            <Link to="/AboutUs">About</Link>
          </li>
        </ul>

        <Link to="/NewStudent">
          <button className="stu-btn">
            <p>Add Student</p>
          </button>
        </Link>
      </nav>
      <div className="card-container">
        <section className="cards">
          <div className="img-cen">
            <img className="card-pfp" src={pfp} alt=""></img>
          </div>

          <article className="card-info">
            <h1>Name:</h1>
            <h1>Age:</h1>
            <h1>Gender:</h1>
            <h1>Date of Birth:</h1>
            <h1>Coarse:</h1>
            <Link to="/Profile">
              <button className="profile-btn">Profile</button>
            </Link>
          </article>
        </section>

        <section className="cards">
          <div className="img-cen">
            <img className="card-pfp" src={pfp} alt=""></img>
          </div>
          <article className="card-info">
            <h1>Name:</h1>
            <h1>Age:</h1>
            <h1>Gender:</h1>
            <h1>Date of Birth:</h1>
            <h1>Coarse:</h1>
            <Link to="/Profile">
              <button className="profile-btn">Profile</button>
            </Link>
          </article>
        </section>

        <section className="cards">
          <div className="img-cen">
            <img className="card-pfp" src={pfp} alt=""></img>
          </div>
          <article className="card-info">
            <h1>Name:</h1>
            <h1>Age:</h1>
            <h1>Gender:</h1>
            <h1>Date of Birth:</h1>
            <h1>Coarse:</h1>
            <Link to="/Profile">
              <button className="profile-btn">Profile</button>
            </Link>
          </article>
        </section>

        <section className="cards">
          <div className="img-cen">
            <img className="card-pfp" src={pfp} alt=""></img>
          </div>
          <article className="card-info">
            <h1>Name:</h1>
            <h1>Age:</h1>
            <h1>Gender:</h1>
            <h1>Date of Birth:</h1>
            <h1>Coarse:</h1>
            <Link to="/Profile">
              <button className="profile-btn">Profile</button>
            </Link>
          </article>
        </section>

        <section className="cards">
          <div className="img-cen">
            <img className="card-pfp" src={pfp} alt=""></img>
          </div>
          <article className="card-info">
            <h1>Name:</h1>
            <h1>Age:</h1>
            <h1>Gender:</h1>
            <h1>Date of Birth:</h1>
            <h1>Coarse:</h1>
            <Link to="/Profile">
              <button className="profile-btn">Profile</button>
            </Link>
          </article>
        </section>

        <section className="cards">
          <div className="img-cen">
            <img className="card-pfp" src={pfp} alt=""></img>
          </div>
          <article className="card-info">
            <h1>Name:</h1>
            <h1>Age:</h1>
            <h1>Gender:</h1>
            <h1>Date of Birth:</h1>
            <h1>Coarse:</h1>
            <Link to="/Profile">
              <button className="profile-btn">Profile</button>
            </Link>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Cards;
