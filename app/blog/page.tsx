import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

const MINT = "#C2E6DF";
const DARK = "#131313";

export default function BlogPage() {
  return (
    <>
      <section style={{ background: DARK, paddingTop: "8rem", paddingBottom: "4rem", position: "relative", overflow: "hidden" }}>
        <span style={{ position: "absolute", top: "50%", right: "-2rem", transform: "translateY(-50%)", fontSize: "12rem", fontWeight: 900, fontFamily: "Lato, sans-serif", color: "rgba(255,255,255,0.04)", whiteSpace: "nowrap", pointerEvents: "none", lineHeight: 1 }}>Blog</span>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <span className="hero-slide-r hero-d1" style={{ color: MINT, fontWeight: 700, fontSize: "1rem", fontFamily: "Lato, sans-serif", display: "block", marginBottom: "0.75rem" }}>Career</span>
          <h1 className="hero-fade-up hero-d2" style={{ color: "#fff", fontSize: "clamp(2.5rem,5vw,4.5rem)", fontWeight: 900, fontFamily: "Lato, sans-serif" }}>BLOG &amp; ARTICOLE</h1>
        </div>
      </section>

      <section style={{ padding: "5rem 0", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }} className="three-col">
          {blogPosts.map((post, i) => (
            <div key={post.slug} style={{ border: "1.5px solid #e5e5e5", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ position: "relative", height: 200, width: "100%" }}>
                <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "1.75rem" }}>
                <span style={{ display: "inline-block", color: MINT, fontWeight: 700, fontSize: "0.78rem", fontFamily: "Lato, sans-serif", background: DARK, padding: "0.2rem 0.65rem", borderRadius: 99, marginBottom: "0.75rem" }}>{post.category}</span>
                <h2 style={{ color: DARK, fontSize: "1rem", fontWeight: 800, marginBottom: "0.9rem", fontFamily: "Lato, sans-serif", lineHeight: 1.4 }}>{post.title}</h2>
                <p style={{ color: "#7a7a7a", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.5rem", fontFamily: "Lato, sans-serif", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{post.paragraphs[0].text}</p>
                <Link href={`/blog/${post.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: DARK, fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", fontFamily: "Lato, sans-serif", background: MINT, padding: "0.55rem 1.1rem", borderRadius: 8 }}>
                  Citește mai mult <ArrowRight size={14} color={DARK} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){ .three-col { grid-template-columns:1fr !important; } }`}</style>
      </section>
    </>
  );
}
