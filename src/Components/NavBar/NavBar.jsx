import './NavBar.css';
import UserProfile from '../../assets/Imgs/UserProfile.jpg'
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <>
      
      
  
    <nav className="d-flex flex-column fixed-top start-0 top-0 p-0 mt-1 d-lg-none navbar navbar-light" aria-label="Main Navigation">
      <div className="container-fluid">
        <button className="navbar-toggler collapsed z-3" type="button" data-bs-toggle="collapse" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="offcanvasNavbar">
                <div className="offcanvas-body">
                
            <div className="NavSidBar w-auto position-relative bg-white px-4 py-5">
                    <div className="NavSidBar-img">

                    <img className='profile-img' src={UserProfile} alt='profile'/>
                    </div>
              <h1 className="NavSidBar-username"><a href="/">Mohamed Khaled</a></h1>
              <p className="NavSidBar-userinfo"><a href="#">Frontend</a> in Egypt</p>
              <ul className="NavsidebarList">
                <li className="active"><Link data-nav-section="home" to="/">Home</Link></li>
                <li className=""><Link  to="/about">About</Link></li>
                <li className=""><Link data-nav-section="skills" to="/skills">Skills</Link></li>
                <li className=""><Link data-nav-section="experience" to="/experience">Experience</Link></li>
                <li className=""><Link data-nav-section="work" to="/work">Work</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div className="NavSidBar px-4 py-5 d-none d-lg-block">
            <div className="NavSidBar-img">
            <img className='profile-img' src={UserProfile} alt='profile'/>
            </div>
      <h1 className="NavSidBar-username"><a href="#">Mohamed Khaled</a></h1>
      <p className="NavSidBar-userinfo"><a href="#">Frontend</a> in Egypt</p>
      <ul className="NavsidebarList p-0">
        <li className="active"><Link data-nav-section="home" to="/">Home</Link></li>
        <li className=""><Link data-nav-section="about" to="/about">About</Link></li>
        <li className=""><Link data-nav-section="skills" to="/skills">Skills</Link></li>
        <li className=""><Link data-nav-section="experience" to="/experience">Experience</Link></li>
        <li className=""><Link data-nav-section="work" to="/work">Work</Link></li>
      </ul>
    </div>
       
    </>
  )
}
