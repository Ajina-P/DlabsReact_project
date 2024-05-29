import React from 'react'
import logo from '../images/lab final.png'

function Navebar() {
  return (
    <>
        {/* <!-- Topbar Start --> */}
        <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small className="fa fa-map-marker-alt text-primary me-2"></small>
            <small>Kannur: kerala</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center py-3">
            <small className="far fa-clock text-primary me-2"></small>
            <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
          </div>
        </div>
        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small className="fa fa-phone-alt text-primary me-2"></small>
            <small>9564738291</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center">
            <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><i className="fab fa-twitter"></i></a>
            <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><i className="fab fa-linkedin-in"></i></a>
            <a className="btn btn-sm-square rounded-circle bg-white text-primary me-0" href=""><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}
       {/* <!-- Navbar Start --> */}
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
        <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5"></a>
        <img src={logo} alt="Logo" style={{height:'6rem',width:'6rem'}}/>
          {/* <h1 className="m-0 text-primary"><i className="far fa-hospital me-3"></i>DLabs</h1> */}
        
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" className="nav-item nav-link active">Home</a>
            <a href="/about" className="nav-item nav-link">About</a>
            <a href="/services" className="nav-item nav-link">Service</a>
            {/* <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                <a href="feature.html" className="dropdown-item">Feature</a>
                <a href="team.html" className="dropdown-item">Our Doctor</a>
                <a href="appointment.html" className="dropdown-item">Appointment</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                <a href="404.html" className="dropdown-item">404 Page</a>
              </div>
            </div> */}
            <a href="/contactus" className="nav-item nav-link">Contact</a>
          </div>
          <a href="" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Appointment<i className="fa fa-arrow-right ms-3"></i></a>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
 
      </>
  )
}

export default Navebar