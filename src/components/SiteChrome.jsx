import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { asset } from "../lib/asset";

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

      <div className="social-dock" aria-label="Social links">
        <a href="https://github.com/Maaarouaaa" target="_blank" rel="noreferrer" aria-label="GitHub">
          <img src={asset("images/bfLVO2MvSz6g5zZ2Ycl5ybYog.png")} alt="" />
        </a>
        <a
          href="https://linkedin.com/in/maroua-bezzaoui"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <img src={asset("images/6wpEoTmMdgMMiXA4tbHr5Md5TU.png")} alt="" />
        </a>
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
