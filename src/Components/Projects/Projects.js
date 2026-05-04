import './projects.css';
import profile from './logo192.jpg';
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="projects container" id="projects">
      <h2>Projects</h2>

      <div className="grid">

        {/* Project 1 */}
        <Link to="/brain-tumor" className="card-link">
        <div className="card">
          <div className="Image">
            <img src={profile} alt="project" />
          </div>

          <div className="content">
            <h3>Brain Tumor Detection</h3>
            <p>
              MRI classification using ML (SVC + Logistic Regression).

            </p>
          </div>
        </div>
        </Link>

        {/* Project 2 */}
        <div className="card">
          <div className="Image">
            <img src={profile} alt="project" />
          </div>

          <div className="content">
            <h3>Restaurant System</h3>
            <p>
              Full-stack restaurant management system with booking, menu and admin dashboard.
            </p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="card">
          <div className="Image">
            <img src={profile} alt="project" />
          </div>

          <div className="content">
            <h3>Portfolio</h3>
            <p>
              Personal portfolio website showcasing projects, skills and contact details.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;