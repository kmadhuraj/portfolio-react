import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {

  const [navType, setNavType] = useState("collapse navbar-collapse");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setNavType("sidebar offcanvas offcanvas-end");
        
      } else {
        setNavType("collapse navbar-collapse");
      }
    };
    
    // Initial call to setNavType based on window.innerWidth
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
  <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid text-light">
    
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#offcanvasNavbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>

    {/* sidebar */}
    <div className={`offcanvas collapse ${navType}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <button type="button" className="btn-close" data-bs-dismiss="collapse" aria-label="Close"></button>
      </div>

      <div className="offcanvas-body">
          <div className="navbar-nav ">
          
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/resume">Resume</Link>
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            
          </div>
      </div>
    </div>
  </div>
</nav>


    </>
  )
}
