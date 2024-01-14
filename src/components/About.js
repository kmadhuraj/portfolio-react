import React from "react";
import Navbar from "./Navbar";
import myimg from "./../assets/images/myimg2.jpg";
export default function About() {
    return (
        <div className="app-container">
            <Navbar />                                                                          
            <section className="container">
                <div className="about-me ">
                    <div className="section-title">
                        <h6>ABOUT</h6>
                        <p>LEARN MORE ABOUT ME</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 d-flex justify-content-center align-items-center" data-aos="fade-right">
                            <img src={myimg} className="img-fluid mx-4" alt="img" />
                            
                        </div>

                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3 className="mx-3">Web Developer</h3>
                            <p className="fst-italic mx-3">
                                Hi there I'm Madhuraj K.I proudly graduated from LBS College of Engineering, and I'm
                                currently dedicated to pursuing a career in web development. With a robust foundation in
                                computer science, I possess a wealth of knowledge that fuels my ambition in this field.
                                Beyond mere knowledge, my forte lies in problem-solving. I thrive on dissecting complex
                                challenges and architecting innovative solutions. It's this unique combination of education,
                                a passion for web development, and a strong aptitude for problem-solving that propels my
                                journey toward becoming a proficient web developer
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <strong>Birthday:</strong>{" "}
                                            <span>17 March 2000</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <strong>Website:</strong>{" "}
                                            <span>www.example.com</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <strong>Phone:</strong>{" "}
                                            <span>9539163693</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                                            <span>Kasaragod,Kerala</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <strong>Qualification:</strong>{" "}
                                            <span>B.Tech CSE ,Diploma in Computer Science</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <strong>Email:</strong>{" "}
                                            <span>madhurajmadu693@gmail.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h4 className="headings">SKILLS</h4>

                    <div className="skills">

                        <div className="skills-col">
                            <div className="skill">
                                <div className="skill-name">HTML</div>
                                <div className="skill-bar">
                                    <div className="skill-per" per="90%" style={{ maxWidth: "90%" }}></div>
                                </div>
                            </div>

                            <div className="skill">
                                <div className="skill-name">CSS</div>
                                <div className="skill-bar">
                                    <div className="skill-per" per="70%" style={{ maxWidth: "70%" }}></div>
                                </div>
                            </div>

                            <div className="skill">
                                <div className="skill-name">JS</div>
                                <div className="skill-bar">
                                    <div className="skill-per" per="60%" style={{ maxWidth: "60%" }}></div>
                                </div>
                            </div>

                            <div className="skill">
                                <div className="skill-name">React.JS</div>
                                <div className="skill-bar">
                                    <div className="skill-per" per="50%" style={{ maxWidth: "50%" }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="skills-col">
                            <div className="skill">
                                <div className="skill-name">PYTHON</div>
                                <div className="skill-bar">
                                    <div className="skill-per" per="70%" style={{ maxWidth: "70%" }}></div>
                                </div>
                            </div>

                            <div className="skill">
                                <div className="skill-name">DJANGO</div>
                                <div className="skill-bar">
                                    <div className="skill-per" per="50%" style={{ maxWidth: "50%" }}></div>
                                </div>
                            </div>

                            <div className="skill">
                                <div className="skill-name">GIT</div>
                                <div className="skill-bar">
                                    <div className="skill-per" per="50%" style={{ maxWidth: "50%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <h4 className="headings">INTREST</h4>

                    <div className="intrest">
                        <div className="box">
                            <i class="fa-solid fa-music fa-xl"></i> Music
                        </div>
                        <div className="box">
                            {" "}
                            <i class="fa-solid fa-microchip fa-xl"></i>Electronics
                        </div>
                        <div className="box">
                            {" "}
                            <i class="fa-solid fa-a fa-xl"></i>Animie
                        </div>
                        <div className="box">
                            {" "}
                            <i class="fa-solid fa-motorcycle fa-xl"></i>Bikes
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
