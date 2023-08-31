import React from "react";
import { Link } from "react-router-dom";
import pro from "../images/—Pngtree—3d rendering half body bearded_7557945.png";

function NewStudent() {
  return (
    <body className="over">
      <div className="flex-both">
        <div className="flex-form">
          <section className="form-det">
            <h2>Name</h2>
            <input
              className="credentials"
              type="text"
              placeholder="Enter your name"
            ></input>
          </section>

          <section className="form-det">
            <h2>Age</h2>
            <input
              className="credentials"
              type="text"
              placeholder="Enter your age"
            ></input>
          </section>

          <section className="form-det">
            <h2>Gender</h2>
            <input
              className="credentials"
              type="text"
              placeholder="Enter your gender"
            ></input>
          </section>

          <section className="form-det">
            <h2>Date of birth</h2>
            <input
              className="credentials"
              type="text"
              placeholder="Enter your date of birth"
            ></input>
          </section>

          <section className="form-det">
            <h2>Coarse</h2>
            <input
              className="credentials"
              type="text"
              placeholder="Enter your coarse"
            ></input>
          </section>

          <section className="btns">
            <button className="btn-1" id="btn-first">
              Submit
            </button>
            <button className="btn-1" id="home-link">
              <Link to="/">Home</Link>
            </button>
          </section>
        </div>
        <img className="pro" src={pro} alt=""></img>
      </div>
    </body>
  );
}

export default NewStudent;
