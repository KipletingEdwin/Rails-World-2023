import React, { useEffect, useState } from "react";
import styles from "./Speakers.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Speakers() {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/speakers")
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}> The Speakers </h1>
      <div className={styles.speakersContainer}>
        {formData.map((speaker, id) => (
          <div key={id} className={styles.speakerContainer}>
            
            <div className={styles.upperSection}>
              <div className={styles.imageContainer}>
                <img src={speaker.image} />
              </div>

              <div className={styles.descriptionContainer}>
                <h1>{speaker.name}</h1>
                <h2>{speaker.role},<span>  {speaker.company}  </span></h2>
                <p>{speaker.description}</p>
              </div>
            </div>

            <div className={styles.lowerSection}>
              <div className={styles.left}>
                <h1>Sessions</h1>
              </div>

              <div className={styles.right}>
                <a href="/">{speaker.topic}</a>
                <div className={styles.icons}>
                  <FontAwesomeIcon icon={faClock}  className={styles.faClock} />
                  <h4>{speaker.time}</h4>
                </div>

                <div className={styles.icons}>
                  <FontAwesomeIcon icon={faCalendarDays}  className={styles.faClock} />
                  <h4>{speaker.date}</h4>
                </div>

                <div className={styles.icons}>
                  <FontAwesomeIcon icon={faLocationDot}  className={styles.faClock} />
                  <h4>{speaker.location}</h4>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
      <button className={styles.speakersButton}>View All Speakers</button>
    </section>
  );
}

export default Speakers;
