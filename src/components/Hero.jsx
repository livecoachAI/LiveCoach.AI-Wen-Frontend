import { useRef } from "react";
import {
  motion as Motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import athlete from "../assets/images/hero-lcw.png";

export default function Hero() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 75]);
  return (
    <section id="home" tabIndex={-1} className="hero container" ref={ref}>
      <Motion.div
        className="hero-copy"
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="availability">
          <span />
          In development. Built for your next session.
        </p>
        <h1>
          Put purpose
          <br />
          into practice.
        </h1>
        <p className="hero-description">
          See your technique. Know what to work on.
          <br className="desktop-break" /> Camera-based coaching, built to help
          you make more of every training session.
        </p>
        <div className="hero-actions">
          <a className="button" href="#waitlist">
            Join the waitlist
          </a>
          <a
            className="video-link"
            href="https://youtu.be/HetG1HfYZUU"
            target="_blank"
            rel="noreferrer"
          >
            <span className="play-icon">
              <Play size={14} fill="currentColor" />
            </span>
            Watch the concept
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <p className="hero-note">Coming to your phone. No extra sensors.</p>
      </Motion.div>
      <div className="hero-visual" aria-hidden="true">
        <div className="court">
          <div className="court-inner" />
        </div>
        <span className="practice-word">PRACTICE</span>
        <Motion.img
          className="hero-athlete"
          src={athlete}
          alt=""
          fetchPriority="high"
          style={{ y: reduced ? 0 : y }}
        />
        <div className="visual-caption">
          <span className="caption-mark" />
          Every movement is a chance to improve.
        </div>
      </div>
      <a href="#why-livecoach" className="hero-bottom">
        A closer look at LiveCoach <ArrowDown size={17} />
      </a>
    </section>
  );
}
