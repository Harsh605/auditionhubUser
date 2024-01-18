import React from 'react'
import VideoSection from './VideoSection';
import EventSchedule from './EventSchedule';
import OurSpeaker from './OurSpeaker';
import EventGift from './EventGift';
import EventSponser from './EventSponser';
import RegistrationPage from './RegistrationPage';
import { useNavigate } from 'react-router-dom';
import ProductSlider from './ProductSlider';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Location from './Location';
import AuditionDetails from './AuditionDetails';
import SelectLanguage from './SelectLanguage';
import OurStars from './OurStars';
// import "./Header.css"


function Home() {
  const navigate = useNavigate();
  
  return (
    <div>
        <section className="banner-section">
  <div className="container">
    <div className="banner-wrapper">
      <div className="row gy-5 align-items-center">
        <div className="col-lg-6 col-12">
          <div className="banner-content">
            <h1  className="mb-0"> Big Audition Meetup 2023</h1>
            <p style={{display:"flex",textAlign:"left"}}>A Platform for Seamless Audition Enrollments in Dance, Stunts, Art, Music, and More.</p>
            <button style={{display:"flex",textAlign:"left"}} onClick={()=>navigate("/SelectLanguage")}  className="lab-btn mt-3"><span ><AssignmentIcon/>
                Register
                Now</span> </button>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="banner-image">
            {/* <img style={{width:"65%"}} src="/02.png" alt="banner-img" /> */}

          </div>
  <ProductSlider/>
        </div>
      </div>
    </div>
  </div>
</section>
<div>
<VideoSection/>
<AuditionDetails/>
  <EventSchedule/>
 <Location/>
 <EventSponser/>
 <OurSpeaker/>
 <OurStars/>
 {/* <SelectLanguage/> */}
 <EventGift/>
 
</div>
</div>

    
  )
}

export default Home;