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
        width: "min(760px, calc(100vw - 2rem))",
        zIndex: 1000,
        animation: "cookieSlideUp 0.5s cubic-bezier(0.16,1,0.3,1) both",
      }}>
        {/* Card */}
        <div style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)",
          border: "1px solid rgba(194,230,223,0.15)",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
        }}>
          {/* Mint accent bar top */}
          <div style={{ height: 3, background: `linear-gradient(90deg, ${MINT}, rgba(194,230,223,0.3))` }} />

          <div style={{ padding: "1.75rem 2rem", display: "flex", gap: "2rem", alignItems: "center" }} className="cookie-inner">

            {/* Icon block */}
            <div style={{
              flexShrink: 0,
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "rgba(194,230,223,0.1)",
              border: "1px solid rgba(194,230,223,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.6rem",
            }}>
              🍪
            </div>

            {/* Text */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                color: "#fff",
                fontWeight: 800,
                fontFamily: "Lato, sans-serif",
                fontSize: "1rem",
                marginBottom: "0.35rem",
                letterSpacing: "-0.01em",
              }}>
                Respectăm confidențialitatea ta
              </p>
              <p style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "Lato, sans-serif",
                fontSize: "0.84rem",
                lineHeight: 1.65,
                margin: 0,
              }}>
                Folosim cookie-uri analitice pentru a îmbunătăți experiența pe site. Datele sunt anonimizate.{" "}
                <Link href="/politica-de-cookies" style={{
                  color: MINT,
                  textDecoration: "none",
                  fontWeight: 600,
                  borderBottom: `1px solid rgba(194,230,223,0.4)`,
                }}>
                  Află mai mult
                </Link>
              </p>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "0.6rem", flexShrink: 0 }} className="cookie-btns">
              <button
                onClick={decline}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.6)",
                  borderRadius: 10,
                  padding: "0.65rem 1.1rem",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.background = "rgba(255,255,255,0.1)";
                  b.style.color = "#fff";
                }}
                onMouseLeave={e => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.background = "rgba(255,255,255,0.06)";
                  b.style.color = "rgba(255,255,255,0.6)";
                }}
              >
                Refuză
              </button>
              <button
                onClick={accept}
                style={{
                  background: MINT,
                  border: "none",
                  color: DARK,
                  borderRadius: 10,
                  padding: "0.65rem 1.4rem",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  boxShadow: `0 4px 20px rgba(194,230,223,0.25)`,
                  transition: "transform 0.15s, box-shadow 0.15s",
                }}
                onMouseEnter={e => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.transform = "translateY(-1px)";
                  b.style.boxShadow = "0 6px 24px rgba(194,230,223,0.35)";
                }}
                onMouseLeave={e => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.transform = "translateY(0)";
                  b.style.boxShadow = "0 4px 20px rgba(194,230,223,0.25)";
                }}
              >
                Acceptă toate
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cookieSlideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(32px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @media (max-width: 640px) {
          .cookie-inner { flex-direction: column !important; gap: 1.25rem !important; }
          .cookie-btns  { width: 100%; justify-content: flex-end; }
        }
      `}</style>
    </>
  );
}
