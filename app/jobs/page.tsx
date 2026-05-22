import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Lightbulb, ClipboardCheck } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Joburi – Content Creator, Copywriter, Promoter Online",
  description: "Locuri de muncă disponibile la DigiTalent: Creator de Conținut Video, Copywriter și Promoter Online în București. Aplică acum și construiește-ți cariera în digital.",
  alternates: { canonical: "https://www.digitalent.com/jobs" },
  openGraph: {
    title: "Joburi în Digital | DigiTalent – Aplică Acum",
    description: "Descoperă joburile disponibile la DigiTalent: Content Creator, Copywriter, Promoter Online în București. Program flexibil, salariu competitiv.",
    url: "https://www.digitalent.com/jobs",
  },
};

const BASE_URL = "https://www.digitalent.com";

const MINT = "#C2E6DF";
const DARK = "#131313";

const jobs = [
  {
    title: "Creator de Conținut (Video)",
    desc: "Fă parte din echipa noastră de creare de conținut și elaborează conținut video care rezonează cu publicul nostru. Căutăm persoane cu abilități de storytelling și editare video pentru a crea materiale de mare impact.",
    tags: ["Part Time", "4.000-5000 lei/ luna", "1 Zi de Lucru de Acasă", "Experiență >1 an", "București"],
    dark: true,
    schema: {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: "Creator de Conținut Video",
      description: "Elaborează conținut video care rezonează cu publicul nostru. Căutăm persoane cu abilități de storytelling și editare video.",
      datePosted: "2025-01-01",
      employmentType: "PART_TIME",
      hiringOrganization: { "@type": "Organization", name: "DigiTalent", sameAs: BASE_URL },
      jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "București", addressCountry: "RO" } },
      baseSalary: { "@type": "MonetaryAmount", currency: "RON", value: { "@type": "QuantitativeValue", minValue: 4000, maxValue: 5000, unitText: "MONTH" } },
    },
  },
  {
    title: "Copywriter (Creator de Conținut)",
    desc: "Ești pasionat de puterea cuvintelor și ai o abilitate unică de a transforma idei în povești captivante? Veți împleti magia acestora, creând texte convingătoare care captivează audiențele și dau viață poveștii brandului.",
    tags: ["Full Time, program flexibil", "3.000-4.800 lei/ luna", "1 Zi de Lucru de Acasă", "Experiență >1 an", "București"],
    dark: false,
    schema: {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: "Copywriter – Creator de Conținut",
      description: "Creează texte convingătoare care captivează audiențele și dau viață poveștii brandului.",
      datePosted: "2025-01-01",
      employmentType: "FULL_TIME",
      hiringOrganization: { "@type": "Organization", name: "DigiTalent", sameAs: BASE_URL },
      jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "București", addressCountry: "RO" } },
      baseSalary: { "@type": "MonetaryAmount", currency: "RON", value: { "@type": "QuantitativeValue", minValue: 3000, maxValue: 4800, unitText: "MONTH" } },
    },
  },
  {
    title: "Promoter Online",
    desc: "Ești expert în social media, cu abilități de a stimula angajamentul și de a construi comunități online? Alătură-te echipei noastre în calitate de Promotor Online și creează conținut captivant, interacționând cu urmăritorii și implementând strategii creative pentru a extinde prezența noastră. Dacă ești pasionat de conectarea cu audiența, de entertainment și de producerea unui impact în sfera digitală, dă-ne de veste! Aplică acum pentru a face parte din echipa noastră dinamică.",
    tags: ["Full Time, program flexibil", "4.000-8.000 lei/ luna", "Experiență >1 an", "București"],
    dark: true,
    schema: {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: "Promoter Online – Social Media",
      description: "Creează conținut captivant, interacționează cu urmăritorii și implementează strategii creative pentru extinderea prezenței online.",
      datePosted: "2025-01-01",
      employmentType: "FULL_TIME",
      hiringOrganization: { "@type": "Organization", name: "DigiTalent", sameAs: BASE_URL },
      jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "București", addressCountry: "RO" } },
      baseSalary: { "@type": "MonetaryAmount", currency: "RON", value: { "@type": "QuantitativeValue", minValue: 4000, maxValue: 8000, unitText: "MONTH" } },
    },
  },
];

