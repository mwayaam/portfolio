import { socialLinks, profile } from "../data/portfolioData";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";

const iconMap = { github: FaGithub, linkedin: FaLinkedin, twitter: FaTwitter, email: FaEnvelope, instagram: FaInstagram };

export default function Footer() {
  return (
    <footer className="py-4 mt-5">
      <div className="container">
        <div className="glass d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 px-4 py-3 text-center">  <span className="text-low small">
            © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Bootstrap.
          </span>
          <div className="d-flex gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-mid fs-5">
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}