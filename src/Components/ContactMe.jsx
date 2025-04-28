import React from "react";
import NavBars from "./NavBar";
import Anime from "../Image/Anime.jpeg";
import "../App.css";
import { BsPersonHeart } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineWifiCalling } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import Footer from "./Footer";

const ContactMe = () => {
  return (
    <div className="bg-[#282c34] pb-10 mt-6 overflow-hidden">
      <NavBars />
      <div className="mx-auto mt-36 max-w-6xl">
        <h2 className="text-center text-4xl py-2">
          <span className="text-[#ccd6f6]">Get In</span>{" "}
          <span className="text-[#64ffda]">Touch</span>
        </h2>
        <p className="text-center text-[#8892b0]">
          Got a question or want to collaborate? I'm just a message away—let’s
          create something amazing together!
        </p>

        <div className="gap-14 lg:flex  p-5 mx-auto mt-10">
          <div className="rounded-md bg-[#373b44] w-full">
            <form className="m-5 p-3">
              <p className="text-[#ccd6f6] text-sm">Name</p>
              <input
                type="text"
                id=""
                placeholder="Your Name"
                className="w-full text-sm p-2.5 rounded-md my-3 px-4 bg-[#464a55] text-[#ccd6f6] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
              />
              <p className="m-0 text-[#ccd6f6] text-sm">Email</p>

              <input
                type="email"
                id=""
                placeholder="your.email@example.com"
                className="w-full text-sm p-2.5 rounded-md bg-[#464a55] px-4 my-3 text-[#ccd6f6]  focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
              />
              <p className="m-0 text-[#ccd6f6] text-sm">Message</p>

              <textarea placeholder="Your message" className="w-full text-sm h-32 p-2.5 rounded-md bg-[#464a55] px-4 my-3 text-[#ccd6f6]  focus:outline-none focus:ring-2 focus:ring-[#64ffda] ">
                
              </textarea>

              <input type="submit" value="Send Message" className="w-full  p-2.5 rounded-md px-4 my-3 bg-[#64ffda] cursor-pointer hover:bg-[#40f0c7]"/>
            </form>
          </div>



          <div className="rounded-md w-full opacity-50" style={{ backgroundImage: `url(${Anime})`, backgroundSize:'cover', backgroundPosition:'center', height:'100%', width:'100%'}}>
            <div className="m-5 p-3">
              <h1 className="text-center font-semibold text-white text-2xl"> Contact Info</h1>
             
             <div className="lg:mx-8 lg:my-4 lg:p-5">
                <div className="flex p-4">
                  <div className="text-white font-bold text-5xl">
                  <BsPersonHeart />
                  </div>
                    <div className="text-white text-sm lg:px-5 px-2">
                        <p>Name</p>
                        <p>Aniago Anita</p>
                    </div>
                </div>
                <div className="flex p-4">
                  <div className="text-white font-bold text-5xl">
                  <FaMapLocationDot />
                  </div>

                    <div className="text-white text-sm lg:px-5 px-2">
                        <p>Location</p>
                        <p>Rivers State, Nigeria.</p>
                    </div>
                </div>
                <div className="flex p-4">
                <div className="text-white font-bold text-5xl">
                <MdOutlineWifiCalling />
                  </div>
                    <div className="text-white text-sm lg:px-5 px-2">
                        <p>Call</p>
                        <p>+234 9034434787</p>
                    </div>
                </div>
                <div className="flex p-4">
                <div className="text-white font-bold text-5xl">
                <MdAlternateEmail />
                  </div>
                    <div className="text-white text-sm lg:px-5 px-2">
                        <p>Email</p>
                        <p>aniagoanita@gmail.com</p>
                    </div>
                </div>
             </div>
             

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;
