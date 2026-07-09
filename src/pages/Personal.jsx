import { Link } from "react-router-dom";

export default function Personal() {
  return (
    <main className="page personal-page">
      <div className="personal-top">
        <Link to="/" className="personal-home" aria-label="Home">
          <img src="/images/d88am3v35AD5fuoz28L9E70oo4.png" alt="" />
        </Link>
        <p className="personal-note">(still under construction)</p>
      </div>

      <h1 className="personal-banner">This Barbie Codes and Cares</h1>

      <div className="personal-inner">
        <div className="barbie-box fade-up">
          <div className="barbie-window">
            <img
              className="barbie-portrait"
              src="/images/8uVYgauXOFMZwb0jmceOcLj0.png"
              alt="Portrait of Maroua"
            />
            <img
              className="barbie-frame"
              src="/images/wXMW9iQUDMWotJ7QWrsIoeEuV6E.png"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="barbie-nameplate">
            <span>B. Maroua</span>
          </div>
        </div>

        <div className="personal-copy fade-up" style={{ animationDelay: "0.15s" }}>
          <p>Human-centered Designer</p>
          <p>&amp; software Engineer</p>
        </div>
      </div>

      <Link className="personal-footer" to="/projects">
        Other projects
      </Link>
    </main>
  );
}
