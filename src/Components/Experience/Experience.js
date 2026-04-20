import './experience.css';

const Experience = () => {
  return (
    <section className="experience container" id="experience">
      <h2>Experience</h2>

      <div className="exp-timeline">

        <div className="exp-item">
          <div className="exp-dot"></div>

          <div className="exp-content">
            <h3>Data Analyst Intern</h3>
            <h4>Central Tool Room & Training Centre (CTTC)</h4>
            <span>June 2025 – July 2025 | Bhubaneswar, Odisha</span>

            <ul>
              <li>
                Built a crop production prediction system using <strong>Pandas</strong> and <strong>NumPy</strong> on a 250K+ dataset.
              </li>
              <li>
                Trained ML models (Linear Regression, KNN, Random Forest, SVM, XGBoost) achieving <strong>95% accuracy</strong>.
              </li>
              <li>
                Evaluated using RMSE, MAE, R² and deployed via <strong>Flask</strong> with an OOP-based backend.
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;