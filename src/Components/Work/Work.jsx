
import './Works.css'


export default function Work() {
  return (
    <>
        <div className="Work container py-5 mt-lg-0 mt-3">
        <p className="workTitle">MY WORK</p>
              <h2 className="workHeading">RECENT WORK</h2>
<ul className="nav nav-underline mb-5">
          
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#Work-pg">Web</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#Work-pg">Mobile</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#Work-pg">Graphic</a>
  </li>

        </ul>
        
        <div id='#Work-pg' className="my-works">
          <div className="row">
            <div className="col-md-6">
              <div className="my-proj pj-1">
                <div className="overlay">
                  <div className="overlay-con">
                    <h3 ><a className='text-light' href="#">Work 1</a></h3>
                    <p>Cooking</p>
                    <p className='icons'>
                      <span className='px-1'><i className="fas fa-share-alt"></i></span>
                      <span className='px-1'><i className="far fa-eye">100</i></span>
                      <span className='px-1'><i className="far fa-heart">89</i></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="my-proj pj-2">
          <div className="overlay">
                  <div className="overlay-con">
                    <h3 ><a className='text-light' href="#">Work 2</a></h3>
                    <p>Clothing</p>
                    <p className='icons'>
                      <span className='px-1'><i className="fas fa-share-alt"></i></span>
                      <span className='px-1'><i className="far fa-eye">256</i></span>
                      <span className='px-1'><i className="far fa-heart">146</i></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="my-proj pj-3">
          <div className="overlay">
                  <div className="overlay-con">
                    <h3 ><a className='text-light' href="#">Work 3</a></h3>
                    <p>Sports</p>
                    <p className='icons'>
                      <span className='px-1'><i className="fas fa-share-alt"></i></span>
                      <span className='px-1'><i className="far fa-eye">232</i></span>
                      <span className='px-1'><i className="far fa-heart">130</i></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="my-proj pj-4">
          <div className="overlay">
                  <div className="overlay-con">
                    <h3 ><a className='text-light' href="#">Work 4</a></h3>
                    <p>Furniture</p>
                    <p className='icons'>
                      <span className='px-1'><i className="fas fa-share-alt"></i></span>
                      <span className='px-1'><i className="far fa-eye">140</i></span>
                      <span className='px-1'><i className="far fa-heart">122</i></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
    <div className="collapse multi-collapse my-proj pj-5" id="multiCollapseExample1">
          <div className="overlay">
                  <div className="overlay-con">
                    <h3 ><a className='text-light' href="#">Work 5</a></h3>
                    <p>Cofe</p>
                    <p className='icons'>
                      <span className='px-1'><i className="fas fa-share-alt"></i></span>
                      <span className='px-1'><i className="far fa-eye">113</i></span>
                      <span className='px-1'><i className="far fa-heart">129</i></span>
                    </p>
                  </div>
                </div>      
    </div>
  </div>
  <div className="col-md-6">
    <div className="collapse multi-collapse my-proj pj-6" id="multiCollapseExample2">
          <div className="overlay">
                  <div className="overlay-con">
                    <h3 ><a className='text-light' href="#">Work 6</a></h3>
                    <p>Photography</p>
                    <p className='icons'>
                      <span className='px-1'><i className="fas fa-share-alt"></i></span>
                      <span className='px-1'><i className="far fa-eye">110</i></span>
                      <span className='px-1'><i className="far fa-heart">201</i></span>
                    </p>
                  </div>
                </div>      
    </div>
    
  </div>

            

  <button className="Show-More btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Show More</button>
          </div>
        </div>
        </div>
    </>
  )
}
