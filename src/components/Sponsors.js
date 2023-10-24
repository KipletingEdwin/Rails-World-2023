import React from "react";
import Babbel from '../assets/sponsors/babbel.svg'
import appSignal from '../assets/sponsors/app-signal.svg'

function Sponsors() {
  return (
    <section className="sponsors-container">
      <div className="thankYou">
        <h2> Thank You Sponsors! </h2>
        <p>
          {" "}
          Rails World could not have been possible without the generous support
          of Rails World sponsors and Rails Foundation members.{" "}
        </p>
      </div>
      <div className="bordered-container">
        <div className="flex-container">
          <div className="sponsors"> 
          <div className="appSignal">
            <a href="" > <img src= {appSignal} alt="Babbel"/> </a>
          </div>
          <div className="babbel">
            <a href=""> <img src={Babbel} alt="babbel"/> </a>
          </div>
          <div className="rest-of-sponsors"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
