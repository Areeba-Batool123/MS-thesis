import React from 'react';
import Nedlogo from './Nedlogo.jsx';

function Navbar() {
  return (
    <nav className="mx-auto p-4 fixed top-0 left-0 w-full bg-white shadow ">
      <div className="container mx-auto flex items-center justify-between">
        <Nedlogo />
        <div className="hidden md:flex space-x-8">
        <a href="#" className="relative group text-xl font-semibold text-bluish">
          Home
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-bluish scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </a>
          <a href="#" className="relative group text-xl font-semibold text-bluish">
          Announcement
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-bluish scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </a>
          <a href="#" className="relative group text-xl font-semibold text-bluish">
            Registration
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-bluish scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </a>
          <a href="#" className="relative group text-xl font-semibold text-bluish">
            About us
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-bluish scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </a>
          <a href="#" className="relative group text-xl font-semibold text-bluish">
            Search
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-bluish scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        </div>
        <div className="flex justify-center md:justify-start">
          <a href="#" className="px-5 py-2 bg-loginDarkBlue text-white font-bold text-lg rounded-full hover:bg-loginHoverBlue">Login</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
