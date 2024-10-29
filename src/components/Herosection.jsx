import React from "react";
import './HeroSection.css';

function Herosection() {
  return (
    <div className="flex flex-col-reverse md:flex-row mt-0 items-center mx-auto space-y-0 md:space-y-0 h-screen">
      <div className="flex flex-col items-center md:w-1/2 mb-20 -my-11">

        {/* Combined Thesis Management System Heading and Paragraph in Flex */}
        <div className="flex flex-col items-center">
          <h1
            className="relative max-w-full font-extrabold text-center pt-0 mx-auto text-transparent bg-clip-text ml-10 bg-gradient-to-r from-[#4A90E2] to-[#002B5C] my-1 mb-5 leading-snug"
            style={{ fontSize: '4rem', whiteSpace: 'nowrap' }} // Ensures the heading doesn't wrap
          >
            Thesis Management System
          </h1>

          <p className="max-w-lg mx-14 mb-14 font-semibold text-gray-500 mr-96"
            style={{ lineHeight: "1.5", fontSize: "20px" }}
          >
            Streamline your thesis process with our comprehensive management system. From topic selection to final submission, we've got you covered.
          </p>
        </div>

        {/* Call to Action */}
        <div className="md:text-left max-w-sm mr-96 font-bold flex items-start justify-start">
  <a href="#" 
     className="text-blue-800 underline p-4 hover:bg-gradient-to-r from-[#4A90E2] to-[#002B5C] hover:rounded-full hover:text-white"
     style={{ maxWidth: "500px", lineHeight: '1.4', fontSize: '22px', wordSpacing: '1px',fontStyle:'italic' }}>
    I would like to search for a topic 
    
    <span className="ml-2">➔</span>
  </a>
  
</div>
      </div>

      {/* Other components can be added here */}
      <div className="grid grid-cols-2 gap-6">
      <div className="stat-box ">
          <p className="text-gray-700 font-bold text-3xl select-none">5000+ students</p>
        </div>

        <div
          className="stat-box   "
       
        >
          <p className="text-gray-700 font-bold text-3xl select-none">95% success rate</p>
        </div>

        <div
          className="stat-box"
         
        >
          <p className="text-gray-700 font-bold text-3xl select-none">50+ programs</p>
        </div>

        <div
          className="stat-box"
         
        >
          <p className="text-gray-700 font-bold text-3xl select-none">90% satisfaction</p>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
