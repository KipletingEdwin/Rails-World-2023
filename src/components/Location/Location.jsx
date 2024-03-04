import React from 'react'
import styles from './Location.module.css';
import PlaceIcon from '@mui/icons-material/Place';

function Location() {
  return (
    <section className={styles.container}>
        <div className={styles.wrapperContainer}>
            <div className={styles.innerWrapperContainer}>
                <h1 className={styles.title}> That's a wrap! </h1>
                <p>October 5 & 6</p>
               <div className={styles.locationContainer}>
               <PlaceIcon className={styles.placeIcon} style={{ fontSize: 27 }} />
               <a className={styles.location} href='https://goo.gl/maps/HFbht8c3Yo8ZEpi77'> Amsterdam,Beurs van Berlage</a>
               </div>
                <div className={styles.videosContainer}>
                <a className={styles.linkButton}>View All Videos</a>
                </div>
            </div>
            </div>
            <div className={styles.descriptionContainer}>
              <div className={styles.description}>
                <p> Rails World was a two-day, two track community conference featuring 
                  technical talks, demos, workshops, networking, and keynotes about the latest
                   features and best practices in Rails development. There were 700+ Rails
                    developers in attendance, 29 speakers, and one big birthday celebration. </p>
                </div>
            </div>
      
    </section>
  )
}

export default Location