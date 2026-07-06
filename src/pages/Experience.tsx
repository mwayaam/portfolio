import { experience } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";

export default function Experience() {
  return (
    <section className="container section text-center">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />
      <div className="d-flex flex-column align-items-center gap-4">
        {experience.map((entry) => (
          <div className="glass-card p-4 w-100" style={{ maxWidth: 700 }} key={entry.id}>
            <div className="d-flex flex-column justify-content-center mb-2 gap-1">
              <h3 className="font-display fs-5 mb-0">{entry.role}</h3>
              <span className="font-mono text-low small">{entry.startDate} — {entry.endDate}</span>
            </div>
            <p className="gradient-text fw-medium mb-3">
              {entry.organization}{entry.location ? ` · ${entry.location}` : ""}
            </p>
            <ul className="text-mid ps-0 mb-0 list-unstyled">
              {entry.bullets.map((b, i) => <li key={i} className="mb-1">{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}