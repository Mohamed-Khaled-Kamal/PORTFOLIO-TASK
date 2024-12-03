
import './Skills.css'

export default function Skills() {
  return (
    <>
         <div className="container skills mt-5 py-5 mt-5">
    <p>MY SPECIALTY</p>
     <h2>MY SKILLS</h2>
    <p className="skill-text mb-5">
            The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
            wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.
            She packed her seven versalia, put her initial into the belt and made herself on the way.
    </p>

    <div className="row">
        <div className="col-md-6">
            <div className="skill mb-3">
            <h4>HTML5 <i className=" HTML-i fab fa-html5"></i></h4>
            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar HTML-bar" style={{width:"100%"}}>100%</div>
            </div>
            </div>
                      
            <div className="skill mb-3">
            <h4>CSS3 <i className=" CSS-i fab fa-css3-alt"></i></h4>
            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar CSS-bar" style={{width:"95%"}}>95%</div>
            </div>
            </div>
                      
            <div className="skill mb-3">
            <h4>BOOTSTRAP <i className=" BS-i fab fa-bootstrap"></i></h4>
            <div className="progress" role="progressbar" aria-label="Basic example"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar BS-bar" style={{width:"90%"}}>90%</div>
            </div>
            </div>
        </div>

            <div className="col-md-6">
            
            <div className="skill mb-3">
            <h4>JAVASCRIPT <i className="JS-i fab fa-js-square"></i></h4>
            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar JS-bar " style={{width:"88%"}}>88%</div>
            </div>
            </div>
                      
            <div className="skill mb-3">
            <h4>REACT JS <i className="RCT-i fab fa-react"></i></h4>
            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar RCT-bar " style={{width:"85%"}}>85%</div>
            </div>
            </div>
                      
            <div className="skill mb-3">
            <h4>NODE JS <i className="NJ-i fab fa-node"></i></h4>
            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar NJ-bar " style={{width:"83%"}}>83%</div>
            </div>
            </div>
                      
            </div>
                  

              </div>
          </div>
    </>
  )
}
