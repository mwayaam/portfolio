import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/tech-stack", label: "Tech Stack" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className="navbar navbar-expand fixed-top glass-strong mx-auto mt-3"
      style={{
        maxWidth: "min(1100px, 94%)",
        left: 0,
        right: 0,
        borderRadius: "999px",
        padding: "0.5rem 1.25rem",
      }}
    >
      <div className="container-fluid d-flex align-items-center justify-content-between flex-nowrap px-1">
        <NavLink
          to="/"
          className="navbar-brand font-display fw-bold gradient-text fs-5 flex-shrink-0"
        >
          {"</>"} Portfolio
        </NavLink>

        <ul className="navbar-nav flex-row flex-grow-1 justify-content-center gap-lg-1 mb-0">
          {links.map((link) => (
            <li className="nav-item" key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  "nav-link px-3 py-2 font-display fw-medium" +
                  (isActive ? " gradient-text" : " text-mid")
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}