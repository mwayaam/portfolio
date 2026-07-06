import { skillCategories } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";

export default function Skills() {
  return (
    <section className="container section text-center">
      <SectionHeading eyebrow="Skills" title="What I work with" />
      <div className="row g-4 justify-content-center">
        {skillCategories.map((cat) => (
          <div className="col-md-4" key={cat.id}>
            <div className="glass-card p-4 h-100">
              <h3 className="font-display fs-5 mb-3">{cat.category}</h3>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono small px-3 py-2"
                    style={{ background: "var(--glass-bg-strong)", border: "1px solid var(--glass-border)", borderRadius: "999px" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}