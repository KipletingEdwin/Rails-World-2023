import React from 'react'
import railsLogo from '../assets/rails-world-logo.png'

function Navbar() {
  return (
  <section className='container'>
    <p> Rails World 2023 videos coming soon. Stay tuned. </p>
    <div className='nav-container'> 
    <div className='eventDate'> 
    <img src={railsLogo} alt='rails-world-logo'/>
    </div>
    <div className='nav-links'> 
    <ul>
        <li>
        <a href=''> Speakers </a>
        <a href=''> Agenda </a>
        <a href=''> FAQs </a>
        </li>
    </ul>
    </div>
    </div>
   
  </section>
  )
}

export default Navbar