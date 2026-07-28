import { Link } from "react-router-dom";
import { asset } from "../lib/asset";
import { homeEssay, projects } from "../data/content";

const featured = {
  levelup: projects.find((p) => p.id === "levelup"),
  speech: projects.find((p) => p.id === "speech-ai"),
  unicode: projects.find((p) => p.id === "unicode"),
};

export default function Home() {
  return (
    <main className="page home-page">
      <section
        className="projects-hero"
        id="selected"
        aria-label="Featured projects"
        style={{ backgroundImage: `url(${asset("images/oMLPWhAXnb3SOMAeNCwqhvzYZ8M.png")})` }}
      >
        <div className="projects-hero__veil projects-hero__veil--top" aria-hidden="true" />
        <div className="projects-hero__veil projects-hero__veil--unicode" aria-hidden="true" />

        {featured.levelup ? (
          <Link
            to={`/projects#${featured.levelup.id}`}
            className="home-project home-project--levelup fade-up"
          >
            <div className="home-project__card">
              <img src={asset(featured.levelup.homeImage)} alt="" decoding="async" />
            </div>
            <span className="home-project__title">LEVELUP</span>
          </Link>
        ) : null}

        {featured.speech ? (
          <Link
            to={`/projects#${featured.speech.id}`}
            className="home-project home-project--speech fade-up"
            style={{ animationDelay: "0.08s" }}
          >
            <div className="home-project__card">
              <img src={asset(featured.speech.homeImage)} alt="" decoding="async" />
            </div>
            <span className="home-project__title">SPEECH-AI</span>
          </Link>
        ) : null}

        {featured.unicode ? (
          <Link
            to={`/projects#${featured.unicode.id}`}
            className="home-project home-project--unicode fade-up"
            style={{ animationDelay: "0.16s" }}
          >
            <span className="home-project__title">UNICODE</span>
            <div className="home-project__card">
              <img src={asset(featured.unicode.homeImage)} alt="" decoding="async" />
            </div>
          </Link>
        ) : null}
      </section>

      <section className="additional-projects">
        <div
          className="additional-projects__bg"
          style={{ backgroundImage: `url(${asset("images/F0demdaqV8J76Vl8rLM7njXiG7A.png")})` }}
          aria-hidden="true"
        />
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
      </section>
    </main>
  );
}
