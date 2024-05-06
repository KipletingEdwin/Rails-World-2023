import React from 'react';
import styles from './Years.module.css';

function Years() {
  return (
    <section className={styles.container}> 
        {/* <div className={styles.outerContainer}> */}
            <div className={styles.innerContainer}>
                <div className={styles.left}>
                    <h2>20 Years of <br/>Rails </h2>
                </div>

                <div className={styles.right}>
                    <p> We celebrated an incredible milestone together - Rails turned 20! With <br/>
                     an amazing first 20 years under our belt, we now look forward to what <br/>
                      the next 20 will bring. <br/>
                    (Yes, there was cake.) </p>
                    <button>Click here.</button>


                </div>

            {/* </div> */}
        </div>
    </section>
  )
}

export default Years