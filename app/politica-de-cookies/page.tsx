import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politică de Cookie-uri",
  description: "Politica de cookie-uri DigiTalent – ce cookie-uri folosim, scopul lor și cum le poți gestiona sau dezactiva.",
  alternates: { canonical: "https://www.digitalent.com/politica-de-cookies" },
  robots: { index: false, follow: false },
};

const MINT = "#C2E6DF";
const DARK = "#131313";

const cookies = [
  {
    name: "_ga",
    provider: "Google Analytics",
    purpose: "Distinge utilizatorii unici prin atribuirea unui ID generat aleatoriu.",
    duration: "2 ani",
    type: "Analitice",
  },
  {
    name: `_ga_XTRJ2SCMVR`,
    provider: "Google Analytics",
    purpose: "Menține starea sesiunii pentru Google Analytics 4.",
    duration: "2 ani",
    type: "Analitice",
  },
  {
    name: "_vercel_live_token",
    provider: "Vercel",
    purpose: "Folosit de infrastructura Vercel pentru previzualizări de deployment.",
    duration: "Sesiune",
    type: "Tehnice",
  },
];

const sections = [
  {
    title: "1. Ce sunt cookie-urile",
    content: `Cookie-urile sunt fișiere text de mici dimensiuni stocate pe dispozitivul tău (calculator, telefon, tabletă) atunci când vizitezi un site web. Ele permit site-ului să-și amintească acțiunile și preferințele tale pe o perioadă de timp, astfel încât să nu fie nevoie să le reintroduci de fiecare dată când revii pe site sau navighezi între pagini.`,
  },
  {
    title: "2. Ce tipuri de cookie-uri folosim",
    content: `Folosim următoarele categorii de cookie-uri:\n\n• Cookie-uri tehnice / esențiale: necesare pentru funcționarea corectă a site-ului. Nu pot fi dezactivate.\n• Cookie-uri analitice: ne ajută să înțelegem cum interacționează vizitatorii cu site-ul (pagini vizitate, timp petrecut, sursa traficului). Datele sunt anonimizate și agregate.\n\nNu folosim cookie-uri de marketing sau de urmărire a comportamentului pe alte site-uri.`,
  },
  {
    title: "4. Cum poți gestiona cookie-urile",
    content: `Ai mai multe opțiuni pentru a controla cookie-urile:\n\n• Setările browserului: poți configura browserul să blocheze sau să șteargă cookie-urile. Instrucțiuni pentru cele mai populare browsere:\n  – Chrome: Setări → Confidențialitate și securitate → Cookie-uri\n  – Firefox: Opțiuni → Confidențialitate și securitate\n  – Safari: Preferințe → Confidențialitate\n  – Edge: Setări → Cookie-uri și permisiuni pentru site\n\n• Google Analytics Opt-out: poți dezactiva urmărirea Google Analytics instalând extensia oficială: https://tools.google.com/dlpage/gaoptout\n\nAtenție: dezactivarea anumitor cookie-uri poate afecta funcționalitatea site-ului.`,
  },
  {
    title: "5. Cookie-uri third-party",
    content: `Site-ul nostru folosește servicii terțe care pot plasa propriile cookie-uri:\n\n• Google Analytics (Google LLC) – pentru analiza traficului. Politica de confidențialitate Google: https://policies.google.com/privacy\n• Vercel Inc. – pentru infrastructura de hosting și performanță.\n\nAcești furnizori au propriile politici de confidențialitate și sunt responsabili pentru cookie-urile lor.`,
  },
  {
    title: "6. Actualizări ale acestei politici",
    content: `Putem actualiza această politică de cookie-uri ori de câte ori este necesar pentru a reflecta modificări ale cookie-urilor utilizate sau ale cerințelor legale. Data ultimei actualizări este afișată în antetul paginii.`,
  },
];

