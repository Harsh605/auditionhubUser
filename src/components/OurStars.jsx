import React from 'react'

function OurStars() {
    const style={
        height:'300px',
        overflow:'hidden'
    }
  return (
    <>    <div className="p-10 md:pt-24 md:px-24 sm:p-10 bg-gradient-to-b from-[#000120] to-[#220056]">
        <section className="speakers-section padding-tb padding-b shape-img">
        <div className="container-4">
         <div className="section-header">
      <h2 style={{fontSize:"8vh"}}>Our Stars</h2>
    </div>
    <div className='row'>
        <div style={style} className="col-md-4"><img src={require('../images/stars/actress1.jpg')} alt="" /></div>
        <div style={style} className="col-md-4"><img src={require('../images/stars/alluarjun.jpg')} alt="" /></div>
        <div style={style} className="col-md-4"><img src={require('../images/stars/nanu.jpg')} alt="" /></div>
        <div style={style} className="col-md-4"><img src={require('../images/stars/actress2.png')} alt="" /></div>
        <div style={style} className="col-md-4"><img src={require('../images/stars/ram.jpg')} alt="" /></div>
        <div style={style} className="col-md-4"><img src={require('../images/stars/actress3.jpg')} alt="" /></div>
    </div>
    </div>
    </section>
    </div>
    </>
  )
}

export default OurStars