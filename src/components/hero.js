import React from "react";
import one from "../images/2nd no back.png";
import proof from "../images/logosss.png";

function Hero() {
  return (
    <body>
      <main>
        <div>
          <h1 className="hero-title">
            Simplify <br /> <span className="or">Organize.</span> Strive
          </h1>
          <p className="hero-text">
            Managing your school has never been easier. <br />
            Introducing SchoolFLow, the comprehensive solution that
            revolutionizes <br />
            school administration.
          </p>
          <button className="btn-blue">Sign Up</button>
        </div>
        <img className="image-1" src={one} alt=""></img>
      </main>
      {/* <img className="social-proof" src={proof} alt=""></img> */}
    </body>
  );
}

export default Hero;
