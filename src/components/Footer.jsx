import React from 'react'
import "./Footer.css"
import { FaEnvelope} from 'react-icons/fa';


function Footer() {
  return (
    <div>
    <div className="footer-main">
  <div className="footer-row">
    <div className="footer-first">
      <div className="footer-heading">About Us</div>
      <p>Thank you for being a part of Audition Extravaganza! As we wrap up this incredible showcase of talent, we invite you to stay connected with us for future events and updates.</p>
      
      
    </div>
    <div className="footer-second">
      <div className="footer-heading">Our Services</div>
      <ul>
        <li><a href="ComingSoon.html">Home</a></li>
        <li><a href="ComingSoon.html">About us</a></li>
        
      </ul>
    </div>
    <div className="footer-third">
      <div className="footer-heading">Useful Links</div>
      <ul>
        <li><a href="ComingSoon.html">Event Schedule</a></li>
        <li><a href="ComingSoon.html" target="blank">Speakers</a></li>
      </ul>
    </div>
    <div className="footer-fourth">
      <div className="footer-heading">Contact Info</div>
      
      <div className="footer-info-contact">
        <h4><FaEnvelope style={{marginRight:"20px"}}  className="fa-solid fa-envelope" aria-hidden="true" />Email</h4>
        <a href="mailto: Info@metablocktechnologies.io" target="_blank">auditionhub@gmil.com</a>
      </div>
      
      
    </div>
  </div>
</div>

    <div style={{textAlign:"center",justifyContent:"center",display:"flex"}}  className="footer-row2">
  <div className="footer-row2-left">© {new Date().getFullYear()} Production by DVV Entertainments</div>
  
</div>

    </div>
  )
}

export default Footer;