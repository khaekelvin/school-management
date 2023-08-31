import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faHandshake,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function AboutUs() {
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
            <Link to="/FeaturesPage">Features</Link>
          </li>
          {/* <li>
            <Link to="/Landing">Dashboard</Link>
          </li>

          <li>
            <Link to="/Cards">Students</Link>
          </li> */}
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
      <div className="about-flex">
        <h1 className="what-is">
          What is <br />
          <span className="flow">
            School<span className="ora">Flow?</span>
          </span>
        </h1>
        <div>
          <section className="in">
            <h3>
              Comprehensive Communication{" "}
              <FontAwesomeIcon className="plane" icon={faBolt} />
            </h3>
            <p className="about-text">
              With integrated communication tools, SchoolFlow ensures that
              information flows smoothly between administrators, teachers,
              students, and parents. Instant notifications, announcements, and
              messaging keep everyone connected and informed.
            </p>
          </section>

          <section className="side-box">
            <h3>
              Effortless Administrative Tasks{" "}
              <FontAwesomeIcon className="plane" icon={faHandshake} />
            </h3>
            <p className="about-text">
              SchoolFlow simplifies complex administrative processes such as
              student enrollment, attendance tracking, scheduling, and report
              generation. This frees up valuable time for educators to focus on
              teaching and students to focus on learning.
            </p>
          </section>

          <section className="side-box">
            <h3>
              Data-Driven Insights{" "}
              <FontAwesomeIcon className="plane" icon={faThumbsUp} />
            </h3>
            <p className="about-text">
              School administrators gain valuable insights through data
              analytics, helping them make informed decisions about curriculum
              enhancements, resource allocation, and strategic planning.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
