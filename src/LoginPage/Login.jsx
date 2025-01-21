import React from 'react';
import Navbar from './Navbar.jsx';
import './Login.css'; // Import your custom CSS file
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css';
// import 'https://cdn.jsdelivr.net/npm/material-icons@1.13.12/iconfont/material-icons.min.css';

function Login() {
  return (
    <>
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
                            {/* <i className="input-icon material-icons">alternate_email</i> */}
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-style"
                              placeholder="Your Password"
                              autoComplete="off"
                            />
                            {/* <i className="input-icon material-icons">lock</i> */}
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
                            {/* <i className="input-icon material-icons">perm_identity</i> */}
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-style"
                              placeholder="Your Email"
                              autoComplete="off"
                            />
                            {/* <i className="input-icon material-icons">alternate_email</i> */}
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-style"
                              placeholder="Your Password"
                              autoComplete="off"
                            />
                            {/* <i className="input-icon material-icons">lock</i> */}
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
    </>
  );
};

export default Login;
