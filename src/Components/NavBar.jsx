import { useState } from "react";
// import React from "react";
import { PiList } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [onToggle, setToggle] = useState(false);

  const toggleNavbar = () => {
    setToggle(!onToggle);
  };
  return (
    <>
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1>
            <a href="/" className="text-5xl  text-[#a8b2d1]">
              ASA
            </a>
          </h1>
          <PiList className="list  block md:hidden " onClick={toggleNavbar} />
          <div
            className={` w-full md:block md:w-auto ${
              onToggle ? "block text-center" : "hidden md:flex"
            }`}
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/home"
                  
                  className="block text-[#a8b2d1] py-2 pl-3 pr-4   rounded md:bg-transparent"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about"
                  
                  className="block text-[#a8b2d1] py-2 pl-3 pr-4  rounded "
                >
                  About_Me
                </NavLink>
              </li>
              <li>
                <NavLink to="/project"
                  
                  className="block text-[#a8b2d1] py-2 pl-3 pr-4  rounded "
                >
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact"
                  
                  className="block text-[#a8b2d1] py-2 pl-3 pr-4  rounded "
                >
                  Contact_Me
                </NavLink>
              </li>
              {/* <li>
                <NavLink to=""
                  
                  className="block text-[#a8b2d1] py-2 pl-3 pr-4  rounded "
                >
                  Home
                </NavLink>
              </li> */}
              <li>
                <NavLink to=""
                  
                  className="block  py-2 pl-3 pr-4 border border-[#64ffda] p-[7px 15px] text-[#64ffda] rounded "
                >
                  Resume
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
