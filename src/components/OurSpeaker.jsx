import React from 'react'
// import { IcoFontFacebook } from 'react-icons/icofont';
import { FaFacebook } from 'react-icons/fa'; // Example: Using Font Awesome Facebook icon
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { SiFacebook } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

import AssignmentIcon from '@mui/icons-material/Assignment';





function OurSpeaker() {
  const navigate = useNavigate();
  return (
    <div className="p-10 md:pt-24 md:px-24 sm:p-10 bg-gradient-to-b from-[#000120] to-[#220056]">
       <section className="speakers-section padding-tb padding-b shape-img">
  <div className="container-4">
    <div className="section-header">
      <h2 style={{fontSize:"8vh"}}>Our Speakers</h2>
      <p style={{color:"white"}}>Meet Our World’s Leading Speakers</p>
    </div>
    <div className="section-wrapper">
      <div className="row g-4 justify-content-center">
        <div className="col-xl-6 col-lg-8 col-12">
          <div className="speaker-item">
            <div className="speaker-inner">
              <div className="speaker-thumb">
                <img  src="/85.png" alt="speaker" />
              </div>
              <div className="speaker-content">
                <div className="spkr-content-title d-flex flex-wrap justify-content-between">
                  <div className="speaker-infos">
                    <h5><a style={{ textDecoration: 'none' }}href="speaker-details.html">Ishan sharma</a> </h5>
                    <p>Speaker</p>
                  </div>
                  <div className="speaker-comp-logo">
                    <img src="/41.png" alt="spkr-company" />
                  </div>
                </div>
                <div className="spkr-content-details">
                  <p>Completey conceplua high quality nice markes rather than long term impact human capital</p>
                  <ul className="social-icons">
                    <li><a style={{padding:'9px'}} href="#"><FaFacebook className="icofont-facebook" style={{color:'white'}} /></a></li>
                    <li><a style={{padding:'9px'}} href="#"><FaTwitter className="icofont-twitter" style={{color:'white'}} /></a></li>
                    <li><a style={{padding:'9px'}} href="#"><FaInstagram className="icofont-instagram" style={{color:'white'}} /></a></li> 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-8 col-12">
          <div className="speaker-item">
            <div className="speaker-inner">
              <div className="speaker-thumb">
                <img src="/86.png" alt="speaker" />
              </div>
              <div className="speaker-content">
                <div className="spkr-content-title d-flex flex-wrap justify-content-between">
                  <div className="speaker-infos">
                    <h5><a  style={{ textDecoration: 'none' }} href="speaker-details.html">Arjun sharma</a> </h5>
                    <p>Speaker</p>
                  </div>
                  <div className="speaker-comp-logo">
                    <img src="/42.png" alt="spkr-company" />
                  </div>
                </div>
                <div className="spkr-content-details">
                  <p>Completey conceplua high quality nice markes rather than long term impact human capital</p>
                  <ul className="social-icons">
                    <li><a style={{padding:'9px'}} href="#"><FaFacebook className="icofont-facebook" style={{color:'white'}} /></a></li>
                    <li><a style={{padding:'9px'}} href="#"><FaTwitter className="icofont-twitter" style={{color:'white'}} /></a></li>
                    <li><a style={{padding:'9px'}} href="#"><FaInstagram className="icofont-instagram" style={{color:'white'}} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className="download-button text-center mt-5">
        <button onClick={()=>navigate('/SelectLanguage')} className="lab-btn"><span><AssignmentIcon className="icofont-users-alt-2" />Register Now</span> </button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default OurSpeaker;