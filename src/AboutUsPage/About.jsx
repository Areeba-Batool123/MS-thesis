import React from 'react';
import FacultyTable from './FacultyTable.jsx';
import './About.css';
import './AboutR.css';
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  return (
    <>
    <div className="About">
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container bottomContainer">
        <div className="ultimateImg">
          <img className="mainImg" src="nedpic.webp" alt="Main" />
          <div className="purpleBox">
            {/* Uncomment and adjust if additional content is added */}
            {/* <p className="purpleText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              purus lectus viverra in semper nec pretium mus.
            </p>
            <img className="stars" src="https://example.com/stars.svg" alt="Stars" /> */}
          </div>
        </div>
        
        <div className="allText bottomText">
          <p className="text-blk headingText ">About Us</p>
          <p className="text-blk description" 
          style={{ textAlign: 'left' }}>
          The NED University of Engineering & Technology, was established in
          March 1977 under an act of the Provincial Assembly of Sindh 
          after upgrading of the former NED Government Engineering College,
          which was set up in 1921. The NED University is thus one of the
          oldest institution in Pakistan for teaching and producing 
          Engineering graduates. Prior to this, the D.J.Sindh College
          , used to run classes to train subordinates for the Sindh 
          P.W.D., the Municipalities and Local Boards.
         </p>
         <a className="learn" href="https://www.neduet.edu.pk/our_university" target='__blank'>
            Learn More
          </a>
          
        </div>

        <div>
          <p className="text-blk subHeadingText "
          style={{ textAlign: 'left' }}
          >
            Thesis Supervisors
          </p>
          <p className="text-blk description"
          style={{ textAlign: 'left' }}>
            Students are advised to contact and discuss their projects ideas
            with the following faculty members with  respect to their areas 
            of specialisation and research interest:
          </p>
          <FacultyTable />
          <button
           onClick={() => navigate("/")}
          className="explore" >
            Home
          </button>
        </div>
      </div>
    </div> 
    </div>
    </>
  );
}

export default About;
