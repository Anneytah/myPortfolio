import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BsBootstrapFill } from "react-icons/bs";
import { TbBrandGithub } from "react-icons/tb";
import { MdLaptopMac } from "react-icons/md";
import { BiLogoTypescript } from "react-icons/bi";
import ScrollFadeIn from './ScrollFadeIn';
// import { FaPen } from "react-icons/fa";



const skills = [
    {
        id: "1",
        name: "React",
        icon: <FaReact />
    },
    {
        id: "2",
        name: "Tailwind CSS",
        icon: <SiTailwindcss />
    },
    {
        id: "3",
        name: "Html",
        icon: <FaHtml5 />
    },
    {
        id: "4",
        name: "CSS 3",
        icon: <FaCss3Alt />
    },
    {
        id: "5",
        name: "JavaScript",
        icon: <RiJavascriptFill />
    },
    {
        id: "6",
        name: "Bootstrap",
        icon: <BsBootstrapFill />
    },
    {
        id: "7",
        name: "GitHub",
        icon: <TbBrandGithub />
    },
    {
        id: "8",
        name: "TypeScript",
        icon: <BiLogoTypescript />
    },
    {
        id: "9",
        name: "Responsive Development ",
        icon: <MdLaptopMac />
    },
]


const Skills = () => {
  return (
    //  <section className="py-12 ">
    //   <div className="container mx-auto">
    //     <h2 className="text-2xl text-center mb-8">Skills</h2>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    //       {skills.map((skill, index) => (
    //         <div
    //           key={index}
    //           className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out text-center"
    //         >
    //           <img
    //             src={skill.icon}
    //             alt={`${skill.name} Icon`}
    //             className="mx-auto mb-4 w-16 h-16"
    //           />
    //           <p className="text-xl font-semibold">{skill.name}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
<ScrollFadeIn>
       <section className="py-12 mt-24">
      <div className="container mx-auto">
        <h2 className="text-3xl mb-8 text-[#ccd6f6] project">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#343842] py-5 lg:py-10 rounded-lg shadow-lg hover:shadow-2xl hover:text-green-300 hover:border-2 hover:border-green-300 transform hover:-translate-y-2 transition duration-300 ease-in-out text-center"
            >
              {/* <img
                src={skill.icon}
                alt={`${skill.name} Icon`}
                className="mx-auto mb-4 w-16 h-16"
              /> */}
              <p className="w-5 mx-auto text-[#ccd6f6] py-2 lg:text-lg text-sm"> {skill.icon}</p>
              <p className="lg:text-xl text-sm font-semibold text-[#ccd6f6]">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </ScrollFadeIn>
  )
}

export default Skills