import { Camera, ChartNoAxesCombined, Goal } from "lucide-react";
import capture from "../assets/images/features/camera-capture.jpg";
import review from "../assets/images/features/session-review.jpg";
import drills from "../assets/images/features/focused-drills.jpg";

export default function PowerfulFeatures() {
  return (
    <section
      id="powerful-features"
      tabIndex={-1}
      className="powerful-section section"
    >
      <div className="container">
        <div className="section-heading powerful-heading">
          <h2>
            Powerful features.
            <br />
            Made for practice.
          </h2>
          <p>
            From your first recording to your next training goal. These are the
            tools we’re building into LiveCoach.
          </p>
        </div>
        <article className="feature-lead">
          <img
            className="feature-photo"
            src={capture}
            alt="A badminton player practising a forehand while a phone on a tripod captures her movement"
            width="1536"
            height="1024"
            loading="lazy"
          />
          <div className="feature-lead-copy">
            <Camera
              className="feature-symbol"
              size={28}
              strokeWidth={1.4}
              aria-hidden="true"
            />
            <h3>
              Camera-based
              <br />
              motion tracking
            </h3>
            <p>
              A clearer picture of how you move. Our vision system is being
              designed to identify body positions and technique patterns using
              your phone camera or webcam.
            </p>
            <ul className="feature-points">
              <li>Capture movement with your own device</li>
              <li>Review posture and technique</li>
              <li>No additional sensors required</li>
            </ul>
            <a className="text-link" href="#how-it-works">
              See how it works
            </a>
          </div>
        </article>
        <div className="feature-pair">
          <article className="feature-story">
            <img
              className="feature-photo"
              src={review}
              alt="A cricket athlete reviewing a tablet courtside after a training session"
              width="1536"
              height="1024"
              loading="lazy"
            />
            <div className="feature-story-copy">
              <ChartNoAxesCombined
                className="feature-symbol"
                size={25}
                strokeWidth={1.4}
                aria-hidden="true"
              />
              <div>
                <h3>Performance analytics</h3>
                <p>
                  Look beyond a single attempt. A session dashboard is planned
                  to help you compare your training, follow technique trends,
                  and see where to focus next.
                </p>
              </div>
            </div>
          </article>
          <article className="feature-story">
            <img
              className="feature-photo"
              src={drills}
              alt="A badminton athlete practising footwork through yellow floor markers"
              width="1536"
              height="1024"
              loading="lazy"
            />
            <div className="feature-story-copy">
              <Goal
                className="feature-symbol"
                size={25}
                strokeWidth={1.4}
                aria-hidden="true"
              />
              <div>
                <h3>Personalised training guidance</h3>
                <p>
                  Turn feedback into something to practise. Suggested drills and
                  technique adjustments will help you build sessions around your
                  goals and areas for improvement.
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="features-closing">
          <p>Features in development. Images illustrate training scenarios.</p>
          <a className="text-link" href="#waitlist">
            Get early-access updates
          </a>
        </div>
      </div>
    </section>
  );
}
