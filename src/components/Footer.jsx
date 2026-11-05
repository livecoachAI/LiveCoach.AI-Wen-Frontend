export default function Footer() {
  return (
    <footer className="container footer">
      <div className="footer-top">
        <a href="#home" className="brand">
          LiveCoach<span className="brand-ai">.AI</span>
        </a>
        <p>More purpose in every practice.</p>
        <a href="mailto:livecoachai@gmail.com">livecoachai@gmail.com</a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} LiveCoach.AI</span>
        <span>Made in Colombo, Sri Lanka</span>
        <a
          href="https://www.instagram.com/livecoach.ai?igsh=MTZpcWU1M2NyeXdseA=="
          target="_blank"
          rel="noreferrer"
        >
          Instagram<span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
