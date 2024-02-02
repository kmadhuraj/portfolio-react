// import React from "react";
import React, { useEffect } from 'react';
import Typed from 'typed.js';
// import myimg from "./../assets/images/myimg2.jpg"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export default function Home() {

    useEffect(() => {
        const typedElement = document.querySelector('.typed');
    
        if (typedElement) {
          const typedStrings = typedElement.getAttribute('data-typed-items').split(',');
    
          const options = {
            strings: typedStrings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
          };
    
          const typed = new Typed('.typed', options);
    
          return () => {
            // Cleanup the Typed instance on component unmount
            typed.destroy();
          };
        }
      }, []);
    return (
        <>
            <div className="home-container">
                <div className="text">
                    <h1>Madhuraj K</h1>
                    {/* <h5>Im Passionate about Front-end Web Developer </h5> */}
                    <h5>I'm Passionate about <span class="typed" data-typed-items="Front-end Web Developer, Full Stack Web Developer"></span></h5>
                </div>

                <div className="nav">
                     <Navbar/>
                </div>

                <div className="social-container">
                <Link to="https://www.instagram.com/itsmemk___/"><i class="fa-brands fa-instagram fa-xl"></i></Link>
                <Link to="https://www.linkedin.com/in/madhuraj-k-96aa8b218/"><i class="fa-brands fa-linkedin-in fa-xl"></i></Link>
                <Link to="https://github.com/kmadhuraj"><i class="fa-brands fa-github fa-xl"></i></Link>
                </div>

            </div>
        </>
    );
}
