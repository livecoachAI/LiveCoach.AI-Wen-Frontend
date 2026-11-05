import { useEffect } from "react";
import { animate, useReducedMotion } from "framer-motion";

export default function useAnchorScroll() {
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    let animation;
    const cancel = () => animation?.stop();
    const onClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (
        !link ||
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      )
        return;
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      cancel();
      const top = Math.max(
        0,
        Math.min(
          target.getBoundingClientRect().top + window.scrollY - 100,
          document.documentElement.scrollHeight - window.innerHeight,
        ),
      );
      const finish = () => {
        history.pushState(null, "", `#${id}`);
        target.focus({ preventScroll: true });
        window.scrollTo({ top, left: 0, behavior: "instant" });
      };
      if (reducedMotion) {
        window.scrollTo(0, top);
        finish();
      } else {
        animation = animate(window.scrollY, top, {
          duration: Math.min(0.9, 0.35 + Math.abs(top - window.scrollY) / 5000),
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (value) => window.scrollTo(0, value),
          onComplete: finish,
        });
      }
    };
    document.addEventListener("click", onClick);
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    window.addEventListener("keydown", cancel);
    window.addEventListener("pointerdown", cancel);
    return () => {
      cancel();
      document.removeEventListener("click", onClick);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
      window.removeEventListener("keydown", cancel);
      window.removeEventListener("pointerdown", cancel);
    };
  }, [reducedMotion]);
}
