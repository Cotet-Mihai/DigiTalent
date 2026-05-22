"use client";
import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function AnalyticsConsent() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    function check() {
      setAccepted(localStorage.getItem("cookie-consent") === "accepted");
    }
    check();
    window.addEventListener("cookie-consent-update", check);
    return () => window.removeEventListener("cookie-consent-update", check);
  }, []);

  if (!accepted) return null;
  return <GoogleAnalytics gaId="G-XTRJ2SCMVR" />;
}
