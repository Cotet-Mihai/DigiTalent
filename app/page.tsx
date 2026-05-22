import Image from "next/image";
import Link from "next/link";
import {
  Building2, User, Phone, Mail, MapPin,
  Lightbulb, ClipboardCheck, Award, Users, Building,
  CheckCircle2, ArrowRight, Star,
} from "lucide-react";
import { blogPosts as allBlogPosts } from "@/lib/blog-posts";

const MINT = "#C2E6DF";
const DARK = "#131313";

const skills = [
  { label: "Expertiză și Cunoștințe", value: 95 },
  { label: "Resurse și Infrastructură", value: 88 },
  { label: "Soluții Personalizate", value: 92 },
  { label: "Suport Continuu", value: 85 },
  { label: "Flexibilitate și Adaptabilitate", value: 90 },
];

const jobs = [
  {
    title: "Creator de Conținut (Video)",
    desc: "Fă parte din echipa noastră de creare de conținut și elaborează conținut video care rezonează cu publicul nostru. Căutăm persoane cu abilități de storytelling și editare video pentru a crea materiale de mare impact.",
    tags: ["Part Time", "4.000-5000 lei/ luna", "1 Zi de Lucru de Acasă", "Experiență >1 an", "București"],
    dark: true,
  },
  {
    title: "Copywriter (Creator de Conținut)",
    desc: "Ești pasionat de puterea cuvintelor și ai o abilitate unică de a transforma idei în povești captivante? Veți împleti magia acestora, creând texte convingătoare care captivează audiențele și dau viață poveștii brandului.",
    tags: ["Full Time, program flexibil", "3.000-4.800 lei/ luna", "1 Zi de Lucru de Acasă", "Experiență >1 an", "București"],
    dark: false,
  },
  {
    title: "Promoter Online",
    desc: "Ești expert în social media, cu abilități de a stimula angajamentul și de a construi comunități online? Alătură-te echipei noastre în calitate de Promotor Online și creează conținut captivant.",
    tags: ["Full Time, program flexibil", "4.000-8.000 lei/ luna", "Experiență >1 an", "București"],
    dark: true,
  },
];

const testimonials = [
  {
    text: "Colaborarea cu DigiTalent a fost o schimbare majoră în viața mea! Abordarea personalizată și sprijinul lor continuu m-au ajutat să obțin jobul visurilor mele într-un timp wow. Recomand cu încredere!",
    name: "Valeria B.",
    role: "Copywriter",
    img: "/images/testi-1.jpg",
  },
  {
    text: "Experiența cu DigiTalent a fost foarte tare! Datorită sprijinului lor dedicat și expertizei lor, am reușit să găsesc jobul perfect pentru mine. Recomand cu căldură serviciile lor!",
    name: "Cristina S.",
    role: "Marketing Manager",
    img: "/images/Testi-2.jpg",
  },
];

