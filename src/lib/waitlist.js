// Accept explicit acknowledgement; an HTTP 200 can also contain a script error page.
export function isSignupConfirmed(body) {
  const text = body.trim();
  if (!text || /<!doctype|<html/i.test(text)) return false;
  try {
    const data = JSON.parse(text);
    if (!data || typeof data !== "object") return false;
    if (data.error || data.success === false) return false;
    return (
      data.success === true ||
      data.result === "success" ||
      data.status === "success"
    );
  } catch {
    if (
      /\berror\b|\bfailed\b|\bexception\b|\bunsuccessful\b|\bnot\b/i.test(text)
    )
      return false;
    return /\bsuccess(?:fully)?\b|\bsubscribed\b|\balready (?:registered|subscribed)\b/i.test(
      text,
    );
  }
}
