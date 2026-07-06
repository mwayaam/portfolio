import { techStack } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";
import type { TechStackItem } from "../types";

const categories: TechStackItem["category"][] = ["Frontend", "Backend", "Database", "Tools", "Design"];

export default function TechStack() {
  return (
    <section className="container section text-center">
      <SectionHeading eyebrow="Tech Stack" title="Tools I reach for" />
      <div className="d-flex flex-column gap-4">
        {categories.map((cat) => {
          const items = techStack.filter((t) => t.category === cat);
          if (items.length === 0) return null;
          return (
            <div key={cat}>
              <h3 className="font-display fs-6 text-low text-uppercase mb-3" style={{ letterSpacing: "0.1em" }}>
                {cat}
              </h3>
              <div className="row g-3 justify-content-center">
                {items.map((item) => (
                  <div className="col-6 col-md-4 col-lg-3" key={item.id}>
                    <div className="glass-card p-3">
                      <div className="d-flex justify-content-center align-items-center mb-2">
                        <span className="font-display fw-medium">{item.name}</span>
                      </div>
                      <div className="d-flex gap-1">
                        {[1, 2, 3, 4, 5].map((lvl) => (
                          <span
                            key={lvl}
                            style={{
                              height: 6,
                              flex: 1,
                              borderRadius: 999,
                              background: lvl <= item.level ? "linear-gradient(90deg, var(--violet), var(--magenta))" : "var(--glass-border)",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}