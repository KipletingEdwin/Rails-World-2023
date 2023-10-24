import React from "react";
import Babbel from '../assets/sponsors/babbel.svg'
import appSignal from '../assets/sponsors/app-signal.svg'
import shopify from '../assets/sponsors/shopify.svg'
import viaEurope from '../assets/sponsors/viaeurope.svg'
import crunchy from '../assets/sponsors/crunchydata.svg'
import github from '../assets/sponsors/github.svg'
import magmalabs from '../assets/sponsors/magmalabs.svg'
import wafris from '../assets/sponsors/wafris.svg'
import zilverline from '../assets/sponsors/zilverline.svg'
import theAgency from '../assets/sponsors/agency-of-learning.png'
import buzzsprout from '../assets/sponsors/buzzsprout.svg'
import leWagon from '../assets/sponsors/lewagon.svg'
import dellTechnologies from '../assets/sponsors/apfloor.svg'
import cedarCode from '../assets/sponsors/cedarcode.svg'
import zapFloor from '../assets/sponsors/apfloor.svg'

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
            <a href=""> <img src={shopify} alt="shopify"/> </a>
            <a href=""> <img src={viaEurope} alt="viaEurope"/> </a>
          </div>
          <div className="rest-of-sponsors">
          <a href=""> <img src={crunchy} alt="crunchy"/> </a>
          <a href=""> <img src={github} alt="github"/> </a>
          <a href=""> <img src={magmalabs} alt="magmalabs"/> </a>
          <a href=""> <img src={wafris} alt="wafris"/> </a>
          <a href=""> <img src={zilverline} alt="zilverline"/> </a>
          <a href=""> <img src={theAgency} alt="theAgency"/> </a>
          <a href=""> <img src={buzzsprout} alt="buzzsprout"/> </a>
          <a href=""> <img src={leWagon} alt="leWagon"/> </a>
          <a href=""> <img src={dellTechnologies} alt="dellTechnologies"/> </a>
          <a href=""> <img src={cedarCode} alt="cedarCode"/> </a>
          <a href=""> <img src={zapFloor} alt="zapFloor"/> </a>
          <a href=""> <img src={viaEurope} alt="viaEurope"/> </a>

          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
