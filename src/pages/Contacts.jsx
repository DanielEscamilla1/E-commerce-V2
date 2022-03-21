import React from "react";

const Contacts = () => {
  return (
    <>
      <div className="contact-section">
        <h1>Contact Us</h1>
        <div className="border"></div>
        <form className="contact-form" action="index.html" method="post">
        <input
          type="text"
          className="contact-form-text"
          placeholder="First Name"
        ></input>
        <input
          type="text"
          className="contact-form-text"
          placeholder="Last Name"
        ></input>
        <input
          type="email"
          className="contact-form-text"
          placeholder="Your Email"
        ></input>
        <textarea
          className="contact-form-text"
          placeholder="Your Message"
        ></textarea>
        <input type="submit" className="contact-form-btn" value="send"></input></form>
      </div>
    </>
  );
};

export default Contacts;
