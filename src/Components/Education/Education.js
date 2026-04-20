import './education.css';

const Education = () => {
  return (
    <section className="education container" id="education">
      <h2>Education</h2>

      <div className="timeline">

        <div className="timeline-item left">
          <div className="content">
            <h3>B.Tech in Computer Science</h3>
            <p>XYZ Engineering College</p>
            <span>2022 - Present</span>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="content">
            <h3>12th Grade</h3>
            <p>ABC Higher Secondary School</p>
            <span>2020 - 2022</span>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="content">
            <h3>10th Grade</h3>
            <p>ABC School</p>
            <span>2018 - 2020</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;