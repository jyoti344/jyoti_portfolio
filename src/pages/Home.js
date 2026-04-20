import Navbar from '../Components/Navbar/Navbar.js';
import Hero from '../Components/Hero/Hero.js';
import Projects from '../Components/Projects/Projects.js';
import About from '../Components/About/About.js';
import Techstack from '../Components/Techstack/Techstack.js';
import Education from '../Components/Education/Education.js';
import Experience from '../Components/Experience/Experience.js';
import Contact from "../Components/Contact/Contact.js";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Techstack/>
      <Projects />
      <Experience/>
      <Education />
      <Contact/>
      
    </>
  );
};

export default Home;