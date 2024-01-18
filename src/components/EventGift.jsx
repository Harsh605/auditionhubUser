import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';


function EventGift() {
    const navigate = useNavigate()
  return (
    <div>
    <section className="event-gift-section padding-tb padding-b bg-image">
  <div className="container">
    <div className="row flex-lg-row-reverse">
      <div className="col-lg-6 col-12">
        <div className="section-header">
          <h2 style={{fontSize:"8vh",}} >Event Gifts</h2>
          <p style={{fontSize:"5vh",fontWeight:"500",display:"flex",textAlign:"left",lineHeight:"10vh"}}>Our Complimentary Gifts For You</p>
        </div>
        <div className="section-wrapper">
          <div className="gift-content">
            <p>
                Gift:Celebrating talent! Unlock extraordinary gifts for the most skilled performers in our audition community. Your brilliance deserves recognition – join us on this journey of artistic achievement and rewards."            </p>
            <ul className="gift-list">
              <li className="gift-item"><span><FaCheckCircle className="fa fa-check-circle" aria-hidden="true" />
                </span>Recognition and Rewards</li>
              <li className="gift-item"><span><FaCheckCircle className="fa fa-check-circle" aria-hidden="true" />
                </span>Incentives for Excellence</li>
              <li className="gift-item"><span><FaCheckCircle className="fa fa-check-circle" aria-hidden="true" />
                </span>Personalized Gift Experiences</li>
              <li className="gift-item"><span><FaCheckCircle className="fa fa-check-circle" aria-hidden="true" />
                </span>Elevating Artistic Journeys</li>
            </ul>
            <div className="register-button">
              <a href="#" onClick={()=>navigate("/SelectLanguage")} className="lab-btn"><span>Register Now</span> </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-12">
        <div className="image-part">
          <img src="/44.png" alt="gift-img" />
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default EventGift;