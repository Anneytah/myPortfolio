import React from "react";
import Girl from "../Image/Girl.JPG";

function About() {
  return (
    <div>
      <section className="about">
        <div>
          <h1 style={{ color: "#ccd6f6" }} className="heading">
            About Me
          </h1>
        </div>

        <div className="about-divide">
          <div className="para">
            <p>
              Hello! My name is Anita and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
            <p>
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node & React.
            </p>
            <p>Here are a few technologies I’ve been working with recently: </p>
          <ul className="skills">
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>BootStrap</li>
            <li>Material UI</li>
            <li>Tailwind CSS</li>
          </ul>
          </div>
          
          <div className="image">
            <div className="inner">
              <div className="image-wrapper">
              <img src={Girl} alt="not found" className="picture"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
