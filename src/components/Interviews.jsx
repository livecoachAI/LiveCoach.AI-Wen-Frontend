import { useState } from "react";
import { Play } from "lucide-react";
import sudath from "../assets/images/sudath.jpeg";
import pemlal from "../assets/images/pemlal.jpeg";
import videoOne from "../assets/videos/Video-01.mp4";
import videoTwo from "../assets/videos/Video-02.mp4";
const interviews = [
  {
    name: "Sudath Munaweera",
    role: "Former first-class cricketer & match referee",
    image: sudath,
    video: videoOne,
  },
  {
    name: "Pemlal Fernando",
    role: "Former first-class cricketer & Level 2 cricket coach",
    image: pemlal,
    video: videoTwo,
  },
];
export default function Interviews() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="interviews" tabIndex={-1} className="interviews section">
      <div className="container">
        <div className="section-heading">
          <h2>
            Start by listening
            <br />
            to the people who coach.
          </h2>
          <p>
            Conversations with cricket professionals about training, technique,
            and where better feedback can help.
          </p>
        </div>
        <div className="interview-grid">
          {interviews.map((person, index) => (
            <article key={person.name} className="interview">
              <div className="interview-media">
                {selected === index ? (
                  <video
                    key={person.video}
                    src={person.video}
                    poster={person.image}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    aria-label={`Interview with ${person.name}`}
                  />
                ) : (
                  <button
                    className="interview-play"
                    onClick={() => setSelected(index)}
                    aria-label={`Play interview with ${person.name}`}
                  >
                    <img src={person.image} alt={person.name} loading="lazy" />
                    <span className="interview-play-label">
                      <span>
                        <Play size={19} fill="currentColor" />
                      </span>
                      Watch conversation
                    </span>
                  </button>
                )}
              </div>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
