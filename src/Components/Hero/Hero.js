import './hero.css';
import profile from './logo192.png';

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <section className="hero container" id="home">
      <div className="left">
        <p>Hey, I'm Jyoti Prakash 👋</p>

        <h1>
          <span>Full Stack & ML</span><br />
          Developer
        </h1>

        <p className="desc">
          I build scalable web applications powered by machine learning, strong backend systems, and modern UI.
        </p>

        <div className="buttons">
          <button className="btn primary">Get In Touch</button>
          <button className="btn secondary">Browse Projects</button>
        </div>

        {/* SOCIALS */}
        <div className="socials">
          <a href="mailto:jyotiprakashdhala565@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>

          <a href="https://www.linkedin.com/in/jyoti-prakash-dhala-8a15bb3a5/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://github.com/jyoti344" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://leetcode.com/Jyoti565" target="_blank" rel="noreferrer">
            <SiLeetcode />
          </a>
        </div>
      </div>

      <div className="right">
        <div className="circle">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;