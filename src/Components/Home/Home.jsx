import React from 'react';
import './Home.css'


export default function Home() {
  return (
      <>
          
      <div id="carouselExampleFade" data-bs-ride="carousel" data-bs-interval="1500" className="carousel  slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item slide1 vh-100 h-100 d-flex p-0  justify-content-center active">
          
            <div className="container hero-sec text-center text-md-start">
              <h1>Hi! <br/>I am Mohamed</h1>
              <p className="text-lg-start text-center">100% html5 bootstrap templates Made
                <br></br> By <a href="https://colorlib.com/">Colorlib.com</a></p>
              <button className='btn btn-transperent btn-slide1'>download cv <i className="fas fa-download"></i></button>
            </div>
    </div>
    <div className="carousel-item slide2 vh-100 h-100 d-flex p-0  justify-content-center">
      
    <div className="container hero-sec text-center text-md-start">
              <h1>I am <br/>a Developer</h1>
              <p className="text-lg-start text-center">100% html5 bootstrap templates Made
                <br></br> By <a href="https://colorlib.com/">Colorlib.com</a></p>
              <button className='btn btn-transperent btn-slide1'>View portfolio <i className="fas fa-briefcase"></i></button>
            </div>

    </div>
  </div>
  
</div>
    </>
  )
}
