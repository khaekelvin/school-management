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
          <h2>
            Lopsem <FontAwesomeIcon className="plane" icon={faBolt} />
          </h2>
          <p>Lopsemreloem</p>
        </section>

        <section className="side-box">
          <h2>
            Lopsem <FontAwesomeIcon className="plane" icon={faHandshake} />
          </h2>
          <p>Lopsemreloem</p>
        </section>

        <section className="side-box">
          <h2>
            Lopsem <FontAwesomeIcon className="plane" icon={faThumbsUp} />
          </h2>
          <p>Lopsemreloem</p>
        </section>
      </div>
    </div>
  );
}

export default About;
