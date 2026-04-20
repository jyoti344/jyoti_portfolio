import './techstack.css';

const TechStack = () => {
  return (
    <section className="tech container" id="tech">
      <h2>Tech Stack</h2>

      <div className="tech-grid">

        <div className="tech-card">
          <h3>Languages</h3>
          <p>JavaScript, Python, Java, SQL</p>
        </div>

        <div className="tech-card">
          <h3>MERN Stack</h3>
          <p>MongoDB, Express.js, React.js, Node.js</p>
        </div>

        <div className="tech-card">
          <h3>ML & Data</h3>
          <p>Pandas, NumPy, scikit-learn</p>
        </div>

        <div className="tech-card">
          <h3>Frameworks & Tools</h3>
          <p>Flask, REST APIs, Git, Postman</p>
        </div>

        <div className="tech-card">
          <h3>Core Concepts</h3>
          <p>DSA, OOPs, DBMS, OS</p>
        </div>

        <div className="tech-card">
          <h3>Databases & Systems</h3>
          <p>MongoDB, MySQL, Linux</p>
        </div>

      </div>
    </section>
  );
};

export default TechStack;