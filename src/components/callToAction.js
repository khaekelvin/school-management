import React from "react";
import last from "../images/sub.png";

function callToAction() {
  return (
    <div className="last-grid">
      <img className="" src={last} alt=""></img>
      <form>
        <h1>Subscribe to SchoolFlow</h1>
        <p>
          By subscribing to SchoolFlow, you'll receive regular email updates
          about new features, important announcements, and educational insights.
        </p>
        <input placeholder="Enter your Email" />
        <button className="sub">Subscribe</button>
      </form>
    </div>
  );
}

export default callToAction;
