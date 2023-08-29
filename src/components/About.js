import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faHandshake,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="about-grid">
      <h1 className="what">
        What is <br />
        <span className="flow">SchoolFlow?</span>
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
            Comprehensive Communication{" "}
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
            School administrators gain valuable insights through data analytics,
            helping them make informed decisions about curriculum enhancements,
            resource allocation, and strategic planning.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
