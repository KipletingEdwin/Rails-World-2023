import React from 'react'

function Venue() {
  return (
    <section className='venue-container'>
        <div className='venue'> 
        <h1> That's a wrap! </h1>
        <p> October 5 & 6 </p>
        <a className='venue-link' href=''>Amsterdam, Beurs van Berlage</a>
        <button> Videos coming soon</button>
        </div>
        <div className='description'> 
            <p> Rails World was a two-day, two track community conference featuring 
               technical talks, demos, workshops, networking, and keynotes about the latest 
                features and best practices in Rails development. There were 700+ Rails 
                 developers in attendance, 29 speakers, and one big birthday celebration. </p>
        </div>
    </section>
   
  )
}

export default Venue