const blogPosts = allBlogPosts.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section" style={{ position: "relative", minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div style={{ position: "relative" }} className="hero-img-col hero-fade-in">
          <Image src="/images/1920x1281.jpg" alt="Career" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
          <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.35)" }} />
        </div>
        <div className="hero-content-col" style={{ background: DARK, display: "flex", alignItems: "center", padding: "8rem 4rem 4rem", position: "relative", overflow: "hidden" }}>
          <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -60%)", fontSize: "clamp(8rem, 14vw, 13rem)", fontWeight: 900, fontFamily: "Lato, sans-serif", color: "rgba(255,255,255,0.04)", whiteSpace: "nowrap", pointerEvents: "none", userSelect: "none", lineHeight: 1 }}>
            Career
          </span>
          <div style={{ position: "relative", zIndex: 1 }}>
            <span className="hero-slide-r hero-d1" style={{ color: MINT, fontWeight: 700, fontSize: "1rem", fontFamily: "Lato, sans-serif", display: "block", marginBottom: "1rem" }}>Career</span>
            <h1 className="hero-fade-up hero-d2" style={{ color: "#fff", fontSize: "clamp(2.5rem, 4vw, 4.5rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: "1.5rem", fontFamily: "Lato, sans-serif" }}>
              CONSTRUIM<br />CARIERE DE<br />SUCCES
            </h1>
            <p className="hero-fade-up hero-d3" style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: 400, marginBottom: "2.25rem", fontFamily: "Lato, sans-serif" }}>
              DigiTalent este mai mult decât un loc de muncă. Împreună construim o carieră de succes. De la identificarea abilităților unice până la potrivirea cu compania și susținerea în creșterea profesională, vă suntem alături la fiecare pas. Împreună transformăm obiectivele în realitate.
            </p>
            <Link href="/despre-noi" className="hero-fade-up hero-d4" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: MINT, color: DARK, padding: "0.85rem 1.75rem", fontWeight: 700, fontFamily: "Lato, sans-serif", fontSize: "0.95rem", textDecoration: "none", borderRadius: 8 }}>
              Află mai multe <ArrowRight size={16} color={DARK} />
            </Link>
          </div>
        </div>
        <style>{`
          .hero-img-col { display: block !important; }
          @media(max-width:768px){
            .hero-img-col { display:none !important; }
            .hero-section { grid-template-columns:1fr !important; }
            .hero-content-col {
              padding: 6rem 1.5rem 3.5rem !important;
              min-height: 100vh;
              background:
                linear-gradient(to bottom,
                  rgba(19,19,19,0.72) 0%,
                  rgba(19,19,19,0.82) 25%,
                  rgba(19,19,19,0.95) 45%,
                  #131313 60%,
                  #131313 100%
                ),
                url('/images/1920x1281.jpg') 35% 0% / cover no-repeat !important;
            }
          }
        `}</style>
      </section>

      {/* PENTRU COMPANII / CANDIDAȚI */}
      <section style={{ padding: "5rem 0", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="two-col">
          {/* Dark card */}
          <div style={{ background: DARK, borderRadius: 16, padding: "3rem 2.5rem", position: "relative" }}>
            <div style={{ position: "absolute", top: "-1.5rem", left: "2rem", width: 60, height: 60, background: MINT, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Building2 size={28} color={DARK} strokeWidth={2} />
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <h2 style={{ color: "#fff", fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.25rem", fontFamily: "Lato, sans-serif" }}>Pentru Companii</h2>
              <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75, fontSize: "0.92rem", marginBottom: "0.9rem", fontFamily: "Lato, sans-serif" }}>
                Suntem specializați în găsirea talentelor potrivite pentru orice tip de companie. Cu o înțelegere profundă a peisajului de business aflat în continuă evoluție, oferim servicii de recrutare personalizate pentru a satisface nevoile unice ale clienților noștri.
              </p>
              <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75, fontSize: "0.92rem", marginBottom: "2rem", fontFamily: "Lato, sans-serif" }}>
                DigiTalent vă simplifică procesul de recrutare și vă ajută să construiți o echipă care să conducă spre succes. Suntem partenerul de încredere în recrutare, gândindu-vă în fiecare etapă pentru a atrage și reține talentele de top.
              </p>
              <Link href="/despre-noi" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: MINT, fontWeight: 700, textDecoration: "none", fontSize: "0.95rem", fontFamily: "Lato, sans-serif" }}>
                <ArrowRight size={16} color={MINT} /> Citește mai mult
              </Link>
            </div>
          </div>
          {/* Light card */}
          <div style={{ background: "#fff", border: "1.5px solid #e5e5e5", borderRadius: 16, padding: "3rem 2.5rem", position: "relative" }}>
            <div style={{ position: "absolute", top: "-1.5rem", left: "2rem", width: 60, height: 60, background: DARK, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <User size={28} color={MINT} strokeWidth={2} />
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <h2 style={{ color: DARK, fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.25rem", fontFamily: "Lato, sans-serif" }}>Pentru Candidați</h2>
              <p style={{ color: "#7a7a7a", lineHeight: 1.75, fontSize: "0.92rem", marginBottom: "0.9rem", fontFamily: "Lato, sans-serif" }}>
                Călătoria profesională este unică și găsirea oportunității potrivite poate fi un moment crucial în viață. Suntem dedicați să vă asigurăm consultanță cu instrumentele, ghidarea și oportunitățile necesare pentru a vă atinge întregul potențial.
              </p>
              <p style={{ color: "#7a7a7a", lineHeight: 1.75, fontSize: "0.92rem", marginBottom: "2rem", fontFamily: "Lato, sans-serif" }}>
                Colaborați cu DigiTalent pentru a vă duce cariera către noi culmi. Suntem consilierul de carieră de încredere, cercetăm continuu piața muncii pentru a obține oportunități care să vă propulseze cariera întotdeauna către mai bine. Succesul vostru este succesul nostru.
              </p>
              <Link href="/jobs" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: DARK, fontWeight: 700, textDecoration: "none", fontSize: "0.95rem", fontFamily: "Lato, sans-serif" }}>
                <ArrowRight size={16} color={DARK} /> Citește mai mult
              </Link>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){ .two-col { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* CONECTĂM TALENTELE */}
      <section style={{ padding: "5rem 0", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="two-col-b">
          <div style={{ position: "relative", height: 480 }} className="photos-col">
            <div style={{ position: "absolute", left: 0, top: 0, width: 200, height: 420, borderRadius: 12, overflow: "hidden" }}>
              <Image src="/images/232-595.jpg" alt="Profesionist recrutat prin DigiTalent" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", right: 0, bottom: 0, width: 200, height: 380, borderRadius: 12, overflow: "hidden" }}>
              <Image src="/images/232-x-551.jpg" alt="Candidat DigiTalent în carieră digitală" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)", fontWeight: 800, color: DARK, marginBottom: "1.25rem", fontFamily: "Lato, sans-serif" }}>Conectăm Talentele cu Oportunitățile</h2>
            <p style={{ color: "#7a7a7a", lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "2rem", fontFamily: "Lato, sans-serif" }}>
              Suntem dedicați să găsim organizații și talente care va pot îmbunătăți performanța și crește succesul. Prin serviciile noastre de resurse umane personalizate, vă ajutăm să identificați, să dezvoltați și să rețineți persoanele care se potrivesc cu cultura și obiectivele afacerii. Cu o abordare centrată pe oameni și o înțelegere profundă a nevoilor, suntem partenerul perfect pentru a vă susține în excelența organizațională. Împreună, putem construi echipe puternice care să vă conducă afacerea spre noi orizonturi!
            </p>
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
        </div>
        <style>{`@media(max-width:768px){ .two-col-b { grid-template-columns:1fr !important; } .photos-col { display:none !important; } }`}</style>
      </section>

      {/* DARK: Mai Multe Locuri + Counters */}
      <section style={{ background: DARK, padding: "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="two-col-c">
          <div>
            <span style={{ color: MINT, fontWeight: 700, fontSize: "1rem", fontFamily: "Lato, sans-serif", display: "block", marginBottom: "0.75rem" }}>Career</span>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 800, marginBottom: "1.5rem", fontFamily: "Lato, sans-serif" }}>
              Mai Multe Locuri de Muncă Înseamnă o Lume Mai Bună
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "2rem", fontFamily: "Lato, sans-serif" }}>
              Locurile de muncă nu sunt doar mijloace de a câștiga un venit; ele sunt fundamentul unei societăți prospere și echitabile. Mai multe oportunități de angajare contribuie la creșterea economiei, reducerea sărăciei și creșterea bunăstării generale. Un număr crescut de locuri de muncă înseamnă mai multă stabilitate financiară pentru familiile din întreaga lume, mai multe resurse pentru comunități și mai multe posibilități pentru oameni de a-și construi un viitor mai luminos.
            </p>
            <Link href="/despre-noi" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "rgba(255,255,255,0.85)", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem", fontFamily: "Lato, sans-serif" }}>
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
        <style>{`@media(max-width:768px){ .two-col-c { grid-template-columns:1fr !important; } }`}</style>
      </section>

      {/* JOBS */}
      <section style={{ padding: "5rem 0", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.75rem)", fontWeight: 800, color: DARK, marginBottom: "1rem", fontFamily: "Lato, sans-serif" }}>Cele mai Recente Locuri de Munca</h2>
            <p style={{ color: "#7a7a7a", maxWidth: 560, margin: "0 auto", lineHeight: 1.7, fontFamily: "Lato, sans-serif", fontSize: "0.95rem" }}>
              Ești gata să faci următorul pas în cariera ta? DigiTalent anunță mai multe posturi noi disponibile în diverse industrii
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }} className="three-col">
            {jobs.map((job, i) => (
              <div key={i} style={{ background: job.dark ? DARK : "#fff", border: job.dark ? "none" : "1.5px solid #e5e5e5", borderRadius: 16, padding: "1.75rem", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: job.dark ? "rgba(194,230,223,0.15)" : DARK, color: job.dark ? MINT : "#fff", padding: "0.35rem 0.85rem", borderRadius: 99, fontSize: "0.8rem", fontWeight: 700, fontFamily: "Lato, sans-serif", marginBottom: "1rem", width: "fit-content" }}>
                  <CheckCircle2 size={13} color={job.dark ? MINT : MINT} strokeWidth={2.5} /> Recomandat
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
        </div>
        <style>{`@media(max-width:900px){ .three-col { grid-template-columns:1fr !important; } }`}</style>
      </section>

      {/* TESTIMONIALE */}
      <div className="testi-outer" style={{ position: "relative", paddingTop: "70px" }}>
        <div className="testi-deco" style={{ position: "absolute", top: 0, right: 0, width: "33.333%", height: "90px", background: MINT, borderRadius: "20px 20px 0 0", zIndex: 0 }} />
        <section style={{ display: "grid", gridTemplateColumns: "2fr 1fr", position: "relative", zIndex: 1 }} className="testi-wrap">
          <div className="testi-main" style={{ background: DARK, backgroundImage: "url('/images/1920-960.jpg')", backgroundSize: "cover", backgroundPosition: "center", padding: "5rem 3rem", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, background: "rgba(19,19,19,0.82)" }} />
            <div className="testi-inner-grid" style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 16, padding: "1.75rem", backdropFilter: "blur(4px)" }}>
                  <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "1.25rem", fontFamily: "Lato, sans-serif" }}>{t.text}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                      <Image src={t.img} alt={t.name} width={44} height={44} style={{ objectFit: "cover" }} />
                    </div>
                    <div>
                      <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.875rem", fontFamily: "Lato, sans-serif" }}>{t.name}</p>
                      <p style={{ color: MINT, fontSize: "0.8rem", fontFamily: "Lato, sans-serif" }}>{t.role}</p>
                    </div>
                    <Star size={20} color={MINT} fill={MINT} style={{ marginLeft: "auto" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: MINT, display: "flex", alignItems: "center", justifyContent: "center", padding: "5rem 2rem" }}>
            <h2 style={{ color: DARK, fontSize: "clamp(1.75rem,3vw,2.75rem)", fontWeight: 900, fontFamily: "Lato, sans-serif", writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: "0.1em" }}>Testimoniale</h2>
          </div>
          <style>{`
            @media(max-width:768px){
              .testi-outer { padding-top: 0 !important; }
              .testi-deco { display: none !important; }
              .testi-wrap { grid-template-columns:1fr !important; }
              .testi-wrap > div:last-child { display:none !important; }
              .testi-inner-grid { grid-template-columns:1fr !important; }
              .testi-main { padding: 3rem 1.5rem !important; }
            }
          `}</style>
        </section>
      </div>

      {/* MAI MULTE OPORTUNITĂȚI */}
      <section style={{ padding: "8rem 0", background: "#f9f9f7", backgroundImage: "url('/images/Paper-Texture-1.jpg')", backgroundSize: "cover" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="two-col-d">
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
        <style>{`@media(max-width:768px){ .two-col-d { grid-template-columns:1fr !important; } }`}</style>
      </section>

      {/* CTA */}
      <section style={{ background: DARK, backgroundImage: "url('/images/businessmen.jpg')", backgroundSize: "cover", backgroundPosition: "center", position: "relative", padding: "5rem 0", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(19,19,19,0.8)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto", padding: "0 2rem" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 800, marginBottom: "1.75rem", fontFamily: "Lato, sans-serif" }}>Hai și tu o oportunitate pentru noi?</h2>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: MINT, color: DARK, padding: "0.9rem 2.5rem", fontWeight: 700, fontFamily: "Lato, sans-serif", fontSize: "1rem", textDecoration: "none", borderRadius: 8 }}>
            Contactează-ne <ArrowRight size={16} color={DARK} />
          </Link>
        </div>
      </section>

      {/* BLOG */}
      <section style={{ padding: "5rem 0", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <h2 style={{ fontSize: "clamp(1.6rem,2.5vw,2.25rem)", fontWeight: 800, color: DARK, marginBottom: "2.5rem", fontFamily: "Lato, sans-serif" }}>Blog &amp; Articole</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.75rem" }} className="three-col-b">
            {blogPosts.map((post, i) => (
              <div key={post.slug} style={{ border: "1.5px solid #e5e5e5", borderRadius: 16, overflow: "hidden" }}>
                <div style={{ position: "relative", height: 160 }}>
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
