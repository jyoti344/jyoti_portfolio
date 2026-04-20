import './navbar.css';

const Navbar = () => {
  return (
   <nav className="nav">
  <div className="nav-inner">
    <h2 className="logo">
      Jyoti Praksh Dhala<span>.</span>
    </h2>

    <div className="links">
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#tech">Tech</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
      
    </div>
  </div>
</nav>
  );
};

export default Navbar;