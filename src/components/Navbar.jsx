import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/nav-logo.svg";

const links = [
  ["#powerful-features", "Features"],
  ["#how-it-works", "How it works"],
  ["#interviews", "Coach conversations"],
  ["#about", "Our team"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <nav className="container navigation" aria-label="Main navigation">
        <a
          href="#home"
          className="brand"
          aria-label="LiveCoach.AI home"
          onClick={() => setOpen(false)}
        >
          <img src={logo} alt="" width="36" height="32" />
          <span>
            LiveCoach<span className="brand-ai">.AI</span>
          </span>
        </a>
        <div className="desktop-links">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a
            className="button button-small"
            href="#waitlist"
            onClick={() => setOpen(false)}
          >
            Join the waitlist
          </a>
          <button
            ref={toggle}
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <Motion.div
              id="mobile-menu"
              className="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              {links.map(([href, label]) => (
                <a key={href} href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
            </Motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
