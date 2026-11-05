import { Camera, ScanLine, Goal } from "lucide-react";

const reasons = [
  {
    icon: Camera,
    title: "Less equipment. More opportunity.",
    description:
      "Train with the camera you already have. No specialist sensors or wearables to get started.",
  },
  {
    icon: ScanLine,
    title: "Feedback you can put to work.",
    description:
      "Understand the details of your movement, so your next attempt has a clear focus.",
  },
  {
    icon: Goal,
    title: "Practice that starts with you.",
    description:
      "Work on your technique with drills and guidance shaped around your performance.",
  },
];

export default function Benefits() {
  return (
    <section id="why-livecoach" tabIndex={-1} className="why-section section">
      <div className="container why-layout">
        <div className="why-intro">
          <h2>
            Why choose
            <br />
            LiveCoach.AI?
          </h2>
          <p>
            You put in the practice.
            <br />
            Make it easier to see what comes next.
          </p>
          <a className="text-link" href="#powerful-features">
            Explore the features
          </a>
        </div>
        <div className="why-reasons">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article className="why-reason" key={reason.title}>
                <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
