import { useState, type FormEvent } from "react";
import SectionHeading from "../components/SectionHeading";
import { socialLinks, profile } from "../data/portfolioData";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";

const iconMap = { github: FaGithub, linkedin: FaLinkedin, twitter: FaTwitter, email: FaEnvelope, instagram: FaInstagram };

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setSubmitted(true);
  }

  return (
    <section className="container section text-center">
      <SectionHeading eyebrow="Contact" title="Let's talk" subtitle={`Based in ${profile.location} — open to remote work and freelance projects.`} />
      <div className="row g-4 justify-content-center">
        <div className="col-lg-7">
          <div className="glass p-4 p-md-5 text-start">
            {submitted ? (
              <p className="text-mid fs-5 mb-0 text-center">
                Thanks for reaching out — I'll get back to you soon. 🎉
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-mid">Name</label>
                  <input
                    type="text"
                    className="form-control bg-transparent text-light border-secondary"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-mid">Email</label>
                  <input
                    type="email"
                    className="form-control bg-transparent text-light border-secondary"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label text-mid">Message</label>
                  <textarea
                    className="form-control bg-transparent text-light border-secondary"
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn-gradient">Send message</button>
                </div>
              </form>
            )}
          </div>
        </div>
        <div className="col-lg-5">
          <div className="glass-card p-4 h-100 d-flex flex-column align-items-center justify-content-center gap-3">
            <h3 className="font-display fs-5 mb-1">Find me elsewhere</h3>
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-2 text-mid">
                  <Icon /> {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}