export default function PoliticaCookiesPage() {
  return (
    <>
      <section style={{ background: DARK, paddingTop: "8rem", paddingBottom: "4rem", position: "relative", overflow: "hidden" }}>
        <span style={{ position: "absolute", top: "50%", right: "-2rem", transform: "translateY(-50%)", fontSize: "10rem", fontWeight: 900, fontFamily: "Lato, sans-serif", color: "rgba(255,255,255,0.04)", whiteSpace: "nowrap", pointerEvents: "none", lineHeight: 1 }}>Cookies</span>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <span style={{ color: MINT, fontWeight: 700, fontSize: "1rem", fontFamily: "Lato, sans-serif", display: "block", marginBottom: "0.75rem" }}>Legal</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 900, fontFamily: "Lato, sans-serif" }}>Politică de Cookie-uri</h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", fontFamily: "Lato, sans-serif", marginTop: "1rem" }}>Ultima actualizare: mai 2025</p>
        </div>
      </section>

      <section style={{ padding: "5rem 0", background: "#fff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 2rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>

          {sections.slice(0, 2).map((s) => (
            <div key={s.title} style={{ borderBottom: "1px solid #f0f0f0", paddingBottom: "2.5rem" }}>
              <h2 style={{ color: DARK, fontSize: "1.15rem", fontWeight: 800, fontFamily: "Lato, sans-serif", marginBottom: "1rem" }}>{s.title}</h2>
              {s.content.split("\n").map((line, i) =>
                line.trim() === "" ? null : (
                  <p key={i} style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: 1.85, fontFamily: "Lato, sans-serif", marginBottom: "0.5rem" }}>{line}</p>
                )
              )}
            </div>
          ))}

          <div style={{ borderBottom: "1px solid #f0f0f0", paddingBottom: "2.5rem" }}>
            <h2 style={{ color: DARK, fontSize: "1.15rem", fontWeight: 800, fontFamily: "Lato, sans-serif", marginBottom: "1.25rem" }}>3. Cookie-urile pe care le folosim</h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Lato, sans-serif", fontSize: "0.88rem" }}>
                <thead>
                  <tr style={{ background: DARK }}>
                    {["Nume", "Furnizor", "Scop", "Durată", "Tip"].map((h) => (
                      <th key={h} style={{ color: MINT, fontWeight: 700, padding: "0.75rem 1rem", textAlign: "left", whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cookies.map((c, i) => (
                    <tr key={c.name} style={{ background: i % 2 === 0 ? "#f9f9f7" : "#fff" }}>
                      <td style={{ padding: "0.75rem 1rem", color: DARK, fontWeight: 700, whiteSpace: "nowrap" }}>{c.name}</td>
                      <td style={{ padding: "0.75rem 1rem", color: "#4a4a4a" }}>{c.provider}</td>
                      <td style={{ padding: "0.75rem 1rem", color: "#4a4a4a" }}>{c.purpose}</td>
                      <td style={{ padding: "0.75rem 1rem", color: "#4a4a4a", whiteSpace: "nowrap" }}>{c.duration}</td>
                      <td style={{ padding: "0.75rem 1rem" }}>
                        <span style={{ background: MINT, color: DARK, fontSize: "0.75rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: 99 }}>{c.type}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {sections.slice(2).map((s) => (
            <div key={s.title} style={{ borderBottom: "1px solid #f0f0f0", paddingBottom: "2.5rem" }}>
              <h2 style={{ color: DARK, fontSize: "1.15rem", fontWeight: 800, fontFamily: "Lato, sans-serif", marginBottom: "1rem" }}>{s.title}</h2>
              {s.content.split("\n").map((line, i) =>
                line.trim() === "" ? null : (
                  <p key={i} style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: 1.85, fontFamily: "Lato, sans-serif", marginBottom: "0.5rem" }}>{line}</p>
                )
              )}
            </div>
          ))}

        </div>
      </section>
    </>
  );
}
