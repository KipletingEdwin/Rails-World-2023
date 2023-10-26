import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <footer>
        <div className='myFooter'>
            <p> This website was created by <a href='https://www.linkedin.com/in/shona-chan/'> Shona Chan</a>, a junior developer from the Rails community.
                It was commissioned by the Rails Foundation, designed by <a href='https://katya-sitko.netlify.app/'>Katya Sitko</a> and created under
                 the mentorship of <a href='https://radioactivetoy.tech/'> Ayush Newatia. </a> </p>
                 <ul>
                    <li> <FontAwesomeIcon icon="fa-brands fa-twitter" /> </li>
                    <li> <FontAwesomeIcon icon="fa-brands fa-twitter" /></li>
                 </ul>
                 <ul>
                    <li> 
                        <a href='https://rubyonrails.org/world/conduct'>Code of Conduct</a>
                        <a href='https://rubyonrails.org/foundation/privacy'>Privacy Policy</a>
                        <a href='https://rubyonrails.org/world/terms'>Terms & conditions</a>
                    </li>
                 </ul>
        </div>
        
    </footer>
  )
}

export default Footer