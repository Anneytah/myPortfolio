import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <h2 style={{ color: "#64ffda", fontSize: 20}}>What's Next?</h2>
        <h1 style={{color: "#ccd6f6", fontSize: 40, margin: 0}}>Get In Touch</h1>
        <p style={{color: "#8892b0", margin: 15, fontSize: 20}}>
          I'm currently on the lookout for new opportunities, and my inbox is
          always open. Whether you have a question or want to hire me, please
          contact me.
        </p>
        <div className="contactMe btn">
          <a href="/" >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
