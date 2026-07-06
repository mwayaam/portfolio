import { profile } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <section className="container section text-center">
      <SectionHeading eyebrow="About" title="A bit about me" />
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="glass p-4 p-md-5">
            <p className="text-mid fs-5 mb-3">{profile.bio}</p>
            <p className="text-mid mb-0">
              Based in {profile.location}. Add another paragraph here about your background,
              what got you into development, or what you're currently focused on learning.
            </p>
          </div>
        </div>
        <div className="col-lg-5 mt-4 mt-lg-0">
          <div className="glass-card p-4 h-100 d-flex flex-column align-items-center justify-content-center">
            <h3 className="font-display fs-5 mb-3">Quick facts</h3>
            <ul className="text-mid ps-0 mb-0 list-unstyled">
              <li className="mb-2">📍 {profile.location}</li>
              <li className="mb-2">💻 Currently learning: Flutter, GUI based systems</li>
              <li className="mb-2">🎯 Focused on: AI + ML Developer</li>
              <li>☕ Fuelled by: Coffee</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}