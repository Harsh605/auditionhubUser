import React from 'react';
import './AuditionDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function AuditionDetails() {
  return (
    <div id="about" className="p-10 md:pt-24 md:px-24 sm:p-10 bg-gradient-to-b from-[#000120] to-[#220056]">
      <section className="about-us container mx-auto">
        <h2 className="bigHeading pt-4 font-bold xl:text-5xl lg:text-4xl md:text-4xl text-3xl lg:leading-[2.5rem] 2xl:leading-[3.7rem]" style={{ display: 'flex', justifyContent: 'center' }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]"> Know About Us </span>
        </h2>
        <p className="text-white pt-8 pb-12" style={{ display: 'flex', justifyContent: 'center' }}>
          Learn more about our Vision behind HAAWKS and our Mission towards greatness.
        </p>
        <br />
        <div className="flex flex-wrap" style={{ maxWidth: 1200, margin: 'auto' }}>
          <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <h2 className="smallHeading text-3xl text-[#4CC9F0] pb-10 font-bold">Our Vision</h2>
            <ul>
              <li className="text-gray-100 pb-5">
                <FontAwesomeIcon icon={faCheck} className="fa-solid fa-check px-1 text-[#4CC9F0]" /> Empower aspiring artists to showcase their talent through seamless audition enrollment, fostering creativity and diverse expressions in entertainment.
              </li>
              <li className="text-gray-100 pb-5">
                <FontAwesomeIcon icon={faCheck} className="fa-solid fa-check px-1 text-[#4CC9F0]" /> Streamline the audition process, providing a user-friendly platform that connects performers with opportunities, shaping the future of entertainment.
              </li>
            </ul>
            <br />
          </div>
          <div className="lg:w-1/2 pr-4 lg:pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <img style={{ width: '70vh', height: '60vh' }} src="/81.png" alt="Vision Image" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="flex flex-wrap-reverse" style={{ maxWidth: 1200, margin: 'auto' }}>
          <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <img className="my-10 lg-pt-10" src="/82.png" alt="Mission Image" style={{ width: '100%' }} />
          </div>
          <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <h2 className="smallHeading text-3xl text-[#4CC9F0] pb-10 font-bold">Our Mission</h2>
            
            <ul>
              <li className="text-gray-100 pb-5">
                <FontAwesomeIcon icon={faCheck} className="fa-solid fa-check px-1 text-[#4CC9F0]" />Cultivate a global community where every aspiring artist finds a stage, fostering creativity, inclusivity, and boundless expression in the vibrant tapestry of entertainment.
              </li>
              <li className="text-gray-100 pb-5">
                <FontAwesomeIcon icon={faCheck} className="fa-solid fa-check px-1 text-[#4CC9F0]" />Revolutionize the audition landscape by delivering a user-centric platform, seamlessly connecting performers with opportunities, and becoming the catalyst for the evolution of entertainment worldwide.
              </li>
            </ul>
            
            
            
            <br />
            
          </div>
          
        </div>
        <div className="flex flex-wrap" style={{ maxWidth: 1200, margin: 'auto' }}>
          <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            
            <h2 className="smallHeading text-3xl text-[#4CC9F0] pb-10 font-bold">Unleashing Artistic Excellence</h2>
            <ul>
              <li className="text-gray-100 pb-5">
                <FontAwesomeIcon icon={faCheck} className="fa-solid fa-check px-1 text-[#4CC9F0]" /> hxclusive Opportunities: We curate unique audition experiences, offering talents access to opportunities they won't find elsewhere, ensuring a platform where exceptional artists shine.
              </li>
              <li className="text-gray-100 pb-5">
                <FontAwesomeIcon icon={faCheck} className="fa-solid fa-check px-1 text-[#4CC9F0]" /> Tailored Support: Our dedicated team provides personalized assistance, guiding performers through the audition journey with expertise, making us the premier choice for those aspiring to stand out in the entertainment industry.
              </li>
            </ul>
            
            <br />
          </div>
          <div className="lg:w-1/2 pr-4 lg:pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <img style={{ width: '100%', height: '100%'}} src="/83.png" alt="Vision Image" />
          </div>
          </div>
          

        {/* <div className="flex justify-center">
          <a
            target="_blank"
            className="my-4 md:my-16 mx-8 px-14 md:px-24 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
            href="https://drive.google.com/file/d/1w--URcjU0k8V7FmX_CFA-MunW1Q8mkRu/view?usp=sharing"
          >
            Read More
          </a>
        </div> */}
      </section>
    </div>
  );
}

export default AuditionDetails;









