
import './About.css'

export default function About() {
  return (
    <>
        <div className="container about mt-5">
    <p>ABOUT US</p>
     <h2>WHO AM I ?</h2>
    <p className="aboutText mb-5">
        <strong>Hi Im Mohamed Khaled </strong>
        With a strong foundation in HTML, CSS, and JavaScript,
        I am eager to contribute to innovative projects and develop cutting-edge web applications.
                  My ability to learn quickly and adapt to new technologies allows me to deliver high-quality results.</p>
              
    <p className="aboutText mb-5" >Even the all-powerful Pointing has no control about the blind texts it is an almost
        unorthographic life One day however a small line of blind text by the
        name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
    <div className="row">
        <div className="col-md-3">
                      <div className="services sr-1 mb-5">
                          <span className='icon i-1'>
                          <i className="far fa-lightbulb"></i>
                          </span>
                          <h3>Graphic Designe</h3>
                      </div>
                  </div>
                  
                  <div className="col-md-3">
                      <div className="services sr-2 mb-5">
                          <span className='icon i-2'>
                          <i className="fas fa-globe-americas"></i>
                          </span>
                          <h3>Web Designe</h3>
                      </div>
                  </div>
                  
                  <div className="col-md-3">
                      <div className="services sr-3 mb-5">
                          <span className='icon i-3'>
                          <i className="fas fa-database"></i>
                          </span>
                          <h3>Software</h3>
                      </div>
                  </div>
                  
                  <div className="col-md-3">
                      <div className="services sr-4 mb-5">
                          <span className='icon i-4'>
                          <i className="fas fa-mobile-alt"></i>
                          </span>
                          <h3>Application</h3>
                      </div>
        </div>

              </div>
          </div>
    </>
  )
}
