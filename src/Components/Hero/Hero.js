import './hero.css';
import profile from './my2.png';

import { useNavigate } from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const Hero = () => {

  const navigate = useNavigate();

  return (
    <section className="hero container" id="home">

      {/* LEFT SIDE */}
      <div className="left">

        {/* STATUS BADGE */}
        <div className="intro">
          <span className="dot"></span>
          Open to Internships & Collaboration
        </div>

        {/* SMALL TEXT */}
        <p className="hello">
          Hey, I'm Jyoti Prakash 👋
        </p>

        {/* HEADING */}
        <h1>
          <span>Full Stack & ML</span>
          <br />
          Developer
        </h1>

        {/* DESCRIPTION */}
        <p className="desc">
          Building intelligent web experiences with scalable backend systems,
          machine learning, and modern UI design.
        </p>

        {/* TECH STACK */}
        <div className="stack">

          <span>React</span>

          <span>Flask</span>

          <span>Spring Boot</span>

          <span>Oracle</span>

          <span>Python</span>

          <span>Machine Learning</span>

        </div>

        {/* BUTTONS */}
        <div className="buttons">

          <button
            className="btn primary"
            onClick={() => navigate("/contact")}
          >
            Get In Touch
          </button>

          <a
            href="#projects"
            className="btn secondary"
          >
            Browse Projects →
          </a>

        </div>

        {/* SOCIALS */}
        <div className="socials">

          <a
            href="mailto:jyotiprakashdhala565@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/jyoti-prakash-dhala-8a15bb3a5/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/jyoti344"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://leetcode.com/Jyoti565"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
          >
            <SiLeetcode />
          </a>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="right">

        <div className="circle">
          <img
            src={profile}
            alt="Jyoti Prakash"
          />
        </div>

      </div>

    </section>
  );
};

export default Hero;