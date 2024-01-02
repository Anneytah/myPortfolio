import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";

function Body() {
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
            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" className="icon">
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

      <main className="content">
        <section className="contain">
          <div>
            <h1 style={{ color: "#64ffda", fontSize: 18, marginTop: 150}}>Hi, my name is</h1>
          </div>
          <div>
            <h2 style={{ margin: 0, color: "#ccd6f6" }} className="namee">
              <b>Aniago Somtochukwu Anita.</b>
            </h2>
          </div>
          <div style={{marginTop: 10}}>
            <h3 style={{ fontSize: 60, margin: 0, color: "#8892b0" }} className="namee">I build things for the web.</h3>
          </div>
          <div style={{minWidth: 10}}>
            <p style={{marginTop: 20, color: "#8892b0", fontSize: 18, lineHeight: 1.3}}>
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at Upstatement.
            </p>
          </div>
          <div style={{marginTop: 50}}>
            <a href="/" className="course-link">Check out my course!</a>
          </div>

        <About/>
        <Project/>
        <Contact/>
        </section>
      </main>
    </div>
  );
}
export default Body;
