import { useState } from "react";
// import React from "react";
import { PiList } from "react-icons/pi";
import { Link } from "react-router-dom";

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
                <Link to="/"
                  
                  className="block text-[#a8b2d1] py-2 pl-3 pr-4   rounded md:bg-transparent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about"
                  
                  className="block text-[#a8b2d1] py-2 pl-3 pr-4  rounded "
                >
                  About_Me
                </Link>
              </li>
              <li>
                <Link to="/project"
                  
                  className="block text-[#a8b2d1] py-2 pl-3 pr-4  rounded "
                >
                  Project
                </Link>
              </li>
              <li>
                <Link to="/contact"
                  
                  className="block text-[#a8b2d1] py-2 pl-3 pr-4  rounded "
                >
                  Contact_Me
                </Link>
              </li>
              {/* <li>
                <Link to=""
                  
                  className="block text-[#a8b2d1] py-2 pl-3 pr-4  rounded "
                >
                  Home
                </Link>
              </li> */}
              <li>
                <Link to=""
                  
                  className="block  py-2 pl-3 pr-4 border border-[#64ffda] p-[7px 15px] text-[#64ffda] rounded "
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
