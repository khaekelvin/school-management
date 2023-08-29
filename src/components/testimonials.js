import React from "react";
import pfp from "../images/new2pfp.png";
import pfpp from "../images/new1pfp.png";

function Testimonials() {
  return (
    <div className="grid-both">
      <section className="box">
        <img className="pfp" src={pfp} alt=""></img>
        <h3>
          <i>- Jane Smith, School Administrator</i>
        </h3>
        <p>
          "As a school administrator, I've been amazed by the efficiency and
          ease that this school management system brings to our institution.
          From attendance tracking to communication tools, it's a comprehensive
          solution that has streamlined our processes and improved
          parent-teacher collaboration."
        </p>
      </section>

      <section className="box">
        <img className="pfp" src={pfpp} alt=""></img>
        <h3>
          <i>- Michael Stone, School Teacher</i>
        </h3>
        <p>
          "I've been using this school management system for a while now, and I
          can't imagine managing my classes without it. The grade management
          feature has saved me hours of work, and the parent portal keeps
          everyone in the loop. It's truly a game-changer for teachers like me."
        </p>
      </section>
    </div>
  );
}

export default Testimonials;
