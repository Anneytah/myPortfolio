// import React from "react";
import React, { useEffect, useState } from "react";
import { TbBrandGithub } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import NavBars from "./NavBar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Body() {
  
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update the cursor's position whenever it moves
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-[#282c34]">
      <NavBars/>
      <div aria-orientation="vertical" className="left lg:fixed lg:inline hidden w-[15%] bottom-0 left-0 right-auto text-[#a8b2d1]">
        <ul className="lists text-4xl text-[#a8b2d1]">
          <li className="py-2 hover:text-[#64ffda]">
            <a href="https://github.com/Anneytah" className="icon"  target="_blank" rel="noreferrer">
              <TbBrandGithub />
            </a>
          </li>
          <li className="py-2 hover:text-[#64ffda]">
            <a href="mailto:aniagoanita@gmail.com?subject=Portfolio%20Inquiry&body=Hi%2C%20my%20name%20is%20%5BYour%20Name%5D.%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20further." className="icon"  target="_blank" rel="noreferrer">
            <HiOutlineMail />
            </a>
          </li>
          <li className="py-2 hover:text-[#64ffda]">
            <a href="https://x.com/anney_ta" className="icon" target="_blank" rel="noreferrer">
              <BsTwitter />
            </a>
          </li>
          <li className="py-2 hover:text-[#64ffda]">
            <a href="https://wa.me/2348081005275?text=Hello%20bud%2C%20I%20just%20viewed%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20working%20with%20you.%20Could%20we%20chat%20more%3F" className="icon"  target="_blank" rel="noreferrer">
            <BsWhatsapp />
            </a>
          </li>
          <li className="py-2 hover:text-[#64ffda]">
            <a
              href="https://www.linkedin.com/in/aniago-anita/"
              className="icon"
               target="_blank" rel="noreferrer"
            >
              <FiLinkedin />
            </a>
          </li>
        </ul>
      </div>

      <div aria-orientation="vertical" className="right lg:fixed lg:inline hidden w-[18%] bottom-0 left-auto right-0 text-[#a8b2d1]">
        <div className="column">
          <a href="mailto:aniagoanita@gmail.com?subject=Portfolio%20Inquiry&body=Hi%2C%20my%20name%20is%20%5BYour%20Name%5D.%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20further." target="_blank" rel="noreferrer">aniagoanita@gmail.com</a>
        </div>
      </div>

      <main className="lg:p-52 lg:pt-0 p-9 overflow-hidden">
        <section>
          <div>
            <h1 className="pb-2 text-sm lg:mt-64 mt-28 text-[#64ffda]" >
              Hi, my name is
            </h1>
          </div>
          <div>
            <h2
              className="pb-5 text-7xl max-sm:text-3xl text-[#ccd6f6] "
            >
              <b>Aniago Somtochukwu Anita.</b>
            </h2>
          </div>
          <div>
            <h3
              className="text-4xl pb-0 mt-0 max-sm:text-2xl text-[#8892b0]"
            >
              Designing Interfaces That Speak to Users.
            </h3>
          </div>
          <div style={{ minWidth: 10 }}>
            <p className="text-[#8892b0] mt-3 lg:text-[15px] text-sm max-sm:w-full"
              style={{
                lineHeight: 1.3,
              }}
            >
              I’m a frontend developer who’s
              passionate about crafting beautiful, dynamic web experiences that
              wow users. With every line of code, I turn ideas into interactive,
              visually stunning websites that are fast, responsive, and designed
              to impress!
            </p>
          </div>
          <div style={{ marginTop: 50 }}>
            <Link to="/project">     
            <a href="/" className="course-link">
              Check out my Projects !
            </a>
            </Link>
          </div>

          <About />
          <Project />
          <Contact />

          <div className="inline lg:hidden">
            <Footer />
          </div>
        </section>
      </main>

      <div
        className="fixed w-14 h-14 hidden lg:inline border border-white rounded-full pointer-events-none"
        style={{
          top: position.y - 20,
          left: position.x - 20,
        }}
      ></div>
    </div>
  );
}
export default Body;
