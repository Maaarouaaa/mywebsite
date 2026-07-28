import { Link } from "react-router-dom";
import { asset } from "../lib/asset";
import { SocialDock } from "../components/SiteChrome";
import { homeEssay, projects } from "../data/content";

const featured = [
  { project: projects.find((p) => p.id === "levelup"), label: "LEVELUP", place: "levelup" },
  { project: projects.find((p) => p.id === "speech-ai"), label: "SPEECH-AI", place: "speech" },
  { project: projects.find((p) => p.id === "unicode"), label: "UNICODE", place: "unicode" },
].filter((item) => item.project);

export default function Home() {
  return (
    <main className="home-canvas page">
      <img
        className="home-canvas__bg"
        src={asset("images/oMLPWhAXnb3SOMAeNCwqhvzYZ8M.png")}
        alt=""
        decoding="async"
      />

      <div className="home-canvas__content">
        <header className="home-brand fade-up">
          <h1 className="home-brand__name">Maroua BZ</h1>
          <p className="home-brand__tag">Computer Science & Product Design</p>
        </header>

        <section className="home-selected" aria-label="Selected projects">
          <h2 className="home-selected__title fade-up">Selected projects</h2>

          <div className="home-selected__grid">
            {featured.map((item, index) => (
              <Link
                key={item.project.id}
                to={`/projects#${item.project.id}`}
                className={`home-card home-card--${item.place} fade-up`}
                style={{ animationDelay: `${0.08 * (index + 1)}s` }}
              >
                {item.place === "unicode" ? <span className="home-card__label">{item.label}</span> : null}
                <img
                  className="home-card__image"
                  src={asset(item.project.homeImage)}
                  alt=""
                  decoding="async"
                />
                {item.place !== "unicode" ? <span className="home-card__label">{item.label}</span> : null}
              </Link>
            ))}
          </div>
        </section>

        <aside className="home-essay-rail" aria-label="Reflection">
          <Link className="home-essay-rail__more" to="/projects">
            Other projects
          </Link>
          <img
            className="home-essay-rail__barcode"
            src={asset("images/WXfU5jo7QVeYRk6D1W2du4Vqvm8.png")}
            alt=""
            decoding="async"
          />
          <div className="home-essay-rail__copy">
            {homeEssay.map((paragraph, index) => (
              <p key={paragraph.slice(0, 48)}>
                {index === 0 ? (
                  <>
                    {paragraph} <span className="home-essay-rail__and-more">and more</span>
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>
        </aside>

        <Link className="home-door-cta fade-up" to="/personal">
          Personal Website
        </Link>
      </div>

      <SocialDock />
    </main>
  );
}
