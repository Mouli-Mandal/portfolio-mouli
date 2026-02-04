import "./Skills.css";

const skillsRoadmap = [
  { title: "C", desc: "Programming fundamentals & logic building" },
  { title: "C++", desc: "Object-oriented programming & problem solving" },
  { title: "Python", desc: "Scripting, automation & core concepts" },
  { title: "Jupyter", desc: "Experimentation & hands-on practice" },
  { title: "HTML • CSS • JavaScript", desc: "Web development foundations" },
  { title: "React + JSX", desc: "Modern frontend & component-based UI" },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h1 className="skills-title">Skills</h1>
      <p className="skills-subtitle">
        Technologies and tools I work with
      </p>

      <div className="skills-roadmap">
        {skillsRoadmap.map((item, index) => (
          <div className="roadmap-item" key={index}>
            <div className="roadmap-dot"></div>
            <div className="roadmap-card">
              <h3>{item.title}</h3>
              <span>{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
