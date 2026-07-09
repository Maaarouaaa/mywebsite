import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/personal", label: "Personal" },
];

export default function SiteChrome() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isPersonal = location.pathname === "/personal";

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (isPersonal) {
    return null;
  }

  return (
    <>
      <div className="site-chrome">
        <button
          className="menu-btn"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <label className="search-field">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
            <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span className="sr-only">Search</span>
          <input type="search" placeholder="search brain..." />
        </label>
      </div>

      <div className={`nav-drawer ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
        <nav className="nav-panel" onClick={(e) => e.stopPropagation()} aria-label="Primary">
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
          <p className="nav-meta">
            Maroua Bezzaoui
            <br />
            Computer Science & Product Design
          </p>
        </nav>
      </div>
    </>
  );
}

export function SocialDock() {
  return (
    <div className="social-dock" aria-label="Social links">
      <a href="https://github.com/Maaarouaaa" target="_blank" rel="noreferrer" aria-label="GitHub">
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
          <circle cx="12" cy="12" r="12" fill="#111" />
          <path
            fill="#fff"
            d="M12 5.2c-3.7 0-6.7 3-6.7 6.7 0 3 1.9 5.5 4.6 6.4.3.1.5-.1.5-.3v-1.2c-1.9.4-2.3-.8-2.3-.8-.3-.7-.7-.9-.7-.9-.6-.4.1-.4.1-.4.6 0 1 .6 1 .6.6 1 1.6.7 2 .5.1-.4.2-.7.4-.9-1.5-.2-3.1-.8-3.1-3.4 0-.7.3-1.4.7-1.9-.1-.2-.3-.9.1-1.8 0 0 .6-.2 1.9.7.6-.2 1.2-.2 1.8-.2s1.2.1 1.8.2c1.3-.9 1.9-.7 1.9-.7.4.9.2 1.6.1 1.8.4.5.7 1.1.7 1.9 0 2.6-1.6 3.2-3.1 3.4.2.2.5.6.5 1.2v1.8c0 .2.2.4.5.3 2.7-.9 4.6-3.4 4.6-6.4 0-3.7-3-6.7-6.7-6.7z"
          />
        </svg>
      </a>
      <a
        href="https://linkedin.com/in/maroua-bezzaoui"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#0A66C2" />
          <path
            fill="#fff"
            d="M7.1 9.4H4.8V19h2.3V9.4zM5.9 5c-.8 0-1.4.6-1.4 1.4S5.1 7.8 5.9 7.8s1.4-.6 1.4-1.4S6.7 5 5.9 5zM19.2 12.7c0-2.1-1.1-3.5-3.3-3.5-1.1 0-1.9.5-2.3 1.1V9.4h-2.3c0 .5 0 9.6 0 9.6h2.3v-5.4c0-.3 0-.6.1-.8.3-.6.9-1.2 1.9-1.2 1.3 0 1.9.9 1.9 2.3V19h2.3v-6.3z"
          />
        </svg>
      </a>
    </div>
  );
}
