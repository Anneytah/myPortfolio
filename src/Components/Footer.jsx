import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <>
        <div className="border-2 mt-16 border-[#ccd6f6] w-full"></div>
      <div className=" max-w-xl text-center mx-auto m-7 p-7 text-[#ccd6f6]">
        <div className="flex gap-3 justify-center items-center">
        <div className="hover:text-[#64ffda]">
          <a
            href="https://github.com/Anneytah"
            target="_blank"
            rel="noreferrer"
          >
            <TbBrandGithub />
          </a>
        </div>
        <div className="hover:text-[#64ffda]">
          <a
            href="mailto:aniagoanita@gmail.com?subject=Portfolio%20Inquiry&body=Hi%2C%20my%20name%20is%20%5BYour%20Name%5D.%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20further."
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineMail />
          </a>
        </div>
        <div className="hover:text-[#64ffda]">
          <a
            href="https://x.com/anney_ta"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
        </div>
        <div className="hover:text-[#64ffda]">
          <a
            href="https://wa.me/2348081005275?text=Hello%20bud%2C%20I%20just%20viewed%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20working%20with%20you.%20Could%20we%20chat%20more%3F"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp />
          </a>
        </div>
        <div className="hover:text-[#64ffda]">
          <a
            href="https://www.linkedin.com/in/aniago-anita/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
        </div>
        </div>
      <p className="py-3 text-sm lg:text-xl">© 2025 Aniago Anita. | Built using React & Tailwind</p>
      </div>
    </>
  );
};

export default Footer;
