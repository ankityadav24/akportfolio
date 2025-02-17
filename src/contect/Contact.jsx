import React from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, } from 'react-icons/fa';
import "../contect/contact.css";
const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="social-container">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon github">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/ankityadav24" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
          <FaLinkedin size={30} />
        </a>

        <a href="https://www.instagram.com/ankityadav967?igsh=c3IxNGhtc2lxdjNz" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
          <FaInstagram size={30} />
        </a>
      </div>

      <div className="divider"></div>

      <div className="email-box">
        <FaEnvelope className="email-icon" />
        <a href="mailto:ankityadav6548798@gmail.com" className="email-address">
          ankityadav6548798@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
