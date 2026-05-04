import "./techstack.css";

import {
Code2,
Server,
Brain,
GitBranch,
Database,
Terminal
} from "lucide-react";

import {
FaPython,
FaJava,
FaReact,
FaHtml5,
FaCss3Alt,
FaNodeJs,
FaGitAlt,
FaDocker
} from "react-icons/fa";

import {
SiJavascript,
SiMysql,
SiMongodb,
SiPostgresql,
SiFlask,
SiTailwindcss,
SiC,
SiCplusplus,
SiPandas,
SiNumpy,
SiScikitlearn
} from "react-icons/si";

const TechStack = () => {
return (
<section className="tech container" id="tech">
<h2>Tech Stack</h2>

<div className="tech-grid">

{/* Languages */}
<div className="tech-card">
<div className="card-title">
<div className="icon-box">
<Terminal size={28}/>
</div>
<h3>Languages</h3>
</div>

<div className="skills-list">
<div className="skill-item"><FaPython/><span>Python</span></div>
<div className="skill-item"><FaJava/><span>Java</span></div>
<div className="skill-item"><SiJavascript/><span>JavaScript</span></div>
<div className="skill-item"><SiMysql/><span>SQL</span></div>
<div className="skill-item"><SiC/><span>C</span></div>
<div className="skill-item"><SiCplusplus/><span>C++</span></div>
</div>
</div>


{/* Frontend */}
<div className="tech-card">
<div className="card-title">
<div className="icon-box">
<Code2 size={28}/>
</div>
<h3>Frontend</h3>
</div>

<div className="skills-list">
<div className="skill-item"><FaHtml5/><span>HTML</span></div>
<div className="skill-item"><FaCss3Alt/><span>CSS</span></div>
<div className="skill-item"><FaReact/><span>React</span></div>
<div className="skill-item"><SiTailwindcss/><span>Tailwind</span></div>
<div className="skill-item"><SiJavascript/><span>Next.js</span></div>
<div className="skill-item"><FaCss3Alt/><span>Bootstrap</span></div>
</div>
</div>


{/* Backend */}
<div className="tech-card">
<div className="card-title">
<div className="icon-box">
<Server size={28}/>
</div>
<h3>Backend</h3>
</div>

<div className="skills-list">
<div className="skill-item"><FaNodeJs/><span>Node.js</span></div>
<div className="skill-item"><FaNodeJs/><span>Express</span></div>
<div className="skill-item"><SiFlask/><span>Flask</span></div>
<div className="skill-item"><Server size={16}/><span>REST APIs</span></div>
<div className="skill-item"><SiMongodb/><span>MongoDB</span></div>
<div className="skill-item"><SiMysql/><span>MySQL</span></div>
</div>
</div>


{/* AI/ML */}
<div className="tech-card">
<div className="card-title">
<div className="icon-box">
<Brain size={28}/>
</div>
<h3>AI / ML</h3>
</div>

<div className="skills-list">
<div className="skill-item"><SiPandas/><span>Pandas</span></div>
<div className="skill-item"><SiNumpy/><span>NumPy</span></div>
<div className="skill-item"><SiScikitlearn/><span>Scikit-learn</span></div>
<div className="skill-item"><Brain size={16}/><span>Matplotlib</span></div>
<div className="skill-item"><Brain size={16}/><span>Machine Learning</span></div>
<div className="skill-item"><Brain size={16}/><span>Data Analysis</span></div>
</div>
</div>


{/* Databases */}
<div className="tech-card">
<div className="card-title">
<div className="icon-box">
<Database size={28}/>
</div>
<h3>Databases</h3>
</div>

<div className="skills-list">
<div className="skill-item"><SiMysql/><span>MySQL</span></div>
<div className="skill-item"><SiMongodb/><span>MongoDB</span></div>
<div className="skill-item"><SiPostgresql/><span>PostgreSQL</span></div>
<div className="skill-item"><Database size={16}/><span>Oracle</span></div>
<div className="skill-item"><Database size={16}/><span>DBMS</span></div>
<div className="skill-item"><Database size={16}/><span>SQL Queries</span></div>
</div>
</div>


{/* DevOps */}
<div className="tech-card">
<div className="card-title">
<div className="icon-box">
<GitBranch size={28}/>
</div>
<h3>DevOps & Tools</h3>
</div>

<div className="skills-list">
<div className="skill-item"><FaGitAlt/><span>Git</span></div>
<div className="skill-item"><FaGitAlt/><span>GitHub</span></div>
<div className="skill-item"><Terminal size={16}/><span>Linux</span></div>
<div className="skill-item"><FaDocker/><span>Docker</span></div>
<div className="skill-item"><GitBranch size={16}/><span>Postman</span></div>
<div className="skill-item"><Code2 size={16}/><span>VS Code</span></div>
</div>
</div>

</div>
</section>
);
};

export default TechStack;