import React from "react";
import noback from "../images/first noback.png";

function Features() {
  return (
    <div>
      <h1 className="feature-title">Why Us</h1>

      <section className="grid-div">
        <article>
          <h1>Student Information Management</h1>
          <p>
            The Student Information Management feature of our school management
            system ensures that all student-related data is centralized,
            organized, and easily accessible to authorized users
          </p>
        </article>
        <img className="image-1" src={noback}></img>
      </section>
    </div>
  );
}

export default Features;
