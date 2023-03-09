import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="form-container">
      <section className="contact-header">
        <h1>Contact Me</h1>
      </section>
      <form
        className="contact-form"
        encType="text/plain"
        method="post"
        action="mailto:louyoon89@gmail.com"
      >
        <label name="name" className="input-area">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="input-box"
          name="Name"
          placeholder="Enter name"
        ></input>
        <label name="email" className="input-area">
          Email
        </label>
        <input
          type="text"
          id="email"
          className="input-box"
          name="Email"
          placeholder="Enter E-mail"
        ></input>
        <label name="message" className="input-area">
          Message
        </label>
        <textarea
          type="text"
          id="message"
          className="input-box"
          name="Message"
          placeholder="Input Message Here"
        ></textarea>
        <input
          type="submit"
          className="contact-btn"
          name="submit"
          value="SEND"
        ></input>
      </form>
    </section>
  );
}

export default Contact;
