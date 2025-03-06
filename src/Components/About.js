import React from "react";
// import Girl from "../Image/Girl.JPG";
import Anita from "../Image/Anita.jpg";
import Skills from "./Skills";

function About() {
  return (
    <div>
      <section className="about">
        <div>
          <h1 style={{ color: "#ccd6f6" }} className="heading">
            About Me
          </h1>
        </div>

        <div className="flex max-sm:flex-col gap-14">
          <div className="para w-[50%] max-sm:w-full ">
            <p>
              Hello! My name is <span className="text-[#64ffda]">Anita</span>{" "},
              I’m a frontend developer who’s all about turning ideas into
              smooth, interactive web experiences. My journey into web
              development started in 2020, and ever since, I’ve been hooked on
              the endless possibilities the web offers. I’ve learned that coding
              isn’t just about building websites—it’s about crafting experiences
              that users can connect with. From designing sleek, responsive
              layouts to adding those little touches that make a website feel
              alive, I’m passionate about making the web more beautiful and
              functional. I’m constantly exploring new frameworks, design
              trends, and technologies to keep my skills sharp and my projects
              fresh. 
            </p>
            <p>
             In 2023, I dove into the world of digital marketing, and
              I’m excited to bring this new interest into my work. I’ve started
              exploring how frontend design, content strategy, and SEO all play
              a role in driving traffic and improving user engagement. The
              synergy between web development and digital marketing has opened
              up new avenues for creating holistic, user-centered online
              experiences.
            </p>
            <p>
              When I’m not coding or learning about digital
              marketing, you’ll find me experimenting with personal projects or
              diving into the latest in web tech. If you have a vision for a
              website, app, or digital strategy, let’s make it happen—I’m always
              excited to bring new ideas to life.
            </p>
            {/* <p>Here are a few technologies I’ve been working with recently: </p> */}
            {/* <ul className="skills">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS 3</li>
            <li>Tailwind CSS</li>
            <li>BootStrap</li>
            <li>Material UI</li>
            <li>Technical Writing</li>
            <li>Digital Marketing</li>
          </ul> */}
          </div>

          <div className="image w-[30%] relative max-sm:w-full">
            <div className="inner">
              <div className="image-wrapper">
                <img src={Anita} alt="not found" className="picture" />
              </div>
            </div>
          </div>
        </div>

        <Skills />
      </section>
    </div>
  );
}
export default About;
