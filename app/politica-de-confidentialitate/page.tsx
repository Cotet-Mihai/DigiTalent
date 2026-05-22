import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politică de Confidențialitate",
  description: "Politica de confidențialitate DigiTalent – cum colectăm, utilizăm și protejăm datele tale personale în conformitate cu GDPR.",
  alternates: { canonical: "https://www.digitalent.com/politica-de-confidentialitate" },
  robots: { index: false, follow: false },
};

const MINT = "#C2E6DF";
const DARK = "#131313";

const sections = [
  {
    title: "1. Cine suntem",
    content: `DigiTalent este un serviciu operat de ARTIFEX PROGRESSIO SRL, cu sediul în Bd. Pipera, Voluntari, județul Ilfov, România. Suntem o agenție de recrutare specializată în conectarea talentelor cu companiile din toată România.\n\nPentru orice întrebare legată de prelucrarea datelor personale, ne poți contacta la: contact@digitalent.com sau 0737 161 111.`,
  },
  {
    title: "2. Ce date colectăm",
    content: `Putem colecta următoarele categorii de date personale:\n\n• Date de identificare: nume, prenume\n• Date de contact: adresă de email, număr de telefon\n• Date profesionale: CV, experiență profesională, studii, competențe\n• Date de navigare: adresă IP, tipul browserului, paginile vizitate, durata sesiunii (prin Google Analytics)\n\nNu colectăm date sensibile (origine rasială, opinii politice, date medicale etc.) fără consimțământul tău explicit.`,
  },
  {
    title: "3. De ce colectăm datele",
    content: `Prelucrăm datele tale personale în următoarele scopuri:\n\n• Recrutare și plasament: pentru a-ți găsi oportunități profesionale potrivite\n• Comunicare: pentru a răspunde la solicitările tale prin formularul de contact\n• Îmbunătățirea serviciilor: prin analiza statistică anonimă a traficului pe site (Google Analytics)\n• Obligații legale: pentru respectarea cerințelor legale și fiscale aplicabile\n\nTemeiul legal pentru prelucrare este, după caz: consimțământul tău, executarea unui contract, interesul legitim sau obligația legală.`,
  },
  {
    title: "4. Cât timp păstrăm datele",
    content: `Păstrăm datele tale personale numai atât cât este necesar pentru scopul pentru care au fost colectate:\n\n• Date din formularul de contact: maxim 2 ani de la ultima interacțiune\n• CV-uri și date de recrutare: maxim 3 ani sau până la retragerea consimțământului\n• Date de navigare (Analytics): conform politicii Google Analytics (implicit 14 luni)\n\nDupă expirarea acestor termene, datele sunt șterse sau anonimizate.`,
  },
  {
    title: "5. Cu cine împărtășim datele",
    content: `Nu vindem și nu închiriem datele tale personale. Putem partaja datele cu:\n\n• Companii partenere: în procesul de recrutare, cu acordul tău prealabil\n• Furnizori de servicii tehnice: Google LLC (Analytics), Vercel Inc. (hosting), care acționează ca operatori asociați sau împuterniciți\n• Autorități competente: dacă suntem obligați prin lege\n\nToți partenerii noștri prelucrează datele în conformitate cu GDPR și au implementate măsuri tehnice și organizatorice adecvate.`,
  },
  {
    title: "6. Drepturile tale",
    content: `Conform Regulamentului GDPR (UE) 2016/679, ai următoarele drepturi:\n\n• Dreptul de acces: să știi ce date deținem despre tine\n• Dreptul la rectificare: să corectezi datele incorecte\n• Dreptul la ștergere: să soliciți ștergerea datelor (\"dreptul de a fi uitat\")\n• Dreptul la restricționarea prelucrării\n• Dreptul la portabilitatea datelor\n• Dreptul de opoziție față de prelucrare\n• Dreptul de a retrage consimțământul oricând\n\nPentru exercitarea acestor drepturi, contactează-ne la contact@digitalent.com. Vei primi un răspuns în maxim 30 de zile.\n\nAi și dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP): www.dataprotection.ro`,
  },
  {
    title: "7. Securitatea datelor",
    content: `Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele tale împotriva accesului neautorizat, pierderii sau distrugerii, inclusiv:\n\n• Transmiterea datelor prin conexiuni criptate (HTTPS/SSL)\n• Accesul restricționat la datele personale, limitat la angajații cu necesitate legitimă\n• Revizuirea periodică a politicilor și procedurilor de securitate`,
  },
  {
    title: "8. Modificări ale acestei politici",
    content: `Putem actualiza această politică de confidențialitate periodic pentru a reflecta modificările serviciilor noastre sau ale cerințelor legale. Versiunea actualizată va fi publicată pe această pagină cu data intrării în vigoare.\n\nÎți recomandăm să verifici periodic această pagină. Continuarea utilizării site-ului după publicarea modificărilor constituie acceptarea noii versiuni.`,
  },
];

export default function PoliticaConfidentialitatePage() {
  return (
    <>
      <section style={{ background: DARK, paddingTop: "8rem", paddingBottom: "4rem", position: "relative", overflow: "hidden" }}>
        <span style={{ position: "absolute", top: "50%", right: "-2rem", transform: "translateY(-50%)", fontSize: "10rem", fontWeight: 900, fontFamily: "Lato, sans-serif", color: "rgba(255,255,255,0.04)", whiteSpace: "nowrap", pointerEvents: "none", lineHeight: 1 }}>Privacy</span>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <span style={{ color: MINT, fontWeight: 700, fontSize: "1rem", fontFamily: "Lato, sans-serif", display: "block", marginBottom: "0.75rem" }}>Legal</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 900, fontFamily: "Lato, sans-serif" }}>Politică de Confidențialitate</h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", fontFamily: "Lato, sans-serif", marginTop: "1rem" }}>Ultima actualizare: mai 2025</p>
        </div>
      </section>

      <section style={{ padding: "5rem 0", background: "#fff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 2rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {sections.map((s) => (
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
