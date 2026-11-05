import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Plus, Minus, Camera, ScanLine, Repeat2 } from "lucide-react";
import athletes from "../assets/images/hero-2.png";

const steps = [
  {
    title: "Set up your camera.",
    description:
      "Use your phone camera or webcam to capture your movement. No wearables or specialist equipment needed.",
    icon: Camera,
    label: "Capture your movement",
    note: "A clear view. Room to move.",
  },
  {
    title: "See what needs work.",
    description:
      "Review feedback on your body position and technique, so you can understand the movement behind each attempt.",
    icon: ScanLine,
    label: "Understand your technique",
    note: "Observe. Review. Find your focus.",
  },
  {
    title: "Give your next session a focus.",
    description:
      "Use suggested drills and session history to work on your technique and follow your progress over time.",
    icon: Repeat2,
    label: "Bring feedback into practice",
    note: "One adjustment. Another attempt.",
  },
];
export default function Features() {
  const [active, setActive] = useState(0);
  const Icon = steps[active].icon;
  return (
    <section id="how-it-works" tabIndex={-1} className="section container">
      <div className="section-heading">
        <h2>
          A clearer view.
          <br />A better practice.
        </h2>
        <p>
          We’re building LiveCoach to turn movement into useful feedback. Here’s
          how the experience is taking shape.
        </p>
      </div>
      <div className="process-layout">
        <div className="process-visual">
          <div className="preview-header">
            <span>
              <Icon size={18} />
              {steps[active].label}
            </span>
            <span className="concept-label">Concept preview</span>
          </div>
          <div className={`capture-frame capture-step-${active}`}>
            <div className="capture-corner top-left" />
            <div className="capture-corner top-right" />
            <div className="capture-corner bottom-left" />
            <div className="capture-corner bottom-right" />
            <img
              src={athletes}
              alt="Badminton and cricket athletes illustrating camera-based training"
              loading="lazy"
              width="500"
              height="500"
            />
          </div>
          <AnimatePresence mode="wait">
            <Motion.p
              className="preview-note"
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {steps[active].note}
            </Motion.p>
          </AnimatePresence>
        </div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div
              className={`process-step ${active === index ? "is-active" : ""}`}
              key={step.title}
            >
              <h3>
                <button
                  id={`step-button-${index}`}
                  aria-expanded={active === index}
                  aria-controls={`step-panel-${index}`}
                  onClick={() => setActive(index)}
                >
                  <span className="step-number">0{index + 1}</span>
                  <span>{step.title}</span>
                  {active === index ? <Minus size={20} /> : <Plus size={20} />}
                </button>
              </h3>
              <div
                id={`step-panel-${index}`}
                role="region"
                aria-labelledby={`step-button-${index}`}
                hidden={active !== index}
              >
                <p>{step.description}</p>
              </div>
            </div>
          ))}
          <a className="text-link" href="#waitlist">
            Be part of the first release
          </a>
        </div>
      </div>
    </section>
  );
}
