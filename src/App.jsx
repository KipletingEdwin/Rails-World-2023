import React from 'react'

import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar'
import Location from './components/Location/Location';
import Speakers from './components/Speakers/Speakers';
import Years from './components/Years/Years';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Location/>
      <Speakers />
      <Years />

    </div>
   
  )
}

export default App
