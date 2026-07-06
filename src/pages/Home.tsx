import { Link } from "react-router-dom";
import { profile } from "../data/portfolioData";

export default function Home() {
  return (
    <section
      className="container section d-flex flex-column align-items-center justify-content-center text-center"
      style={{ minHeight: "70vh" }}
    >
      <span className="font-mono text-low small d-block mb-3" style={{ letterSpacing: "0.15em" }}>
        HELLO, I'M
      </span>
      <h1 className="font-display fw-bold display-3 mb-3">{profile.name}</h1>
      <h2 className="font-display fw-medium gradient-text mb-4" style={{ fontSize: "1.75rem" }}>
        {profile.role}
      </h2>
      <p className="text-mid fs-5 mb-4" style={{ maxWidth: 620 }}>
        {profile.tagline}
      </p>
      <div className="d-flex gap-3 flex-wrap justify-content-center">
        <Link to="/projects" className="btn-gradient">View my work</Link>
        <Link to="/contact" className="btn-glass-outline">Get in touch</Link>
      </div>
    </section>
  );
}