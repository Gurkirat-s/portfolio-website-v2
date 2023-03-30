import React from 'react';
import './Contact.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  console.log(process.env.REACT_APP_FORM_URL);
  return (
    <div className="contact" id="contact">
      <div className="container">
        <h3>Contact me</h3>

        <div className="social-links">
          <div>
            <a href="https://github.com/Gurkirat-s">
              <FaGithub />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/gurkirats8">
              <FaLinkedinIn />
            </a>
          </div>
          <div>
            <a href="mailto:gurkiratsingh@hotmail.ca">
              <AiOutlineMail />
            </a>
          </div>
        </div>

        <h4>You can also send me a message.</h4>
        <form
          action={process.env.REACT_APP_FORM_URL}
          method="post"
          acceptCharset="UTF-8"
        >
          <div>
            <input
              className="name"
              name="Name"
              id="name"
              type="text"
              placeholder="Name"
              required
            />

            <input
              className="email"
              name="Email"
              id="email"
              type="email"
              placeholder="Email"
              required
            />

            <textarea
              className="message"
              id="message"
              name="message"
              placeholder="Your message"
              required
            />
            <input className="btn-submit" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
