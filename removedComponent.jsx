

// below email
<div className="contact-box">
                      <WifiCalling3OutlinedIcon sx={{ color: "#53C4DA" }} />
                      <h2>Telephone</h2>
                      <a href="tel:+3630123456789">+3630123456789</a>
</div>


//second input file placed in other box
<div className="col-lg-6 col-md-12">
<div className="col-md-12">
  <div className="py-2 border-1 bg-gray-200">
    <input
      className=" "
      required
      type="file"
      name="image"
      id="fileInput"
      accept="image/*" // Add this if you want to restrict to image files
      {...register("image")}
      placeholder="choose image"
    />
  </div>
</div>
</div>
<div className="col-lg-6 col-md-12">
                      <div className="col-md-12">
                        <div className="py-2 border-1 bg-gray-200">
                          <input
                            className=" "
                            required
                            type="file"
                            name="image"
                            id="fileInput"
                            accept="image/*" // Add this if you want to restrict to image files
                            {...register("image")}
                            placeholder="choose image"
                          />
                        </div>
                      </div>
                    </div>



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
                    <li><a href="#"><FaFacebook className="icofont-facebook" style={{color:'white'}} /></a></li>
                    <li><a href="#"><FaTwitter className="icofont-twitter" style={{color:'white'}} /></a></li>
                    <li><a href="#"><FaInstagram className="icofont-instagram" style={{color:'white'}} /></a></li> 
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
                    <li><a href="#"><FaFacebook className="icofont-facebook" style={{color:'white'}} /></a></li>
                    <li><a href="#"><FaTwitter className="icofont-twitter" style={{color:'white'}} /></a></li>
                    <li><a href="#"><FaInstagram className="icofont-instagram" style={{color:'white'}} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>