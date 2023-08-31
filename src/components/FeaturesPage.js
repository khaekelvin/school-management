import React from "react";
import noback from "../images/first noback.png";
import tableguy from "../images/4th guy.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function FeaturesPage() {
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
      <h1 className="feature-title">Why Us?</h1>

      <section className="grid-div">
        <article className="fea-art">
          <h1 className="first-ti">Student Information Management</h1>
          <p className="fea">
            The Student Information Management feature of our school management
            system ensures that all student-related data is centralized,
            organized, and easily accessible to authorized users.
            <br />
            <br />
            This feature serves as the foundation for various administrative and
            academic processes, enabling streamlined operations and enhanced
            communication.
          </p>
        </article>
        <img className="image-1 imgg" src={noback} alt=""></img>
      </section>

      <section className="grid-div">
        <img className="image-2 imgg" src={tableguy} alt=""></img>
        <article className="fea-art">
          <h1 className="first-ti">Grade and Progress Tracking</h1>
          <p className="fea">
            The Grade and Progress Tracking feature in your school management
            system empowers educators and administrators to manage grading,
            track student progress, and provide valuable insights into academic
            achievements.
            <br />
            <br />
            This feature goes beyond mere grade entry, providing educators and
            administrators with the tools needed to gain deep insights into
            student progress and tailor their support accordingly.
          </p>
        </article>
      </section>
    </div>
  );
}

export default FeaturesPage;
