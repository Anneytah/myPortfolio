import {useState} from "react";
import React from "react";
import { PiList } from "react-icons/pi";
// import "App.css";

const NavBars = () => {
     
     const [onToggle, setToggle] = useState(false)

     const toggleNavbar = () => {
         setToggle(!onToggle) 
     }


  return (
    <div>
      <nav>
        <div className="nav-div flex flex-col md:flex-row">
        <div className="nav-bar">
          <div className="logo0 flex justify-around mt-5 gap-20 ">
            <h1>
              <a href="/" className="text-5xl"  >ASA</a>
            </h1>
            <PiList className="list text-white block md:hidden " onClick={toggleNavbar}/>
          </div>
{/* style={{fontSize: 50}} */}
        <div className="" >

           {/* {onToggle ? "ON" : "OFF"} */}
           <div className={`nav-link ${onToggle ? "block" : "hidden md:flex"}`} >
            <ul className={`liste ${onToggle ? "block" : "hidden md:flex"}`}>
              <li><a href="/" className="nav-linker">Home</a></li>
              <li><a href="/" className="nav-linker">About</a></li>
              <li><a href="/" className="nav-linker">Project</a></li>
              <li><a href="/" className="nav-linker">Contact</a></li>
              <li><a href="/" className="nav-linker">Home</a></li>
            </ul>
            <div >
              <a href="/" className="resume">Resume</a>
            </div>
          </div>
          </div>
            
        </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBars;