const recentPosts = blogPosts.slice(0, 3);

export default function JobsPage() {
  return (
    <>
      {jobs.map((job) => (
        <script key={job.schema.title} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(job.schema) }} />
      ))}
      <section style={{ background: DARK, paddingTop: "8rem", paddingBottom: "4rem", position: "relative", overflow: "hidden" }}>
        <span style={{ position: "absolute", top: "50%", right: "-2rem", transform: "translateY(-50%)", fontSize: "12rem", fontWeight: 900, fontFamily: "Lato, sans-serif", color: "rgba(255,255,255,0.04)", whiteSpace: "nowrap", pointerEvents: "none", lineHeight: 1 }}>Job List</span>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <span className="hero-slide-r hero-d1" style={{ color: MINT, fontWeight: 700, fontSize: "1rem", fontFamily: "Lato, sans-serif", display: "block", marginBottom: "0.75rem" }}>Career</span>
          <h1 className="hero-fade-up hero-d2" style={{ color: "#fff", fontSize: "clamp(2.5rem,5vw,4.5rem)", fontWeight: 900, fontFamily: "Lato, sans-serif" }}>JOB LIST</h1>
        </div>
      </section>

      <section style={{ padding: "4rem 0 2rem", background: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 2rem" }}>
          <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.75rem)", fontWeight: 800, color: DARK, marginBottom: "1rem", fontFamily: "Lato, sans-serif" }}>Cele mai Recente Locuri de Munca</h2>
          <p style={{ color: "#7a7a7a", lineHeight: 1.7, fontFamily: "Lato, sans-serif", fontSize: "0.95rem" }}>
            Ești gata să faci următorul pas în cariera ta? DigiTalent anunță mai multe posturi noi disponibile în diverse industrii
          </p>
        </div>
      </section>

      <section style={{ padding: "2rem 0 5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }} className="three-col">
          {jobs.map((job, i) => (
            <div key={i} style={{ background: job.dark ? DARK : "#fff", border: job.dark ? "none" : "1.5px solid #e5e5e5", borderRadius: 16, padding: "1.75rem", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: job.dark ? "rgba(194,230,223,0.15)" : DARK, color: job.dark ? MINT : "#fff", padding: "0.35rem 0.85rem", borderRadius: 99, fontSize: "0.8rem", fontWeight: 700, fontFamily: "Lato, sans-serif", marginBottom: "1rem", width: "fit-content" }}>
                <CheckCircle2 size={13} color={MINT} strokeWidth={2.5} /> Recomandat
              </div>
              <h2 style={{ color: job.dark ? "#fff" : DARK, fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.9rem", fontFamily: "Lato, sans-serif" }}>{job.title}</h2>
              <p style={{ color: job.dark ? "rgba(255,255,255,0.7)" : "#7a7a7a", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.25rem", fontFamily: "Lato, sans-serif", flex: 1 }}>{job.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {job.tags.map((tag) => (
                  <li key={tag} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: job.dark ? "rgba(255,255,255,0.75)" : "#7a7a7a", fontSize: "0.85rem", fontFamily: "Lato, sans-serif" }}>
                    <CheckCircle2 size={14} color={MINT} strokeWidth={2} /> {tag}
                  </li>
                ))}
              </ul>
              <Link href="/contact" style={{ display: "block", background: job.dark ? MINT : DARK, color: job.dark ? DARK : MINT, textAlign: "center", padding: "0.85rem", fontWeight: 700, fontFamily: "Lato, sans-serif", fontSize: "0.95rem", textDecoration: "none", borderRadius: 8 }}>Contactează-ne</Link>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:900px){ .three-col { grid-template-columns:1fr !important; } }`}</style>
      </section>

      {/* MAI MULTE OPORTUNITĂȚI */}
      <section style={{ padding: "5rem 0", background: "#f9f9f7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="two-col">
          <div>
            <h2 style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)", fontWeight: 800, color: DARK, marginBottom: "1.25rem", fontFamily: "Lato, sans-serif" }}>Mai Multe Oportunități pentru Toată Lumea</h2>
            <p style={{ color: "#7a7a7a", lineHeight: 1.8, fontSize: "0.93rem", fontFamily: "Lato, sans-serif" }}>
              Facem legătura între Talente și Carieră. Misiunea noastră este să îmbunătățim perspectivele atât pentru candidați, cât și pentru companii, facilitând conexiuni semnificative și promovând dezvoltarea acestora. Hai să descoperim împreună potențialul vostru!
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { Icon: Lightbulb, title: "Consiliere gratuită", desc: "Explorarea carierei începe cu noi! Oferim consiliere gratuită și vă ghidăm către succesul profesional.", iconBg: MINT, iconColor: DARK },
              { Icon: ClipboardCheck, title: "Evaluări cuprinzătoare", desc: "Oferim analiză detaliată și profundă pentru a asigura potrivirea perfectă între candidați și pozițiile disponibile. Înțelegem nevoile și obiectivele dumneavoastră pentru a oferi soluții personalizate și durabile în recrutare.", iconBg: DARK, iconColor: MINT },
            ].map((f, i) => (
              <div key={f.title} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", background: "#fff", borderRadius: 16, padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div style={{ width: 52, height: 52, background: f.iconBg, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <f.Icon size={24} color={f.iconColor} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 style={{ color: DARK, fontWeight: 800, fontSize: "1rem", marginBottom: "0.5rem", fontFamily: "Lato, sans-serif" }}>{f.title}</h3>
                  <p style={{ color: "#7a7a7a", fontSize: "0.875rem", lineHeight: 1.7, fontFamily: "Lato, sans-serif" }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){ .two-col { grid-template-columns:1fr !important; } }`}</style>
      </section>

      {/* BLOG */}
      <section style={{ padding: "5rem 0", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <h2 style={{ fontSize: "clamp(1.6rem,2.5vw,2.25rem)", fontWeight: 800, color: DARK, marginBottom: "2.5rem", fontFamily: "Lato, sans-serif" }}>Blog &amp; Articole</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.75rem" }} className="three-col-b">
            {recentPosts.map((post, i) => (
              <div key={post.slug} style={{ border: "1.5px solid #e5e5e5", borderRadius: 16, overflow: "hidden" }}>
                <div style={{ position: "relative", height: 150 }}>
                  <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <span style={{ display: "inline-block", color: MINT, fontWeight: 700, fontSize: "0.78rem", fontFamily: "Lato, sans-serif", background: DARK, padding: "0.2rem 0.65rem", borderRadius: 99, marginBottom: "0.75rem" }}>{post.category}</span>
                  <h2 style={{ color: DARK, fontSize: "0.95rem", fontWeight: 800, marginBottom: "0.75rem", fontFamily: "Lato, sans-serif", lineHeight: 1.4 }}>{post.title}</h2>
                  <p style={{ color: "#7a7a7a", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "1.25rem", fontFamily: "Lato, sans-serif" }}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: DARK, fontWeight: 700, fontSize: "0.85rem", textDecoration: "none", fontFamily: "Lato, sans-serif", background: MINT, padding: "0.5rem 1rem", borderRadius: 8 }}>
                    Citește mai mult <ArrowRight size={14} color={DARK} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){ .three-col-b { grid-template-columns:1fr !important; } }`}</style>
      </section>
    </>
  );
}
