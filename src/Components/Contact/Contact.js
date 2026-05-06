import React from "react";
import "./contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const Contact = () => {

  const navigate = useNavigate();

  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">

        <h2>📬 Contact Me</h2>

        <p className="contact-subtext">
          Open to internships, collaborations, and opportunities. Let’s connect!
        </p>

        {/* BUTTON */}
        

        {/* SOCIALS */}
        <div className="socials">
          <a href="mailto:jyotiprakashdhala565@gmail.com">
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/jyoti-prakash-dhala-8a15bb3a5/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/jyoti344"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://leetcode.com/Jyoti565"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode />
          </a>
        </div>

        {/* EMAIL */}
        <button
          className="btn primary"
          onClick={() => navigate("/contact")}
        >
          Get In Touch
        </button>

      </div>
    </footer>
  );
};

export default Contact;