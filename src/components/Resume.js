import React from "react";
import Navbar from "./Navbar";

export default function Resume() {
    return (
        <div className="app-container">
            <Navbar />
            <section className="container">
                <div id="resume" className="resume about-me">
                    {/* <div className="container"> */}
                        <div className="section-title">
                            <h6>RESUME</h6>
                            <p>CHECK MY RESUME</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <h3 className="resume-title">SUMMARY</h3>
                                <div className="resume-item pb-0">
                                    <h4>Madhuraj K</h4>
                                    <p>
                                        <em>
                                            Passionate Junior Web Developer | Recent Graduate Eagerly Pursuing Web Developer
                                            Opportunities
                                        </em>
                                    </p>
                                    <p>
                                        <ul>
                                            <li>Kasaragod,Kerala</li>
                                            <li>9539163693,9778396168</li>
                                            <li>madhurajmadu693@gmail.com</li>
                                        </ul>
                                    </p>
                                </div>

                                <h3 className="resume-title">Education</h3>
                                <div className="resume-item">
                                    <h4>B Tech In Computer Science and Engineering</h4>
                                    <h5>2020-2023</h5>
                                    <p>
                                        <em>LBS College of Engineering,Kasaragod</em>
                                    </p>
                                    <p></p>
                                </div>
                                <div className="resume-item">
                                    <h4>Diploma in Computer Engineerig</h4>
                                    <h5>2017 - 2020</h5>
                                    <p>
                                        <em>Government Polytechnic College Kasaragod</em>
                                    </p>
                                    <p></p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h3 className="resume-title"> ACADEMIC PROJECTS </h3>
                                <div className="resume-item">
                                    <h4>SMS Spam Detection System Using Deep Learning </h4>
                                    <h5>10/2022 - 06/2023 </h5>
                                    <p>
                                        <em>LBS College of Engineering</em>
                                    </p>
                                    <p>
                                        <ul>
                                            <li>
                                                Sms Spam Detection System is a Web Application which is used to detect any
                                                Kind of Spam Messages. Technology used LSTM Deep learning Model,Python,Flask
                                                Framework
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                                <div className="resume-item">
                                    <h4>E-Billing and Invoice System</h4>
                                    <h5>06/2022 - 08/2022</h5>
                                    <p>
                                        <em>LBS College of Engineering</em>
                                    </p>
                                    <p>
                                        <ul>
                                            <li>
                                                E-Billing and Invoice System is a Web Application Which is developed for
                                                generating Invoices.Front end is HTML,CSS/JS and Back End is PHP and
                                                MYSQL(XAMPP-server)
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                                <div className="resume-item">
                                    <h4>Attendance Management System</h4>
                                    <h5>01/2020 - 04/2022</h5>
                                    <p>
                                        <em>Government Polytechnic College Kasaragod</em>
                                    </p>
                                    <p>
                                        <ul>
                                            <li>
                                                Developed Attendance Management System using Fingerprint Sensor(R307).And
                                                these data will Displayed on a Web Application.
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </section>
        </div>
    );
}
