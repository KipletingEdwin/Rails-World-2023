import React from 'react';
import styles from './Footer.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faXTwitter, faLinkedin } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <section className={styles.container}>
        <div className={styles.description}>
            <p>This website was created by <a href='/'>Shona Chan</a>, a junior developer from the Rails community.</p>
            <p>It was commissioned by the Rails Foundation, designed by Katya Sitko and created under the mentorship of <a href='/'>Ayush Newatia</a>.</p>
        </div>

        <div className={styles.socials}>
        {/* <FontAwesomeIcon icon={faXTwitter} /> */}
        {/* <FontAwesomeIcon icon={faLinkedin} /> */}

        </div>
        <div className={styles.privatePolicy}>
            <a href='/https://rubyonrails.org/world/2023/conduct'>Code of Conduct</a>
            <a href='/https://rubyonrails.org/foundation/privacy'>Private Policy</a>
            <a href='/https://rubyonrails.org/world/2023/terms'>Terms & Conditions</a>

        </div>
        Footer
     </section>
  )
}

export default Footer