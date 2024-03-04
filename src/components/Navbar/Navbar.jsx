import React from "react";
import styles from "./Navbar.module.css";
import railsWorldImage from "../../assets/navbar/rails-world-logo.png";

function Navbar() {
  return (
    <section className={styles.container}>
      <div className={styles.upperContainer}>
        <p>
          Save the date: Rails World 2024 will take place Sept 26 & 27 in
          Toronto. More details soon!
        </p>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.railsImage}>
          <a href="/world/2023">
            <img src={railsWorldImage} alt="rails-world-2023" />
          </a>
        </div>
        <div className={styles.linksContainer}>
          <ul className={styles.links}>
            <li className={styles.link} >
              <a href="/speakers">Speakers</a>
            </li>
            <li className={styles.link} >
              <a href="/Agenda">Agenda</a>
            </li>
            <li className={styles.link} >
              <a href="/faqs">FAQs</a>
            </li>
            <li className={styles.linkButton}>
              <a href="/videos">View All Videos</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
