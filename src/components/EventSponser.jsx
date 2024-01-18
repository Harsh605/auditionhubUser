import React from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';

function EventSponser() {
  const navigate = useNavigate()
  return (
    <div>
        <section className="sponsor-section padding-tb padding-b bg-image">
  <div className="container">
    <div className="section-header">
      <h2>Event Sponsors</h2>
      <p>Check Who Makes The Event Possible</p>
    </div>
    <div className="section-wrapper text-center">
      <div className="all-sponsor">
        <h5>Gold sponsor</h5>
        <div className="platinum-sponsor">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="/09.png" alt="sponsor" />
            </div>
            <div className="swiper-slide">
              <img src="/10.png" alt="sponsor" />
            </div>
            <div className="swiper-slide">
              <img src="/11.png" alt="sponsor" />
            </div>
          </div>
        </div>
        {/* silver-sponsor */}
        <h5 className="mt-4">Silver sponsor</h5>
        <div className="silver-sponsor">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="/12.png" alt="sponsor" />
            </div>
            <div className="swiper-slide">
              <img src="assets/images/sponsor/silver-2.png" alt="sponsor" />
            </div>
            <div className="swiper-slide">
              <img src="assets/images/sponsor/silver-3.png" alt="sponsor" />
            </div>
            <div className="swiper-slide">
              <img src="assets/images/sponsor/silver-4.png" alt="sponsor" />
            </div>
            <div className="swiper-slide">
              <img src="assets/images/sponsor/silver-5.png" alt="sponsor" />
            </div>
          </div>
        </div>
      </div>
      <button onClick={()=>navigate("/SelectLanguage")} href="#" className="lab-btn"><AssignmentIcon sx={{color:"white"}}/><span>
          Register Now
        </span></button>
    </div>
  </div>
</section>

    </div>
  )
}

export default EventSponser;