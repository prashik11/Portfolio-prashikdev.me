import { ExternalLink } from "lucide-react";

function Projects() {
  return (
    <section id="projects" className="portfolio-section">
      <div className="section-inner">
        <p className="section-eyebrow">Selected work</p>
        <h2>Projects</h2>
        <article className="project-card">
          <div>
            <p className="section-eyebrow">Full stack · MERN</p>
            <h3>Hospital Appointment System</h3>
            <p>
              A dynamic appointment booking system with management built with
              React, featuring reusable sections, subtle motion, and a mobile
              friendly layout.
            </p>
            <div className="tag-list">
              <span>React</span>
              <span>JavaScript</span>
              <span>MongoDB</span>
              <span>GraphQL</span>
              <span>Node.JS</span>
              <span>CSS</span>
            </div>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/prashik11/Hospital-appointment-system"
              target="_blank"
              rel="noreferrer"
              aria-label="Get in touch"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </article>

        <article className="project-card">
          <div>
            <p className="section-eyebrow">Full stack · MERN</p>
            <h3>Portfolio Website</h3>
            <p>
              A responsive portfolio experience built with React, featuring
              reusable sections, subtle motion, and a mobile friendly layout.
            </p>
            <div className="tag-list">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/prashik11/Portfolio-prashikdev.me"
              target="_blank"
              rel="noreferrer"
              aria-label="Get in touch"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
