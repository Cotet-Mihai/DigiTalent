import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";

const MINT = "#C2E6DF";
const DARK = "#131313";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <section style={{ background: DARK, paddingTop: "8rem", paddingBottom: "4rem", position: "relative", overflow: "hidden" }}>
        <span style={{ position: "absolute", top: "50%", right: "-2rem", transform: "translateY(-50%)", fontSize: "12rem", fontWeight: 900, fontFamily: "Lato, sans-serif", color: "rgba(255,255,255,0.04)", whiteSpace: "nowrap", pointerEvents: "none", lineHeight: 1 }}>Blog</span>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <span style={{ color: MINT, fontWeight: 700, fontSize: "1rem", fontFamily: "Lato, sans-serif", display: "block", marginBottom: "0.75rem" }}>{post.category}</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.75rem,3.5vw,3rem)", fontWeight: 900, fontFamily: "Lato, sans-serif", maxWidth: 800, lineHeight: 1.2 }}>{post.title}</h1>
        </div>
      </section>

      <section style={{ padding: "5rem 0", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 2rem" }}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: DARK, fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", fontFamily: "Lato, sans-serif", marginBottom: "2.5rem" }}>
            <ArrowLeft size={16} color={DARK} /> Înapoi la Blog
          </Link>

          <div style={{ position: "relative", width: "100%", height: 420, borderRadius: 16, overflow: "hidden", marginBottom: "3rem" }}>
            <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} priority />
          </div>

          <span style={{ display: "inline-block", color: MINT, fontWeight: 700, fontSize: "0.78rem", fontFamily: "Lato, sans-serif", background: DARK, padding: "0.2rem 0.65rem", borderRadius: 99, marginBottom: "1.5rem" }}>{post.category}</span>

          <h2 style={{ color: DARK, fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, fontFamily: "Lato, sans-serif", lineHeight: 1.3, marginBottom: "2rem" }}>{post.title}</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {post.paragraphs.map((para, i) => (
              <p key={i} style={{ color: "#4a4a4a", fontSize: "1rem", lineHeight: 1.85, fontFamily: "Lato, sans-serif" }}>{para}</p>
            ))}
          </div>

          <div style={{ borderTop: "1.5px solid #e5e5e5", marginTop: "4rem", paddingTop: "3rem" }}>
            <h3 style={{ color: DARK, fontWeight: 800, fontSize: "1.25rem", fontFamily: "Lato, sans-serif", marginBottom: "2rem" }}>Alte Articole</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }} className="related-grid">
              {blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3).map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} style={{ textDecoration: "none", border: "1.5px solid #e5e5e5", borderRadius: 16, overflow: "hidden", display: "block" }}>
                  <div style={{ position: "relative", height: 140 }}>
                    <Image src={related.image} alt={related.title} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <span style={{ display: "inline-block", color: MINT, fontWeight: 700, fontSize: "0.72rem", fontFamily: "Lato, sans-serif", background: DARK, padding: "0.15rem 0.55rem", borderRadius: 99, marginBottom: "0.5rem" }}>{related.category}</span>
                    <p style={{ color: DARK, fontWeight: 700, fontSize: "0.875rem", fontFamily: "Lato, sans-serif", lineHeight: 1.4 }}>{related.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){ .related-grid { grid-template-columns:1fr !important; } }`}</style>
      </section>
    </>
  );
}
