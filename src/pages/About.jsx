import { asset } from "../lib/asset";

export default function About() {
  return (
    <main className="page about-page">
      <h1 className="about-title fade-up">ABOUT</h1>
      <img
        className="about-hero fade-up"
        src={asset("images/y7ksKAVtaNfwVDaVj5QwLKiyvI.jpg")}
        alt="Maroua speaking on a panel at Stanford FSI"
      />

      <section className="about-section fade-up">
        <p className="about-kicker">My Story in Tech</p>
        <h2>Hi, I&apos;m Maroua !</h2>
        <p>
          Stanford CS + Product Design student, focused on building thoughtful, well-functioning
          systems. I like writing code just as much as I like designing experiences, and I usually
          end up doing both.
        </p>
        <p>
          I&apos;ve worked across C/C++, Python, and JavaScript, building everything from language
          and AI systems to social apps and full-stack prototypes. I enjoy getting into the
          technical details (how data flows, how systems scale, how things break) as much as I enjoy
          making them usable.
        </p>
        <p>
          I&apos;m drawn to messy problems: the kind where you need both solid engineering and human
          intuition to make something work. (Think: systems diagrams open in one tab, code editor in
          another, and 15 questions about user behavior in my head.)
        </p>
      </section>

      <section className="about-section fade-up">
        <h2>How I think</h2>
        <p>I&apos;m a builder, yet also a translator. I like sitting in the in-between:</p>
        <ul>
          <li>Between engineers and users</li>
          <li>Between data and decisions</li>
          <li>Between “what exists” and “what helps”</li>
        </ul>
        <p>My process usually looks like:</p>
        <ol>
          <li>Talk to people (a lot)</li>
          <li>Map the system until it makes sense</li>
          <li>Find where things are disrupted</li>
          <li>Build something scrappy</li>
          <li>Iterate</li>
        </ol>
        <p>
          <strong>I think a lot about things like:</strong>
        </p>
        <ul>
          <li>How people build trust in systems</li>
          <li>How information is surfaced (or hidden)</li>
          <li>How design shapes behavior and decisions</li>
          <li>And how technology can include or exclude entire communities</li>
        </ul>
        <p>
          The common thread is this: I like complex, human problems. The kind where the solution
          lives somewhere between systems, design, and real-world context. If it&apos;s ambiguous, a
          little chaotic, and grounded in reality… I&apos;m probably excited about it.
        </p>
      </section>

      <section className="about-section fade-up">
        <h2>My approach: human-centered</h2>
        <p>I start with people. Always.</p>
        <p>
          Not in a vague “users-first” way, more like: talking to people, listening closely, and
          trying to understand how things work on the ground. Most of the systems I care about are,
          beyond being technical, human systems.
        </p>
        <p>What I care about in design</p>
        <p>I think good design is less about aesthetics and more about alignment.</p>
        <p>Alignment between:</p>
        <ul>
          <li>What the system knows</li>
          <li>What the user needs</li>
          <li>And what the moment requires</li>
        </ul>
        <p>Especially in high-stakes environments, design becomes a way to:</p>
        <ul>
          <li>Reduce cognitive load</li>
          <li>Surface the right information at the right time</li>
          <li>And help people make better, more confident decisions</li>
        </ul>
      </section>

      <section className="about-section fade-up">
        <h2>A few things about me</h2>
        <ul>
          <li>
            I speak 5 languages, I think a lot about access, inclusion, and who gets left out of
            systems
          </li>
          <li>I&apos;ve been a theatre actor since I was 9, which explains the energy</li>
          <li>
            I describe myself (accurately) as a ball of energy, my friends prefer the term &quot;Miss
            Sunshine&quot;
          </li>
          <li>
            I may not be the prettiest or the funniest girl out there, but let me tell you something:
            I&apos;m also not the smartest
          </li>
        </ul>

        <div className="about-strip">
          <img
            src={asset("images/qXQUytC8Ww6sk2yh5h4Pg0SqHZY.png")}
            alt="Personal collage of places, culture, and references"
          />
        </div>
      </section>
    </main>
  );
}
