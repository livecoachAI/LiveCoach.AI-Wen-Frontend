import { useState, useRef } from "react";
import { Check, LoaderCircle } from "lucide-react";
import { isSignupConfirmed } from "../lib/waitlist";
const waitlistUrl =
  "https://script.google.com/macros/s/AKfycbxSs7sauddTzoSg4bd6VntdXE9ybOb01M98BU0IMCdJrefPMfchQ26AL3ey2TDXoMaiIg/exec";
export default function Contact() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const pending = useRef(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    if (pending.current) return;
    pending.current = true;
    setStatus("pending");
    try {
      const response = await fetch(waitlistUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ Email: email.trim() }),
        signal: AbortSignal.timeout(15000),
      });
      const body = await response.text();
      if (!response.ok || !isSignupConfirmed(body))
        throw new Error("Signup was not confirmed");
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      pending.current = false;
    }
  };
  return (
    <section id="waitlist" tabIndex={-1} className="waitlist">
      <div className="container waitlist-layout">
        <div>
          <p className="waitlist-label">LiveCoach is on its way.</p>
          <h2>
            Your next chapter
            <br />
            starts in practice.
          </h2>
          <p>Join the waitlist to hear when early access opens.</p>
        </div>
        <div className="signup-area">
          {status === "success" ? (
            <div className="signup-success" role="status">
              <Check size={32} />
              <h3>You’re on the list.</h3>
              <p>We’ll email you when there’s news about early access.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <label htmlFor="signup-email">Your email address</label>
              <div className="email-field">
                <input
                  id="signup-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  maxLength={254}
                  disabled={status === "pending"}
                  aria-describedby={
                    status === "error"
                      ? "signup-error signup-note"
                      : "signup-note"
                  }
                />
                <button type="submit" disabled={status === "pending"}>
                  {status === "pending" ? (
                    <>
                      <LoaderCircle className="loading-icon" size={18} />
                      Joining…
                    </>
                  ) : (
                    "Join the waitlist"
                  )}
                </button>
              </div>
              <p id="signup-note" className="signup-note">
                By joining, you agree to receive LiveCoach early-access updates
                by email.
              </p>
              {status === "error" && (
                <p id="signup-error" className="signup-error" role="alert">
                  We couldn’t confirm your signup. Please try again, or email{" "}
                  <a href="mailto:livecoachai@gmail.com">
                    livecoachai@gmail.com
                  </a>
                  .
                </p>
              )}
              <span className="sr-only" role="status">
                {status === "pending" ? "Sending your signup." : ""}
              </span>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
