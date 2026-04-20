import React from "react";
import "./contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <footer className="footer" id = 'contact'>
  <div className="footer-inner">
    <h2>📬 Contact Me</h2>

    <p className="contact-subtext">
      Open to internships, collaborations, and opportunities. Let’s connect!
    </p>

    <div className="socials">
      <a href="mailto:jyotiprakashdhala565@gmail.com"><FaEnvelope /></a>
      <a href="https://www.linkedin.com/in/jyoti-prakash-dhala-8a15bb3a5/"><FaLinkedin /></a>
      <a href="https://github.com/jyoti344"><FaGithub /></a>
      <a href="https://leetcode.com/Jyoti565"><SiLeetcode /></a>
    </div>

    <div className="email-box">
      <p>Email me directly:</p>
      <a href="mailto:jyotiprakashdhala565@gmail.com">
        jyotiprakashdhala565@gmail.com
      </a>
    </div>
  </div>
</footer>
  );
};

export default Contact;