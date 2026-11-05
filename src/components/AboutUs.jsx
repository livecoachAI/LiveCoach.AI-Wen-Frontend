import udev from "../assets/images/udev.jpeg";
import kalana from "../assets/images/kalana.jpg";
import loku from "../assets/images/loku.jpeg";
import thewan from "../assets/images/thewan.jpeg";
import buddhima from "../assets/images/buddhima.jpeg";
import dinuka from "../assets/images/dinuka.jpeg";
const team = [
  { name: "Udev Nuyavin", role: "Project Manager", image: udev },
  {
    name: "Kalana Jayaweera",
    role: "ML Developer",
    image: kalana,
    linkedin: "https://www.linkedin.com/in/kalanajayaweera0714/",
    github: "https://github.com/KalanJayy",
  },
  {
    name: "Kalana Malhara",
    role: "ML Developer",
    image: loku,
    linkedin: "https://www.linkedin.com/in/kalana-malhara-5a24a532a/",
    github: "https://github.com/kalana-03",
  },
  {
    name: "Thewan Sewmin",
    role: "ML Developer",
    image: thewan,
    linkedin: "https://www.linkedin.com/in/thewan-sewmin-a71687349/",
    github: "https://github.com/sewmin999",
  },
  {
    name: "Buddhima Jothiwansa",
    role: "Frontend & Backend Developer",
    image: buddhima,
    linkedin: "https://www.linkedin.com/in/buddhima-jothiwansa-20b91027a/",
    github: "https://github.com/Buddhima1030",
  },
  {
    name: "Dinuka Samarasinghe",
    role: "Frontend & Backend Developer",
    image: dinuka,
    linkedin: "https://www.linkedin.com/in/dinukas",
    github: "https://github.com/DinukaS2004",
  },
];
export default function AboutUs() {
  return (
    <section className="section container about" id="about" tabIndex={-1}>
      <div className="about-intro">
        <h2>
          Built with a<br />
          shared ambition.
        </h2>
        <div>
          <p>
            We’re a student team in Colombo working to make technique feedback
            more accessible to athletes. LiveCoach brings together our work in
            machine learning, design, and software development.
          </p>
          <p className="muted">
            Developed as our Software Development Group Project, with guidance
            from our supervisor, Mrs. Kalhari, and input from athletes and
            coaches.
          </p>
        </div>
      </div>
      <details className="team-details">
        <summary>
          <span>Meet the team</span>
          <span className="team-count">
            6 people, one project <span className="details-plus">+</span>
          </span>
        </summary>
        <div className="team-grid">
          {team.map((person) => (
            <article className="team-member" key={person.name}>
              <img
                src={person.image}
                alt={person.name}
                loading="lazy"
                width="88"
                height="88"
              />
              <div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
                {person.linkedin && (
                  <div className="team-links">
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${person.name} on LinkedIn (opens in a new tab)`}
                    >
                      LinkedIn
                    </a>
                    <a
                      href={person.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${person.name} on GitHub (opens in a new tab)`}
                    >
                      GitHub
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}
