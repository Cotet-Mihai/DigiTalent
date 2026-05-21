import { Phone, Mail, MapPin } from "lucide-react";

const MINT = "#C2E6DF";
const DARK = "#131313";

const contactItems = [
  { Icon: Phone, text: "(+407) 3716 1111", iconBg: MINT, iconColor: DARK },
  { Icon: Mail, text: "contact@digitalent.com", iconBg: MINT, iconColor: DARK },
  { Icon: MapPin, text: "Wimpole Street London - England HQ\nVoluntari, Bd. Pipera - Romania HQ", iconBg: MINT, iconColor: DARK },
];

export default function ContactPage() {
  return (
    <>
      <section style={{ background: DARK, paddingTop: "8rem", paddingBottom: "4rem", position: "relative", overflow: "hidden" }}>
        <span style={{ position: "absolute", top: "50%", right: "-2rem", transform: "translateY(-50%)", fontSize: "12rem", fontWeight: 900, fontFamily: "Lato, sans-serif", color: "rgba(255,255,255,0.04)", whiteSpace: "nowrap", pointerEvents: "none", lineHeight: 1 }}>Contact</span>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <span style={{ color: MINT, fontWeight: 700, fontSize: "1rem", fontFamily: "Lato, sans-serif", display: "block", marginBottom: "0.75rem" }}>Career</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2.5rem,5vw,4.5rem)", fontWeight: 900, fontFamily: "Lato, sans-serif" }}>CONTACT US</h1>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section style={{ padding: "4rem 0", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }} className="three-col">
          {contactItems.map((item, i) => (
            <div key={item.text} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1.5rem", border: "1.5px solid #e5e5e5", borderRadius: 16 }}>
              <div style={{ width: 48, height: 48, background: item.iconBg, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <item.Icon size={22} color={item.iconColor} strokeWidth={1.75} />
              </div>
              <p style={{ color: DARK, fontWeight: 700, fontFamily: "Lato, sans-serif", fontSize: "0.95rem", lineHeight: 1.6, whiteSpace: "pre-line", marginTop: "0.1rem" }}>{item.text}</p>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){ .three-col { grid-template-columns:1fr !important; } }`}</style>
      </section>

      {/* FORM + INFO */}
      <section style={{ padding: "1rem 0 5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="two-col">
          <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <input type="email" placeholder="E-mail" style={{ padding: "0.85rem 1rem", border: "1.5px solid #e5e5e5", borderRadius: 8, fontFamily: "Lato, sans-serif", fontSize: "0.9rem", outline: "none", color: DARK }} />
              <input type="tel" placeholder="Telefon" style={{ padding: "0.85rem 1rem", border: "1.5px solid #e5e5e5", borderRadius: 8, fontFamily: "Lato, sans-serif", fontSize: "0.9rem", outline: "none", color: DARK }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <input type="text" placeholder="Nume" style={{ padding: "0.85rem 1rem", border: "1.5px solid #e5e5e5", borderRadius: 8, fontFamily: "Lato, sans-serif", fontSize: "0.9rem", outline: "none", color: DARK }} />
              <input type="text" placeholder="Subiect" style={{ padding: "0.85rem 1rem", border: "1.5px solid #e5e5e5", borderRadius: 8, fontFamily: "Lato, sans-serif", fontSize: "0.9rem", outline: "none", color: DARK }} />
            </div>
            <textarea placeholder="Mesaj" rows={6} style={{ padding: "0.85rem 1rem", border: "1.5px solid #e5e5e5", borderRadius: 8, fontFamily: "Lato, sans-serif", fontSize: "0.9rem", outline: "none", color: DARK, resize: "vertical" }} />
            <button type="submit" style={{ background: DARK, color: MINT, padding: "0.9rem 2rem", fontWeight: 700, fontFamily: "Lato, sans-serif", fontSize: "1rem", border: "none", cursor: "pointer", alignSelf: "flex-start", borderRadius: 8 }}>
              Trimite
            </button>
          </form>

          <div style={{ background: DARK, padding: "2.5rem", borderRadius: 16 }}>
            <h2 style={{ color: MINT, fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.5rem", fontFamily: "Lato, sans-serif" }}>Contactează-ne!</h2>
            <p style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700, fontSize: "1rem", fontFamily: "Lato, sans-serif", marginBottom: "0.25rem" }}>ARTIFEX PROGRESSIO SRL</p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", fontFamily: "Lato, sans-serif", marginBottom: "1.75rem" }}>Franciză TIGER RECRUITMENT LTD.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { Icon: Phone, label: "(+407) 3716 1111" },
                { Icon: Mail, label: "contact@digitalent.ro" },
                { Icon: MapPin, label: "Wimpole Street London - England HQ\nVoluntari, Bd. Pipera - Romania HQ" },
              ].map((c) => (
                <div key={c.label} style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
                  <div style={{ width: 36, height: 36, background: "rgba(194,230,223,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <c.Icon size={16} color={MINT} strokeWidth={1.75} />
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", fontFamily: "Lato, sans-serif", whiteSpace: "pre-line", lineHeight: 1.5, marginTop: "0.4rem" }}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){ .two-col { grid-template-columns:1fr !important; } }`}</style>
      </section>
    </>
  );
}
