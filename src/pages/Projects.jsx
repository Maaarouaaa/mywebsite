import { asset } from "../lib/asset";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "../data/content";

export default function Projects() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  const gallery = [
    projects.find((p) => p.id === "unicode"),
    projects.find((p) => p.id === "nasdaq"),
  ].filter(Boolean);

  return (
    <main className="page projects-page">
      <h1 className="projects-title fade-up">PROJECT CASE STUDIES</h1>

      <section className="gallery-room fade-up" aria-label="Featured project gallery">
        <img
          className="gallery-decor gallery-decor--wall"
          src={asset("images/5lYnVl38nbtNR3xqyPBMLeeg8dk.png")}
          alt=""
          aria-hidden="true"
        />
        <div className="gallery-frames">
          {gallery.map((project) => (
            <a key={project.id} className="gallery-frame" href={`#${project.id}`}>
              <div className="gallery-frame__mat">
                <img
                  className="gallery-frame__art"
                  src={asset(project.galleryImage || project.images?.[0])}
                  alt=""
                />
              </div>
              <span>{project.short}</span>
            </a>
          ))}
        </div>
      </section>

      <nav className="project-nav" aria-label="Jump to project">
        {projects.map((project) => (
          <a key={project.id} href={`#${project.id}`}>
            {project.nav}
          </a>
        ))}
      </nav>

      {projects.map((project) => (
        <article key={project.id} id={project.id} className="case-study fade-up">
          <h2>{project.title}</h2>
          {project.lede && <p className="lede">{project.lede}</p>}
          {project.meta?.length ? (
            <div className="case-meta">
              {project.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ) : null}

          {project.images?.length ? (
            <div className={`case-media ${project.images.length > 1 ? "case-media--split" : ""}`}>
              {project.images.slice(0, 4).map((src) => (
                <img key={src} src={asset(src)} alt="" />
              ))}
            </div>
          ) : null}

          {project.sections?.map((section) => (
            <div key={section.heading}>
              <h3>{section.heading}</h3>
              {section.body?.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
              {section.bullets?.length ? (
                <ul>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </article>
      ))}
    </main>
  );
}
