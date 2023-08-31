import React from "react";
import pfp from "../images/new2pfp.png";
import Nav from "./nav";

function Cards() {
  return (
    <div>
      <Nav />
      <div className="card-container">
        <section className="cards">
          <img className="card-pfp" src={pfp} alt=""></img>
          <h1>Cards</h1>
        </section>

        <section className="cards">
          <img className="card-pfp" src={pfp} alt=""></img>
          <h1>Cards</h1>
        </section>

        <section className="cards">
          <img className="card-pfp" src={pfp} alt=""></img>
          <h1>Cards</h1>
        </section>

        <section className="cards">
          <img className="card-pfp" src={pfp} alt=""></img>
          <h1>Cards</h1>
        </section>

        <section className="cards">
          <img className="card-pfp" src={pfp} alt=""></img>
          <h1>Cards</h1>
        </section>

        <section className="cards">
          <img className="card-pfp" src={pfp} alt=""></img>
          <h1>Cards</h1>
        </section>
      </div>
    </div>
  );
}

export default Cards;
