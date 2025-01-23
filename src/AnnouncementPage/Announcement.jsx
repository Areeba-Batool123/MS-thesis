import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import "preline/preline";
import './Announcement.css'; // Import your custom CSS file


function Announcement() {
  return (
    <>   
      
      <Navbar />

      <div className="flex flex-col items-center" id='Announce'>
          <h1
            className=" max-w-full font-extrabold text-center pt-0 mx-auto text-transparent bg-clip-text ml-10 bg-gradient-to-r from-[#4A90E2] to-[#002B5C] my-1 mb-5 leading-snug"
            style={{ fontSize: '4rem', whiteSpace: 'nowrap' }} // Ensures the heading doesn't wrap
          >
            Important Announcements for MS Thesis
          </h1>
          </div>
     
<div className='main'>
{/* a1 */}
<div class="group  flex gap-x-5">
<div class="grow pb-8 group-last:pb-0">
    <h3 class="mb-1 text-xs  dark:text-neutral-400" id='black'>
      2023 - Present
    </h3>
    <p class="font-semibold text-sm  dark:text-neutral-200" id='blue'>
    Exam for MS Thesis (CT-5002) Fall 2024
    </p>
    <p class="mt-1 text-sm  dark:text-neutral-400" id='web'>
    All those students who are expected to complete their MS thesis exam  
    are required to download the MS thesis template for the final 
    submission from the link <a href="https://cct.neduet.edu.pk/downloads" target='__blank'> https://cct.neduet.edu.pk/downloads  </a> 
    The students also have to submit the Turnitin report along with the thesis.
    </p>
  </div>
 </div>
{/* a2 */}
<div class="group  flex gap-x-5">
<div class="grow pb-8 group-last:pb-0">
    <h3 class="mb-1 text-xs dark:text-neutral-400" id='black' >
      2021 - 2023
    </h3>
    <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200" id='blue'>
    First Semester Evaluation of Currently Enrolled MS Thesis Students
    </p>
    <p  class="mt-1 text-sm  dark:text-neutral-400" id='web'>
    All those students who are expected to complete the first semester of 
    MS Thesis by the end of this semester are required to submit a Semester 
    Evaluation Report of MS Thesis to their respective supervisors for 
    which the prescribed proforma is available at 
    <a href="https://cct.neduet.edu.pk/downloads" target='__blank'> https://cct.neduet.edu.pk/downloads </a>
      Deadline is 6th December  2024. 
    </p>
  </div>
</div>


{/* a3*/}
<div class="group  flex gap-x-5">
<div class="grow pb-8 group-last:pb-0">
    <h3 class="mb-1 text-xs  dark:text-neutral-400" id='black'>
      2011 - 2021
    </h3>
    <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200" id='blue'>
    New MS Thesis (CT-5002) Proposals for the next semester
    </p>
    <p class="mt-1 text-sm  dark:text-neutral-400" id='web'>
    Proposal submission deadline: 17th January  2025.
    All those students who are willing to register for the CT-5002 
    Thesis are advised to discuss their thesis proposal with any 
    faculty member of the department.
    </p>
  </div>
 
</div>



<div class="group  flex gap-x-5"> 
</div>
</div>

      <Footer />
      <script src="./node_modules/preline/dist/preline.js"></script>
      
    </>
  );
};
<script src="./node_modules/preline/dist/preline.js"></script>
export default Announcement;
