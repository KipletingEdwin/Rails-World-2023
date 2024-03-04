import React from 'react'

import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar'
import Location from './components/Location/Location';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Location/>

    </div>
   
  )
}

export default App
