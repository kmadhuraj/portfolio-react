import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
    const form = useRef();
    const [SuccesMsg,SetSuccesMessage]=useState("");
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_2739qxr", "template_lpo8opj", form.current, "vLXg6h43Te1KSo6Ja").then(
            (result) => {
                console.log(result.text);
                SetSuccesMessage("Your Message has been sent Successfully");

                setTimeout(()=>{
                    SetSuccesMessage("");
                },4000);
            },
            (error) => {
                console.log(error.text);
            }
        );
       
        
        e.target.reset()
    };

    return (
        <div className="app-container">
            <Navbar />
            <div className="container">
                <section id="contact" className="about-me contact">
                    <div className="container">
                        <div className="section-title"> 
                            <h6>CONTACT</h6>
                            <p>CONTACT ME</p>
                        </div>

                        <div className="row mt-2">
                            <div className="col-md-6 d-flex align-items-stretch">
                                <div className="info-box">
                                    <i className="bx bx-map"></i>
                                    <h3>My Address</h3>
                                    <p>Koovakkal House ,Kasaragod, Kerala</p>
                                </div>
                            </div>

                            <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                                <div className="info-box">
                                    <i className="bx bx-share-alt"></i>
                                    <h3>Social Profiles</h3>
                                    <div className="social-container mx-0">
                                        <Link to="https://www.instagram.com/itsmemk___/">
                                            <i class="fa-brands fa-instagram fa-xl"></i>
                                        </Link>
                                        <Link to="https://www.linkedin.com/in/madhuraj-k-96aa8b218/">
                                            <i class="fa-brands fa-linkedin-in fa-xl"></i>
                                        </Link>
                                        <Link to="https://github.com/kmadhuraj">
                                            <i class="fa-brands fa-github fa-xl"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 mt-4 d-flex align-items-stretch">
                                <div className="info-box">
                                    <i className="bx bx-envelope"></i>
                                    <h3>Email Me</h3>
                                    <p>madhurajmadu693@gmail.com</p>
                                </div>
                            </div>
                            <div className="col-md-6 mt-4 d-flex align-items-stretch">
                                <div className="info-box">
                                    <i className="bx bx-phone-call"></i>
                                    <h3>Mobile</h3>
                                    <p>9539163693,9778396168</p>
                                </div>
                            </div>
                        </div>

                        <form ref={form} onSubmit={sendEmail} className="">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input
                                        type="text"
                                        name="from_name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="from_email"
                                        id="email"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                    required
                                />
                            </div>
                            <div className="form-group mt-3">
                                <textarea
                                    className="form-control"
                                    name="message"
                                    rows="5"
                                    placeholder="Message"
                                    required
                                ></textarea>
                            </div>
                            <div className="my-3">
                                
                                <div className="error-message"></div>
                                <div className="sent-message">{SuccesMsg}</div>
                            </div>
                            <div className="text-center">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}
