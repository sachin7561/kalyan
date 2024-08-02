import './Navbar.css';
import logo from '../../Assets/Image/kalyanlogo.png';
import Layer3 from '../Layer3/Layer3';
import Layer4 from '../Layer4/Layer4';

function Navbar() {
  return (
    <div className="container-fluid ">
      <div className="row">
      
        <div className="sidebar text-white" style={{ backgroundColor: '#062F75' }}>
        <img 
          src={logo}  
          className="img-fluid mx-auto d-block m-2" 
          alt="Placeholder"
          style={{ width: '50%', height: 'auto' }} 
        />

          <ul className="nav flex-column mt-4">
            {/* <li className="nav-item">
              <a className="nav-link text-white text-center" href="#">Link 1</a>
            </li> */}
           
          </ul>
        </div>
        
     
        <div className="col-11">
        <nav class="navbar navbar-expand-lg w-100" style={{ backgroundColor: '#B9C5DC' }}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><i class="fa-solid fa-toggle-on"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <div class="ms-auto d-flex align-items-center">
        <span class="navbar-text me-3"><h5>Ernakulam</h5></span>
        <span class="me-3"><i class="fa-regular fa-bell"></i></span>
        <span class="me-3"><i class="fa-solid fa-gear"></i></span>
        <span class="me-3"><i class="fa-regular fa-user"></i></span>
      </div>
    </div>
  </div>
</nav>

    
          <div className="container-fluid  mt-4">
            <h3 className='text-start m-5'>Kalyan & Franchise Inter Company Transactions</h3>
                      <div class="container-fluid">
                      <div class="row  ">
                        <div class="col-12 col-md-6 col-lg-2"><div class="btn-group">
                            <button class="btn btn-light btn-lg border  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ borderColor: '#DBDFE8'}}>
                              Sales Order Advance
                            </button>
        
                            <ul class="dropdown-menu">
                              {/* <li>bkwbgd</li> */}
                            </ul>


                            <div class="btn-group">
                            <button className="btn btn-light btn-lg border border-box " type="button" style={{ borderColor: '#DBDFE8' }}>
                            TCRGTOAN0304
                            </button>
                            <button type="button" class="btn btn-lg btn-light border  dropdown-toggle-split w-15" data-bs-toggle="dropdown" style={{ borderColor: '#DBDFE8'}} >
                            <i class="fa-solid fa-x"></i>
                            </button>
                            <ul class="dropdown-menu">
                             
                            </ul>
              
                        </div>


                          </div></div>
                        <div class="col-12 col-md-6 col-lg-5  ">
                        <button type="button" class="btn btn-secondary  btn-sm mt-2 " style={{ backgroundColor: '#B9C5DC' }}>Verify With OTP</button>

                      
                        </div>
                       <div class="col-5 md-1 w-25 mx-4">
                        {/* <button type="button" class="btn btn-secondary  btn-sm mt-2 ">Verify With OTP</button> */}
                        </div>
                      
                    
                        
                      </div>

                
          </div>

                    
              </div>
              <Layer3/>

              <Layer4/>
        </div>

        
  
      </div>
    </div>
  );
}

export default Navbar;