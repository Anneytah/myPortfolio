import { useState } from "react";
// import React from "react";
import { PiList } from "react-icons/pi";
// import { Link } from "react-router-dom";
// import { Link } from 'react-scroll';

import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";

function NavBar() {
  const [onToggle, setToggle] = useState(false);

  const toggleNavbar = () => {
    setToggle(!onToggle);
  };
  return (
    <>
      <nav>
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
                <RouterLink
                  to="/"
                  className="block text-[#a8b2d1] py-2 pl-3 pr-4 md:bg-transparent"
                >
                  Home
                </RouterLink>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} offset={-70} className="block cursor-pointer text-[#a8b2d1] py-2 pl-3 pr-4">
                  About_Me
                </Link>
              </li>
              <li>
                <Link to="project" smooth={true} duration={500} offset={-70} className="block cursor-pointer text-[#a8b2d1] py-2 pl-3 pr-4">
                  Project
                </Link>
              </li>
              <li>
                <RouterLink
                  to="/contact"
                  className="block text-[#a8b2d1] py-2 pl-3 pr-4"
                >
                  Contact_Me
                </RouterLink>
              </li>
              {/* <li>
                <Link to=""
                  
                  className="block text-[#a8b2d1] py-2 pl-3 pr-4"
                >
                  Home
                </Link>
              </li> */}
              <li>
                <a
                  href="https://1drv.ms/b/c/11ab9898e882778e/ETIj_HOME2NOgD4WA_QhfdQBY6uT-r6jnnbm2LfAlEoVeA?e=rArySd"
                  className="block  py-2 pl-3 pr-4 border border-[#64ffda] p-[7px 15px] text-[#64ffda] rounded "
                   target="_blank" rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
