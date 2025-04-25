import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <h2 className="text-2xl lg:text-4xl text-[#64ffda]"> What's Next?</h2>
        <h1 className="text-xl lg:text-3xl py-2 text-[#ccd6f6]">Get In Touch</h1>
        <p className="text-sm lg:text-xl m-2 text-[#8892b0]">
          I'm currently on the lookout for new opportunities, and my inbox is
          always open. Whether you have a question or want to hire me, please
          contact me.
        </p>
        <div className="contactMe btn mx-auto mt-12">
          <a href="/" >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
