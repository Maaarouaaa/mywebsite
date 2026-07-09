import { Link } from "react-router-dom";
import { SocialDock } from "../components/SiteChrome";
import { homeEssay, projects } from "../data/content";

const featured = [
  projects.find((p) => p.id === "levelup"),
  projects.find((p) => p.id === "speech-ai"),
  projects.find((p) => p.id === "unicode"),
].filter(Boolean);

export default function Home() {
  return (
    <main className="page">
      <section className="home-hero">
        <div className="home-hero__bg" aria-hidden="true" />
        <div className="home-hero__content fade-up">
          <h1 className="home-hero__name">Maroua BZ</h1>
          <p className="home-hero__tag">Computer Science & Product Design</p>
        </div>
        <SocialDock />
      </section>

      <section className="home-projects" id="selected">
        <div className="home-projects__bg" aria-hidden="true" />
        <div className="home-projects__inner">
          <p className="home-projects__label">Selected projects</p>
          <div className="project-grid">
            {featured.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects#${project.id}`}
                className={`project-tile ${index === 2 ? "project-tile--wide" : ""} fade-up`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <img src={project.homeImage} alt="" />
                <span>{project.short}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-door">
        <div className="home-door__scene" aria-hidden="true" />
        <div className="home-door__overlay fade-up">
          <div className="home-door__scripts" aria-hidden="true">
            <span>字</span>
            <span>β</span>
            <span>д</span>
            <span>م</span>
          </div>
          <h2 className="home-door__title">Personal Website</h2>
        </div>
      </section>

      <section className="home-essay">
        <div className="home-essay__visual" aria-hidden="true" />
        <aside className="home-essay__copy">
          <Link className="home-essay__link" to="/projects">
            Other projects
          </Link>
          {homeEssay.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </aside>
      </section>
    </main>
  );
}
