import React from "react";
import back from "../images/3rd no back.png";

function Login() {
  return (
    <div className="flex">
      <form className="box">
        <section className="log">
          <h1 className="log-title">Log In</h1>
          <label>Email</label>
          <input type="email" placeholder="Enter your email"></input>

          <label>Password</label>
          <input type="password" placeholder="Enter your password"></input>
        </section>
        <button className="btnn">Log In</button>
        <p className="log-text">
          Forgot Password? <span className="under">Click here</span>
        </p>
      </form>

      <img className="back" src={back} alt=""></img>
    </div>
  );
}

export default Login;
