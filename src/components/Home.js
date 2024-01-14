import React from "react";
// import myimg from "./../assets/images/myimg2.jpg"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export default function Home() {
    return (
        <>
            <div className="home-container">
                
                {/* <img src={myimg} alt="img" /> */}
                <div className="text">
                    <h1>Madhuraj K</h1>
                    <h5>Im Passionate about Front-end Web Developer </h5>
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
