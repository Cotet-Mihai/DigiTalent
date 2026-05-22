"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const MINT = "#C2E6DF";
const DARK = "#131313";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    window.dispatchEvent(new Event("cookie-consent-update"));
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    window.dispatchEvent(new Event("cookie-consent-update"));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      <div style={{
        position: "fixed",
        bottom: "1.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(680px, calc(100vw - 2rem))",
        background: DARK,
        border: "1px solid rgba(194,230,223,0.2)",
        borderRadius: 16,
        padding: "1.5rem",
        zIndex: 1000,
        boxShadow: "0 8px 40px rgba(0,0,0,0.45)",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        animation: "cookieSlideUp 0.4s cubic-bezier(0.16,1,0.3,1) both",
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
          <span style={{ fontSize: "1.5rem", lineHeight: 1, flexShrink: 0 }}>🍪</span>
          <div>
            <p style={{ color: "#fff", fontWeight: 700, fontFamily: "Lato, sans-serif", fontSize: "0.975rem", marginBottom: "0.4rem" }}>
              Folosim cookie-uri
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Lato, sans-serif", fontSize: "0.875rem", lineHeight: 1.6 }}>
              Utilizăm cookie-uri analitice (Google Analytics) pentru a înțelege cum este folosit site-ul și a-l îmbunătăți. Nu colectăm date personale fără acordul tău.{" "}
              <Link href="/politica-de-cookies" style={{ color: MINT, textDecoration: "underline", fontFamily: "Lato, sans-serif" }}>
                Politică de cookie-uri
              </Link>
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end", flexWrap: "wrap" }}>
          <button
            onClick={decline}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.7)",
              borderRadius: 8,
              padding: "0.6rem 1.25rem",
              fontFamily: "Lato, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.5)"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.2)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)"; }}
          >
            Refuză
          </button>
          <button
            onClick={accept}
            style={{
              background: MINT,
              border: "none",
              color: DARK,
              borderRadius: 8,
              padding: "0.6rem 1.5rem",
              fontFamily: "Lato, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Acceptă toate
          </button>
        </div>
      </div>

      <style>{`
        @keyframes cookieSlideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(24px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </>
  );
}
