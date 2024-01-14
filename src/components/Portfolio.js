import React from "react";
import Navbar from "./Navbar";
import sms from "./../assets/images/sms-spam.jpeg";
import invoice from "./../assets/images/invoice.jpg";
import textutils from "./../assets/images/text-utils.png";
import netflix from "./../assets/images/netflix.jpg";
import todo from "./../assets/images/todo.png";
import ielts from "./../assets/images/ielts.png"
// import { Link } from "react-router-dom";

export default function Portfolio() {
    return (
        <div className="app-container">
            <Navbar />
            <div className="container">
                <section id="portfolio" className="">
                    <div className="container about-me">
                    <div className="section-title">
                                  <h6>PORTFOLIO</h6>
                                  <p>CHECKOUT MY WORK</p>
                              </div>
                    <div className="container mt-3">
                          <div className="row">
                              <div className="col-lg-4 mt-4">
                                  <div className="card mx-auto">
                                    <img className="card-img-top" src={sms}  alt="Card" />
                                      
                                      <div className="card-body ">
                                          <h4 className="card-title">SMS Spam Detection System</h4>
                                          <p className="card-text">It is a Web application used to detect Spam Messages.Developed using Deep Learning tehniques(LSTM)</p>
                                          <div className="text-center">
                                              {/* <Link to="#" className="btn btn-success">Link</Link> */}
                                          </div>
                                      </div>
                                  </div>
                              </div>


                                  <div className="col-lg-4 mt-4">
                                      <div className="card portfolioContent">
                                          <img className="card-img-top" src={invoice} alt="Card" />
                                          <div className="card-body">
                                              <h4 className="card-title">Invoice Management System </h4>
                                              <p className="card-text">Simple Invoice management web application.Developed using PHP and XAMPP</p>
                                              <div className="text-center">
                                                  {/* <Link to="#" className="btn btn-success">Link</Link> */}
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-lg-4 mt-4">
                                      <div className="card portfolioContent">
                                          <img className="card-img-top" src={textutils} alt="Card" />
                                          <div className="card-body">
                                              <h4 className="card-title">TextUtils </h4>
                                              <p className="card-text">A web application used to manipulate and alter the texts.Developed using React.Js</p>
                                              <div className="text-center">
                                                  {/* <Link to="#" className="btn btn-success">Link</Link> */}
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-lg-4 mt-4">
                                      <div className="card portfolioContent">
                                          <img className="card-img-top" src={netflix} alt="Card" />
                                          <div className="card-body">
                                              <h4 className="card-title">Netflix clone</h4>
                                              <p className="card-text">Netflix landing page clone </p>
                                              <div className="text-center">
                                                  {/* <Link to="#" className="btn btn-success">Link</Link> */}
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                
                                  <div className="col-lg-4 mt-4">
                                      <div className="card portfolioContent">
                                          <img className="card-img-top" src={todo} alt="Card" />
                                          <div className="card-body">
                                              <h4 className="card-title">ToDo list</h4>
                                              <p className="card-text">Simple Todo List Web App</p>
                                              <div className="text-center">
                                                  {/* <Link to="#" className="btn btn-success">Link</Link> */}
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-lg-4 mt-4">
                                      <div className="card portfolioContent">
                                          <img className="card-img-top" src={ielts} alt="Card" />
                                          <div className="card-body">
                                              <h4 className="card-title">IELTS</h4>
                                              <p className="card-text">IELTS Web UI design using Figma</p>
                                              <div className="text-center">
                                                  {/* <Link to="#" className="btn btn-success">Link</Link> */}
                                              </div>
                                          </div>
                                      </div>
                                  </div>


                              </div>

                                     
                                 
                        
                    </div>
                    </div>
                </section>


    
      

     

   




    </div>
</div>
    );
}
