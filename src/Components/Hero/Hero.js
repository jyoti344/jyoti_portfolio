import './hero.css';
import profile from './logo192.png';

const Hero = () => {
  return (
    <section className="hero container" id="home">
      <div className="left">
        <p>Hey, I'm Jyoti 👋</p>

        <h1>
          <span>Frontend</span><br />
          Developer
        </h1>

        <p className="desc">
          I build modern web apps with clean UI and powerful backend logic.
        </p>

        <div className="buttons">
          <button className="btn primary">Get In Touch</button>
          <button className="btn secondary">Browse Projects</button>
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