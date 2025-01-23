import React from 'react';
import Navbar from './Navbar.jsx';
import './Registration.css'; // Import your custom CSS file

function Registration() {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

    <Navbar />

    <div>
      <header>
      </header>
      <div className="wrapper">
        <main>
          <div className="info">
            <h3>Registartion</h3>
          </div>
          <form action="#" method="GET">
            <fieldset className="contact-info">
              <div className="container">
                <legend class="Legend" >Registration Information</legend>
                <p>
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="date"
                    name="user_date"
                    placeholder="Required"
                    title="Please fill out this field"
                    required
                />
                </p>
                <p>
                <label htmlFor="time">Time</label>
                <input
                    type="time"
                    id="time"
                    name="user_time"
                    placeholder="Required"
                    title="Please fill out this field"
                    required
                />
                </p>
                <p>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="Required"
                    title="Please fill out this field"
                    required
                  />
                </p>
                <p>
                  <label htmlFor="depart">Department Name</label>
                  <input
                    type="text"
                    id="name"
                    name="depart_name"
                    placeholder="Required"
                    title="Please fill out this field"
                    required
                  />
                </p>
                <p>
                  <label htmlFor="program">Program</label>
                  <input
                    type="text"
                    id="name"
                    name="program_name"
                    placeholder="Required"
                    title="Please fill out this field"
                    required
                  />
                </p>
                <p>
                  <label htmlFor="Roll">Roll Number</label>
                  <input
                    type="text"
                    id="name"
                    name="roll_no"
                    placeholder="Required"
                    title="Please fill out this field"
                    required
                  />
                </p>
                <p>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="Required"
                    title="Please fill out this field"
                    required
                  />
                </p>
                <p>
                  <label htmlFor="address">Thesis Title</label>
                  <input type="text" id="address" name="user_address" />
                </p>
                <p>
                  <label htmlFor="state">Supervisor</label>
                  <select  name="user_state" class="mb-3">
                    <option value="state" id="state">Choose Supervisor</option>
                    <option value="abc">ABC</option>
                    <option value="def">DEF</option>
                    <option value="geh">GEH</option>
                    <option value="ijk">IJK</option>
                    <option value="ftg">FTG</option>
                    <option value="hjk">HJK</option>
                    <option value="kil">KIL</option>
                    <option value="tyu">TYU</option>
                    <option value="ewt">EWT</option>
                    <option value="yrt">YRT</option>
                    <option value="sef">SEF</option>
                    <option value="bhj">BHJ</option>
                    <option value="jki">JKI</option>
                    <option value="lop">LOP</option>
                    <option value="pol">POL</option>
                    <option value="rty">RTY</option>
                    <option value="wer">WER</option>
                    <option value="aws">AWS</option>
                    <option value="upe">UPE</option>
                  </select>
                </p>
                <p>
                  <label htmlFor="zipcode">Thesis No.</label>
                  <input type="number" id="zipcode" name="user_zipcode" />
                </p>
                <div className="mt-6">
                <label htmlFor="drive" className="block text-white mb-2">Upload Your Drive</label>
                <input 
                    type="url"
                    id="drive"
                    name="user_drive"
                    placeholder="Enter your Google Drive link"
                    className="p-2 w-full rounded-md bg-gray-800 text-white border border-gray-600"
                    required
                />
            </div>
              </div>
            </fieldset>

            {/* <fieldset className="newsletter">
              <div className="container">
                <legend>Newsletter</legend>
                <p>Select the newsletter you would like to receive</p>

                <div className="checkboxes">
                  <p>
                    <input type="checkbox" id="html_news" name="news" />
                    <label htmlFor="html_news">HTML News</label>
                  </p>
                  <p>
                    <input type="checkbox" id="css_news" name="news" />
                    <label htmlFor="css_news">CSS News</label>
                  </p>
                  <p>
                    <input type="checkbox" id="js_news" name="news" />
                    <label htmlFor="js_news">JavaScript News</label>
                  </p>
                </div>

                <p>Newsletter format</p>
                <div className="radio-btn">
                  <p>
                    <input type="radio" id="html" value="html" name="format" />
                    <label htmlFor="html">HTML</label>
                  </p>
                  <p>
                    <input type="radio" id="plain_text" value="plain_text" name="format" />
                    <label htmlFor="plain_text">Plain text</label>
                  </p>
                </div>

                <p>How did you find us?</p>
                <p>
                  <select>
                    <option value="PickOne">Pick One</option>
                    <option value="Google">Google</option>
                    <option value="Bing">Bing</option>
                    <option value="Social Site">Social Site</option>
                    <option value="Friends/Workplace">Friends/Workplace</option>
                  </select>
                </p>

                <p>Other topics you would like to hear about</p>
                <p>
                  <textarea id="interest" name="user_interest"></textarea> <br />
                </p>
              </div>
            </fieldset> */}
          </form>
          <div className="footer">
            <button type="submit" className="btn">Submit</button>
            <p>Thesis Management System</p>
          </div>
        </main>
      </div>
    </div>
    </>
  );
};

export default Registration;
