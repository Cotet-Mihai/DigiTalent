import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const MINT = "#C2E6DF";
const DARK = "#131313";

export default function Footer() {
  return (
    <footer style={{ background: DARK, color: "#fff", paddingTop: "3.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "2rem", paddingBottom: "3rem" }} className="footer-grid">
          <div>
            <Image src="/images/logo1.png" alt="DigiTalent" width={600} height={200} style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
          </div>
          <div>
            <h2 style={{ color: MINT, fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.25rem", fontFamily: "Lato, sans-serif" }}>Navigare</h2>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { href: "/", label: "Acasa" },
                { href: "/despre-noi", label: "Despre noi" },
                { href: "/jobs", label: "Job list" },
                { href: "/blog", label: "Blog" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "#ccc", textDecoration: "none", fontSize: "0.95rem", fontFamily: "Lato, sans-serif" }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "flex-start", paddingTop: "0.25rem" }}>
            <a href="tel:0737161111" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
              <div style={{ width: 36, height: 36, background: "rgba(194,230,223,0.12)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Phone size={16} color={MINT} strokeWidth={1.75} />
              </div>
              <span style={{ color: "#fff", fontWeight: 700, fontFamily: "Lato, sans-serif", fontSize: "0.95rem" }}>0737 161 111</span>
            </a>
            <a href="mailto:contact@digitalent.ro" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
              <div style={{ width: 36, height: 36, background: "rgba(194,230,223,0.12)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Mail size={16} color={MINT} strokeWidth={1.75} />
              </div>
              <span style={{ color: "#fff", fontWeight: 700, fontFamily: "Lato, sans-serif", fontSize: "0.95rem" }}>contact@digitalent.ro</span>
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "flex-start", paddingTop: "0.25rem" }}>
            <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
              <Image src="/anpc-sal.svg" alt="SAL – Soluționarea Alternativă a Litigiilor" width={250} height={50} style={{ height: 45, width: "auto" }} />
            </a>
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
              <Image src="/anpc-sol.svg" alt="SOL – Soluționarea Online a Litigiilor" width={250} height={50} style={{ height: 45, width: "auto" }} />
            </a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "1.25rem 0", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
          <p style={{ color: "#888", fontSize: "0.875rem", fontFamily: "Lato, sans-serif" }}>© 2025 DigiTalent • All Rights Reserved</p>
          <span style={{ color: "#444", fontSize: "0.875rem" }}>•</span>
          <Link href="/politica-de-confidentialitate" style={{ color: "#888", fontSize: "0.875rem", fontFamily: "Lato, sans-serif", textDecoration: "none" }}>Politică de Confidențialitate</Link>
          <span style={{ color: "#444", fontSize: "0.875rem" }}>•</span>
          <Link href="/politica-de-cookies" style={{ color: "#888", fontSize: "0.875rem", fontFamily: "Lato, sans-serif", textDecoration: "none" }}>Politică de Cookie-uri</Link>
        </div>
      </div>
      <style>{`@media(max-width:768px){ .footer-grid { grid-template-columns:1fr !important; } }`}</style>
    </footer>
  );
}
