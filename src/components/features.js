import React from "react";
import noback from "../images/first noback.png";
import tableguy from "../images/4th guy.png";

function Features() {
  return (
    <div>
      <h1 className="feature-title">Why Us?</h1>

      <section className="grid-div">
        <article>
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
        <img className="image-1" src={noback} alt=""></img>
      </section>

      <section className="grid-div">
        <img className="image-2" src={tableguy} alt=""></img>
        <article>
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

export default Features;
