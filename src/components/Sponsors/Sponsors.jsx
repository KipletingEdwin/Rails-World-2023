import React from "react";
import styles from "./Sponsors.module.css";
import appSignal from "../../../src/assets/sponsors/app-signal.svg";
import babbel from "../../../src/assets/sponsors/RW-logo-babbel.svg";
import shopify from "../../../src/assets/sponsors/RW-logo-shopify.svg";
import viaEurope from "../../../src/assets/sponsors/RW-logo-viaeurope.svg";

import bigBinary from "../../../src/assets/sponsors/RW-logo-bigbinary.svg";
import Renuo from "../../../src/assets/sponsors/logo-renuo.svg";
import sponsorsData from "../../Data/data.json";

function Sponsors() {
  return (
    <section className={styles.container}>
      <div className={styles.sponsors}>
        <h1> Thank You Sponsors!</h1>
        <p>
          Rails World could not have been possible without the generous support
          of Rails World sponsors and Rails
          <br />
          Foundation members.
        </p>
      </div>

      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.level1}>
            <img src={appSignal} alt="appSignal" />
          </div>

          <div className={styles.level2}>
            <img src={babbel} alt="babbel" />
            <img src={shopify} alt="shopify" />
            <img src={viaEurope} alt="viaEurope" />
          </div>

          {sponsorsData.map((sponsor, id) => (
            <div key={id} className={styles.level3}>
              <img src={sponsor} alt="sponsor" />
            </div>
          ))}

          <div className={styles.level4}>
            <img src={bigBinary} alt="bigBinary" />
            <img src={Renuo} alt="Renuo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
