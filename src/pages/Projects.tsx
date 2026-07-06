import { projects } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";

export default function Projects() {
  return (
    <section className="container section text-center">
      <SectionHeading eyebrow="Projects" title="Things I've built" />
      <div className="row g-4 justify-content-center">
        {projects.map((project) => (
          <div className="col-md-6 col-lg-4" key={project.id}>
            <div className="glass-card p-4 h-100 d-flex flex-column align-items-center">
              {project.featured && (
                <span className="font-mono small gradient-text mb-2" style={{ letterSpacing: "0.08em" }}>
                  FEATURED
                </span>
              )}
              <h3 className="font-display fs-5 mb-2">{project.title}</h3>
              <p className="text-mid mb-3 flex-grow-1">{project.description}</p>
              <div className="d-flex flex-wrap gap-2 mb-3 justify-content-center">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono small px-2 py-1"
                    style={{ background: "var(--glass-bg-strong)", border: "1px solid var(--glass-border)", borderRadius: "999px" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="d-flex gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="font-display fw-medium gradient-text">
                    Live →
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-mid font-display fw-medium">
                    Code →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}