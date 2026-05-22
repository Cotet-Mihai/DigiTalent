import type { Metadata } from "next";
import Link from "next/link";
import { Award, Users, Building, Target, Rocket, Lightbulb, ClipboardCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Despre Noi – 15 Ani de Recrutare în România",
  description: "DigiTalent este o agenție de recrutare cu experiență de peste 15 ani, cu sediul în București, care conectează talentele cu companiile din toată România. Află misiunea și valorile noastre.",
  alternates: { canonical: "https://www.digitalent.com/despre-noi" },
  openGraph: {
    title: "Despre DigiTalent – Agenție de Recrutare România",
    description: "Peste 15 ani de experiență în recrutare. Conectăm talentele cu companiile potrivite din toată România.",
    url: "https://www.digitalent.com/despre-noi",
  },
};

const MINT = "#C2E6DF";
const DARK = "#131313";

const skills = [
  { label: "Expertiză și Cunoștințe", value: 95 },
  { label: "Resurse și Infrastructură", value: 88 },
  { label: "Soluții Personalizate", value: 92 },
  { label: "Suport Continuu", value: 85 },
  { label: "Flexibilitate și Adaptabilitate", value: 90 },
];

export default function DesprePage() {
  return (
    <>
      <section style={{ background: DARK, paddingTop: "8rem", paddingBottom: "4rem", position: "relative", overflow: "hidden" }}>
        <span style={{ position: "absolute", top: "50%", right: "-2rem", transform: "translateY(-50%)", fontSize: "12rem", fontWeight: 900, fontFamily: "Lato, sans-serif", color: "rgba(255,255,255,0.04)", whiteSpace: "nowrap", pointerEvents: "none", lineHeight: 1 }}>Despre noi</span>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <span className="hero-slide-r hero-d1" style={{ color: MINT, fontWeight: 700, fontSize: "1rem", fontFamily: "Lato, sans-serif", display: "block", marginBottom: "0.75rem" }}>Despre noi</span>
          <h1 className="hero-fade-up hero-d2" style={{ color: "#fff", fontSize: "clamp(2.5rem,5vw,4.5rem)", fontWeight: 900, fontFamily: "Lato, sans-serif" }}>DESPRE NOI</h1>
        </div>
      </section>

      {/* CONECTĂM - Skills */}
      <section style={{ padding: "5rem 0", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="two-col">
          <div>
            <h2 style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)", fontWeight: 800, color: DARK, marginBottom: "1.25rem", fontFamily: "Lato, sans-serif" }}>Conectăm Talentele cu Oportunitățile</h2>
            <p style={{ color: "#7a7a7a", lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "2rem", fontFamily: "Lato, sans-serif" }}>
              Suntem dedicați să găsim organizații și talente care va pot îmbunătăți performanța și crește succesul. Prin serviciile noastre de resurse umane personalizate, vă ajutăm să identificați, să dezvoltați și să rețineți persoanele care se potrivesc cu cultura și obiectivele afacerii. Cu o abordare centrată pe oameni și o înțelegere profundă a nevoilor, suntem partenerul perfect pentru a vă susține în excelența organizațională. Împreună, putem construi echipe puternice care să vă conducă afacerea spre noi orizonturi!
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {skills.map((s) => (
              <div key={s.label}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                  <span style={{ fontSize: "0.875rem", fontWeight: 700, color: DARK, fontFamily: "Lato, sans-serif" }}>{s.label}</span>
                  <span style={{ fontSize: "0.875rem", fontWeight: 700, color: DARK, fontFamily: "Lato, sans-serif" }}>{s.value}%</span>
                </div>
                <div style={{ width: "100%", background: "#e5e5e5", height: 6, borderRadius: 99 }}>
                  <div style={{ width: `${s.value}%`, height: "100%", background: MINT, borderRadius: 99 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){ .two-col { grid-template-columns:1fr !important; } }`}</style>
      </section>

      {/* DARK: Mai Multe Locuri + Counters */}
      <section style={{ background: DARK, padding: "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="two-col-b">
          <div>
            <span style={{ color: MINT, fontWeight: 700, fontSize: "1rem", fontFamily: "Lato, sans-serif", display: "block", marginBottom: "0.75rem" }}>Career</span>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 800, marginBottom: "1.5rem", fontFamily: "Lato, sans-serif" }}>
              Mai Multe Locuri de Muncă Înseamnă o Lume Mai Bună
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "2rem", fontFamily: "Lato, sans-serif" }}>
              Locurile de muncă nu sunt doar mijloace de a câștiga un venit; ele sunt fundamentul unei societăți prospere și echitabile. Mai multe oportunități de angajare contribuie la creșterea economiei, reducerea sărăciei și creșterea bunăstării generale. Un număr crescut de locuri de muncă înseamnă mai multă stabilitate financiară pentru familiile din întreaga lume, mai multe resurse pentru comunități și mai multe posibilități pentru oameni de a-și construi un viitor mai luminos. Investind în crearea și susținerea locurilor de muncă, putem contribui la modelarea unei lumi mai echitabile.
            </p>
            <Link href="#" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "rgba(255,255,255,0.85)", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem", fontFamily: "Lato, sans-serif" }}>
              <ArrowRight size={16} /> Citește mai mult
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
            {[
              { num: "25", suffix: "", Icon: Award, label: "Experiență" },
              { num: "70", suffix: "+", Icon: Users, label: "Traineri cu experiență" },
              { num: "100", suffix: "+", Icon: Building, label: "Companii" },
            ].map((c) => (
              <div key={c.label} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 16, padding: "1.75rem 1rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ width: 48, height: 48, background: "rgba(194,230,223,0.15)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <c.Icon size={24} color={MINT} strokeWidth={1.75} />
                </div>
                <div style={{ color: "#fff", fontSize: "2rem", fontWeight: 900, fontFamily: "Lato, sans-serif" }}>{c.num}{c.suffix}</div>
                <div style={{ color: MINT, fontSize: "0.78rem", fontWeight: 700, fontFamily: "Lato, sans-serif" }}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){ .two-col-b { grid-template-columns:1fr !important; } }`}</style>
      </section>

      {/* VIZIUNE + MISIUNE + CINE SUNTEM */}
      <section style={{ padding: "5rem 0", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="two-col-c">
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", background: "#f9f9f9", borderRadius: 16, padding: "1.5rem" }}>
              <div style={{ width: 52, height: 52, background: MINT, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Target size={26} color={DARK} strokeWidth={1.75} />
              </div>
              <div>
                <h2 style={{ color: DARK, fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.75rem", fontFamily: "Lato, sans-serif" }}>Viziunea Noastră</h2>
                <p style={{ color: "#7a7a7a", fontSize: "0.93rem", lineHeight: 1.8, fontFamily: "Lato, sans-serif" }}>
                  Conectăm persoane talentate cu oportunități excepționale, facilitându-le dezvoltarea profesională și contribuind la succesul clienților noștri.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", background: "#f9f9f9", borderRadius: 16, padding: "1.5rem" }}>
              <div style={{ width: 52, height: 52, background: DARK, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Rocket size={26} color={MINT} strokeWidth={1.75} />
              </div>
              <div>
                <h2 style={{ color: DARK, fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.75rem", fontFamily: "Lato, sans-serif" }}>Misiunea Noastră</h2>
                <p style={{ color: "#7a7a7a", fontSize: "0.93rem", lineHeight: 1.8, fontFamily: "Lato, sans-serif" }}>
                  Să devenim cea mai importantă organizație pentru atât cei care caută un loc de muncă, cât și pentru angajatori. Să fim recunoscuți pentru excelență, integritate și servicii personalizate în industria recrutării.
                </p>
              </div>
            </div>
          </div>
          <div style={{ background: DARK, padding: "2.5rem", borderRadius: 16 }}>
            <h2 style={{ color: MINT, fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.25rem", fontFamily: "Lato, sans-serif" }}>CINE SUNTEM</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.93rem", lineHeight: 1.8, marginBottom: "1rem", fontFamily: "Lato, sans-serif" }}>
              Cu o experiență solidă în domeniu din 2011 și o echipă pasionată, facilităm creșterea profesională a candidaților și contribuim la succesul organizațiilor partenere. Fie că sunteți în căutarea unui loc de muncă sau doriți să recrutați talente excepționale, suntem aici să vă ajutăm să vă atingeți obiectivele de recrutare și să vă propulsăm afacerea către succes.
            </p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.93rem", lineHeight: 1.8, fontFamily: "Lato, sans-serif" }}>
              Avem o înțelegere profundă a pieței muncii și o rețea extinsă de contacte în diverse domenii și industrii. Astfel, suntem în măsură să oferim servicii de recrutare personalizate, adaptate nevoilor unice ale fiecărui client și candidat.
            </p>
          </div>
        </div>
        <style>{`@media(max-width:768px){ .two-col-c { grid-template-columns:1fr !important; } }`}</style>
      </section>
    </>
  );
}
