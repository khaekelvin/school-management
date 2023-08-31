import React from "react";
import back from "../images/3rd no back.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <body className="login-body">
      <div className="flex">
        <form className="login-box">
          <section className="log">
            <h1 className="log-title">Log In</h1>
            <label>Email</label>
            <input
              className="login-input"
              type="email"
              placeholder="Enter your email"
            ></input>

            <label>Password</label>
            <input
              className="login-input"
              type="password"
              placeholder="Enter your password"
            ></input>
          </section>
          <button className="btnn">Log In</button>
          <p className="log-text">
            Forgot Password? <span className="under">Click here</span>
          </p>

          <p className="log-text">
            <span className="under">
              <button>
                <Link to="/">Home</Link>
              </button>
            </span>
          </p>
        </form>

        <img className="back" src={back} alt=""></img>
      </div>
    </body>
  );
}

export default Login;
