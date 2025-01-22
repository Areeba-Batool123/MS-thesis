import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './Login.css'; // Import your custom CSS file

function Login() {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

    <Navbar />
      <section>
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="left">
              <span className="line"></span>
              <h2  className="   text-gradient-to-r from-[#4A90E2] to-[#002B5C] my-1 mb-5 leading-snug">
              Thesis Management System <br /> 
              </h2>
              <a href="#" className="btn">
                Home
              </a>
             
            </div>
            <div className="right">
              <div className="form">
                <div className="text-center">
                  <h6>
                    <span>Log In</span> <span>Sign Up</span>
                  </h6>
                  <input type="checkbox" className="checkbox" id="reg-log" />
                  <label htmlFor="reg-log"></label>
                  <div className="card-3d-wrap">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <h4 className="heading">Log In</h4>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-style"
                              placeholder="Your Email"
                              autoComplete="off"
                            />
                            <i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-style"
                              placeholder="Your Password"
                              autoComplete="off"
                            />
                            <i class="fa fa-unlock-alt fa-2x" aria-hidden="true"></i>
                          </div>
                          <a href="#" className="btns">
                            Submit
                          </a>
                          <p className="text-center">
                            <a href="#" className="link">
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="center-wrap">
                          <h4 className="heading">Sign Up</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-style"
                              placeholder="Your Name"
                              autoComplete="off"
                            />
                           <i class="fa fa-user-o fa-2x" aria-hidden="true"></i>
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-style"
                              placeholder="Your Email"
                              autoComplete="off"
                            />
                            <i class="fa fa-envelope-o fa-2x " aria-hidden="true"></i>
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-style"
                              placeholder="Your Password"
                              autoComplete="off"
                            />
                           <i class="fa fa-unlock-alt fa-2x" aria-hidden="true"></i>
                          </div>
                          <a href="#" className="btns">
                            Submit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
