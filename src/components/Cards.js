import React from "react";
import pfp from "../images/new2pfp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Landing">Dashboard</Link>
          </li>
        </ul>
        <h1 className="logo">
          School
          <span className="flow-blue">
            FLow
            <FontAwesomeIcon className="plane" icon={faPaperPlane} />
          </span>
        </h1>
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
            <h1>
              Name: <span className="pro-p">Kelvin Duobu </span>
            </h1>
            <h1>
              Age: <span className="pro-p">20</span>
            </h1>
            <h1>
              Gender: <span className="pro-p">Male</span>
            </h1>
            <h1>
              Date of Birth: <span className="pro-p">18/03/2003</span>
            </h1>
            <h1>
              Course: <span className="pro-p">Science</span>
            </h1>
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
            <h1>
              Name: <span className="pro-p">Freedom Mensah</span>
            </h1>
            <h1>
              Age: <span className="pro-p">23</span>
            </h1>
            <h1>
              Gender: <span className="pro-p">Male</span>
            </h1>
            <h1>
              Date of Birth: <span className="pro-p">10/04/2000</span>
            </h1>
            <h1>
              Course: <span className="pro-p">English</span>
            </h1>
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
            <h1>
              Name: <span className="pro-p">Angel brown</span>
            </h1>
            <h1>
              Age: <span className="pro-p">21</span>
            </h1>
            <h1>
              Gender: <span className="pro-p">Female</span>
            </h1>
            <h1>
              Date of Birth: <span className="pro-p">25/05/2002</span>
            </h1>
            <h1>
              Course: <span className="pro-p">History</span>
            </h1>
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
            <h1>
              Name: <span className="pro-p">Fatima Wayo</span>
            </h1>
            <h1>
              Age: <span className="pro-p">30</span>
            </h1>
            <h1>
              Gender: <span className="pro-p">Female</span>
            </h1>
            <h1>
              Date of Birth: <span className="pro-p">10/04/1993</span>
            </h1>
            <h1>
              Course: <span className="pro-p">English</span>
            </h1>
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
            <h1>
              Name: <span className="pro-p">Daniel Sereboo</span>
            </h1>
            <h1>
              Age: <span className="pro-p">33</span>
            </h1>
            <h1>
              Gender: <span className="pro-p">Male</span>
            </h1>
            <h1>
              Date of Birth: <span className="pro-p">24/07/1990</span>
            </h1>
            <h1>
              Course: <span className="pro-p">Science</span>
            </h1>
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
            <h1>
              Name: <span className="pro-p">David King</span>
            </h1>
            <h1>
              Age: <span className="pro-p">21</span>
            </h1>
            <h1>
              Gender: <span className="pro-p">Male</span>
            </h1>
            <h1>
              Date of Birth: <span className="pro-p">21/05/2001</span>
            </h1>
            <h1>
              Course: <span className="pro-p">Maths</span>
            </h1>
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
