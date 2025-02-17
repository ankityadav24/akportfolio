import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../sidebar/sidebar.css';

export const SocialSideBar = () => {
  return (


    <section className="social-links">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} style={{ color: "white" }} />
      </a>
      <a href="https://github.com/ankityadav24" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} style={{ color: "#0077b5" }} />

      </a>
            <a href="https://www.instagram.com/ankityadav967?igsh=c3IxNGhtc2lxdjNz" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} style={{ color: "#e4405f" }} />
      </a>
      <div className="vertical-line" />

      <div className="email-container">
        <div className="email">ankityadav6548798@gmail.com</div>
        <div className="vertical-line"></div>
      </div>
    </section>



  )
}
export default SocialSideBar;