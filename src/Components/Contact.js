import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="text-center mx-auto pb-0">
        <h2 className="text-2xl lg:text-4xl text-[#64ffda]"> What's Next?</h2>
        <h1 className="text-xl lg:text-3xl py-2 text-[#ccd6f6]">Get In Touch</h1>
        <p className="text-sm lg:text-xl m-2 text-[#8892b0] w-[70%] mx-auto">
          I'm currently on the lookout for new opportunities, and my inbox is
          always open. Whether you have a question or want to hire me, please
          contact me.
        </p>
          <a href="mailto:aniagoanita@gmail.com?subject=Portfolio%20Inquiry&body=Hi%2C%20my%20name%20is%20%5BYour%20Name%5D.%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20further." target="_blank" rel="noreferrer" >
        <div className="contactMe mx-auto mt-12 text-[#64ffda]">
            Contact Me
        </div>
          </a>
      </div>
    </div>
  );
};

export default Contact;
