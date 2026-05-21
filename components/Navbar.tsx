"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Acasa" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/jobs", label: "Job list" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: isHome ? "transparent" : "#131313",
        padding: "1.25rem 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/">
          <Image src="/images/logo1.png" alt="DigiTalent" width={140} height={46} style={{ objectFit: "contain" }} />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "2rem" }} className="hidden md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: pathname === l.href ? "#C2E6DF" : "#ffffff",
                fontWeight: pathname === l.href ? 700 : 400,
                fontSize: "0.95rem",
                textDecoration: "none",
                fontFamily: "Lato, sans-serif",
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }}
        >
          <div style={{ width: 24, height: 2, background: "#fff", marginBottom: 5 }} />
          <div style={{ width: 24, height: 2, background: "#fff", marginBottom: 5 }} />
          <div style={{ width: 24, height: 2, background: "#fff" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          style={{
            background: "#131313",
            padding: "1rem 2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
          className="md:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                color: pathname === l.href ? "#C2E6DF" : "#ffffff",
                fontWeight: pathname === l.href ? 700 : 400,
                fontSize: "1rem",
                textDecoration: "none",
                fontFamily: "Lato, sans-serif",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
