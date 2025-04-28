import React from "react";
// import Girl from "../Image/Girl.JPG";
import Skills from "./Skills";
import Anita from "../Image/Anita.jpg";

function About() {
  return (
    <div>
      <section className="about">
        <div>
          <h1 style={{ color: "#ccd6f6" }} className="heading text-[32px]">
            About Me
          </h1>
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-14">
          <div className="para lg:w-[50%] text-[#a8b2d1] max-sm:w-full lg:text-[15px] text-sm">
            <p>
            I'm a frontend developer passionate about turning creative ideas into interactive, user-friendly web experiences. I enjoy bringing designs to life with clean, responsive code, and I'm constantly inspired by the way technology can solve real-world problems.
            </p>
            <p>
            My journey in tech has been driven by curiosity, consistency, and a love for learning. Every project has taught me something new, whether it's about problem-solving, design thinking, or user experience.
            </p>
            <p>
            Currently, I'm expanding my skill set by learning TypeScript through a Udemy course. I'm sharpening my ability to write safer, more scalable code, and getting a better grasp of types, interfaces, and component reusability in React projects.

            <br/>

            Beyond coding, I enjoy collaborating with others, learning from fellow developers, solving problems and pushing myself to improve with every line of code I write. 
            </p>
           

           <div>
            <h1 className="text-2xl py-10 pb-0 font-semibold">Languages</h1>
            <ul className=" text-[#a8b2d1]">
              <li className="text-[#64ffda] px-6 py-2">English (Professional)</li>
            </ul>
           </div>
          </div>

          <div className="image w-[30%] relative max-sm:w-full">
            <div className="w-fit relative rounded-md bg-[#64ffda]">
              <div className="image-wrapper rounded-md relative">
                <img src={Anita} alt="not found" className="lg:max-w-[22rem]" />
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
