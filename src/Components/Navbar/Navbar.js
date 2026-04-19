import './navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <h2 className="logo">Jyoti Praksh Dhala<span>.</span></h2>

      <div className="links" >
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
};

export default Navbar;