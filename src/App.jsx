import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import PowerfulFeatures from "./components/PowerfulFeatures";
import Features from "./components/Features";
import Interviews from "./components/Interviews";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useAnchorScroll from "./hooks/useAnchorScroll";

export default function App() {
  useAnchorScroll();
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Benefits />
        <PowerfulFeatures />
        <Features />
        <Interviews />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
