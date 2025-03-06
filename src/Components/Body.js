// import React from "react";
import React, { useEffect, useState } from "react";
import { TbBrandGithub } from "react-icons/tb";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";

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
    <div className="body">
      <div aria-orientation="vertical" className="left">
        <ul className="lists">
          <li>
            <a href="https://github.com/Anneytah" className="icon">
              <TbBrandGithub />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/anney_ta/" className="icon">
              <AiOutlineInstagram />
            </a>
          </li>
          <li>
            <a href="/" className="icon">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="https://web.facebook.com/somto.aniago.1" className="icon">
              <FiFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
              className="icon"
            >
              <FiLinkedin />
            </a>
          </li>
        </ul>
      </div>

      <div aria-orientation="vertical" className="right">
        <div className="column">
          <a href="/">aniagoanita@gmail.com</a>
        </div>
      </div>

      <main className="content overflow-hidden">
        <section className="contain">
          <div>
            <h1 style={{ color: "#64ffda", fontSize: 18, marginTop: 300 }}>
              Hi, my name is
            </h1>
          </div>
          <div>
            <h2
              style={{ margin: 0, color: "#ccd6f6" }}
              className="namee text-7xl max-sm:text-5xl"
            >
              <b>Aniago Somtochukwu Anita.</b>
            </h2>
          </div>
          <div style={{ marginTop: 10 }}>
            <h3
              style={{ margin: 0, color: "#8892b0" }}
              className="text-5xl max-sm:text-3xl"
            >
              Crafting Beautiful Web Experiences.
            </h3>
          </div>
          <div style={{ minWidth: 10 }}>
            <p
              style={{
                marginTop: 20,
                color: "#8892b0",
                fontSize: 18,
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
            <a href="/" className="course-link">
              Check out my Projects !
            </a>
          </div>

          <About />
          <Project />
          <Contact />
        </section>
      </main>

      <div
        className="fixed w-14 h-14 border border-white rounded-full pointer-events-none"
        style={{
          top: position.y - 20,
          left: position.x - 20,
        }}
      ></div>
    </div>
  );
}
export default Body;
