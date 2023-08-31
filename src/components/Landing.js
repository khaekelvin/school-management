import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faHouse,
  // faPaperPlane,
  faGraduationCap,
  faChalkboardUser,
  faCheckToSlot,
  // faBars,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "./nav";

function Landing() {
  return (
    <main>
      <Nav />
      <body className="main-body">
        <section className="box-info">
          <h1 className="logo">
            School
            <span className="flow-blue">FLow</span>
          </h1>
          <div className="box-flex">
            <div className="boxes">
              <div className="icon-box">
                <FontAwesomeIcon className="home-icon" icon={faGraduationCap} />
              </div>
              <p className="box-text">
                {" "}
                Number of Students
                <br /> <h1>1607</h1>
              </p>
            </div>

            <div class="boxes">
              <div className="icon-box">
                <FontAwesomeIcon
                  className="home-icon"
                  icon={faChalkboardUser}
                />
              </div>
              <p className="box-text">
                Number of Teachers <br />
                <h1>503</h1>
              </p>
            </div>

            <div class="boxes">
              <div className="icon-box">
                <FontAwesomeIcon className="home-icon" icon={faCheckToSlot} />
              </div>
              <p className="box-text">
                Number of Slots Available
                <br /> <h1>764</h1>
              </p>
            </div>
          </div>
        </section>

        <div className="analytics">
          <h1 className="coarse-title">Coarses</h1>
          <section className="coarse-count">
            <span className="coarse-box">
              <h3 className="header">English</h3>
              <p className="num">Number of Students</p>
              <h1>800</h1>
            </span>

            <span className="coarse-box">
              <h3 className="header">Maths</h3>
              <p>Number of Students</p>
              <h1>200</h1>
            </span>

            <span className="coarse-box">
              <h3 className="header">Science</h3>
              <p>Number of Students</p>
              <h1>300</h1>
            </span>

            <span className="coarse-box">
              <h3 className="header">History</h3>
              <p>Number of Students</p>
              <h1>307</h1>
            </span>
          </section>
        </div>
      </body>
    </main>
  );
}

export default Landing;
