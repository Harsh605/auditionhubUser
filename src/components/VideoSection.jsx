import React from 'react'
import { useNavigate } from 'react-router-dom';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import AssignmentIcon from '@mui/icons-material/Assignment';

function VideoSection() {
  const navigate = useNavigate();
 
  return (
    <div>
  <section className="about-section padding-tb padding-b shape-img">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="about-image">
            <img style={{height:"70%",width:"100%"}} src="/75.png" alt="about image" />
          </div>
        </div>
        <div className="col-lg-10">
          <div className="section-header text-center">
            <h2>Audition Meetup for Diverse Talents in Dance, Stunts, Visual Arts, and Music</h2>
           
          </div>
          <div className="section-wrapper text-center">
            <p>Join Audition Meetup, your gateway to artistic opportunities! Discover a vibrant community where aspiring talents in dance, car stunts, visual arts, music, and more connect. Seamlessly enroll in auditions, share experiences, and shape your artistic journey. Unleash your potential with Audition Meetup – where talent meets opportunity!"</p>
            <div className="about-btn-grp">
              <button href="" onClick={()=>navigate('/SelectLanguage')} className="lab-btn style-orange "><span><AssignmentIcon/> Register
                  Now</span> </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default VideoSection;