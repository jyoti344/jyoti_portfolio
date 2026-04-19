import Navbar from '../Components/Navbar/Navbar.js';
import Hero from '../Components/Hero/Hero.js';
import Projects from '../Components/Projects/Projects.js';
import About from '../Components/About/About.js';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
    </>
  );
};

export default Home;