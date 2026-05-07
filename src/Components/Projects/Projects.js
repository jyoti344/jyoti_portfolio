import './projects.css';
import profile from './logo192.jpg';
import brain from './brain.jpg';
import h_info from './info.jpg';

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
              <img src={brain} alt="project" />
            </div>

            <div className="content">

              <h3>Brain Tumor Detection</h3>

              <p>
                MRI classification using ML (SVC + Logistic Regression).
              </p>

              <div className="card-buttons">

                <span className="demo-text">
                  Live Demo
                </span>

                <button
                  className="repo-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    window.open(
                      "https://github.com/jyoti344/BrainTumor_CNN_ML_Hybrid",
                      "_blank"
                    );
                  }}
                >
                  GitHub →
                </button>

              </div>
            </div>
          </div>
        </Link>

        {/* Project 2 */}
        <div
          className="card"
          onClick={() =>
            window.open("https://jyotiprakash.ct.ws", "_blank")
          }
        >

          <div className="Image">
            <img src={h_info} alt="project" />
          </div>

          <div className="content">

            <h3>100 Greatest Inventions</h3>

            <p>
              Full-stack PHP + MySQL project with CRUD operations and admin panel.
            </p>

            <div className="card-buttons">

              <span className="demo-text">
                Live Demo
              </span>

              <button
                className="repo-btn"
                onClick={(e) => {
                  e.stopPropagation();

                  window.open(
                    "https://github.com/jyoti344/100-greatest-inventions-that-changed-the-world-completely.-web-",
                    "_blank"
                  );
                }}
              >
                GitHub →
              </button>

            </div>
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
              Personal portfolio website showcasing projects,
              skills and contact details.
            </p>

            <div className="card-buttons">

              <span className="demo-text">
                Live Demo
              </span>

              <button
                className="repo-btn"
                onClick={(e) => {
                  e.stopPropagation();

                  window.open(
                    "https://github.com/jyoti344",
                    "_blank"
                  );
                }}
              >
                GitHub →
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;