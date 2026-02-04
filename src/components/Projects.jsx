import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        Some things I’ve built recently
      </p>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <h3>Building Website</h3>
          <p>
            An institute website built independently using HTML, CSS, and JS.
          </p>

          <div className="project-links">
            <a href="https://jindalresearchgroup.com/" target="_blank" rel="noreferrer">
              Live Website
            </a>
            <a href="https://github.com/Mouli-Mandal/MEMBER-S-website" target="_blank" rel="noreferrer">
              Source Code
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>Other Projects & Work</h3>
          <p>
            A collection of my self-made projects, AI work, and hardware-based
            implementations.
          </p>

          <div className="project-links vertical">
            <a href="https://www.kaggle.com/" target="_blank" rel="noreferrer">
              Kaggle Profile
            </a>
            <a href="https://github.com/yourname/obstacle-avoiding-car" target="_blank" rel="noreferrer">
              Obstacle Avoiding Car
            </a>
            <a href="https://github.com/yourname/qraptor" target="_blank" rel="noreferrer">
              Qraptor Project-AI-Based Agent
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
