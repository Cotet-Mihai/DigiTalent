"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, Mail, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const MINT = "#C2E6DF";
const DARK = "#131313";

const links = [
  { href: "/", label: "Acasa" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/jobs", label: "Job list" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = !isHome || scrolled;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: isDark ? DARK : "transparent",
        padding: "1.25rem 0",
        transition: "background 0.35s ease",
        boxShadow: isDark ? "0 2px 20px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Mobile: Sheet hamburger (left) — hidden on desktop */}
        <div className="nav-hamburger-wrap">
          <Sheet>
            <SheetTrigger
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.4rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Deschide meniul"
            >
              <Menu size={26} color="#fff" />
            </SheetTrigger>

            <SheetContent
              side="left"
              showCloseButton={false}
              className="border-0 p-0 flex flex-col bg-[#131313] w-[300px]"
            >
              {/* Sheet header */}
              <div
                style={{
                  padding: "1.5rem 1.5rem 1.25rem",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  src="/images/logo1.png"
                  alt="DigiTalent"
                  width={110}
                  height={36}
                  style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
                />
                <SheetClose
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "none",
                    cursor: "pointer",
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "1.1rem",
                    flexShrink: 0,
                  }}
                  aria-label="Închide"
                >
                  ✕
                </SheetClose>
              </div>

              {/* Nav links */}
              <nav style={{ padding: "0.5rem 1.25rem", flex: 1 }}>
                {links.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <SheetClose
                      key={l.href}
                      nativeButton={false}
                      render={
                        <Link
                          href={l.href}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "0.85rem 0.75rem",
                            margin: "0.2rem 0",
                            borderRadius: 10,
                            background: active ? "rgba(194,230,223,0.1)" : "transparent",
                            color: active ? MINT : "#fff",
                            fontWeight: active ? 700 : 500,
                            fontSize: "0.975rem",
                            textDecoration: "none",
                            fontFamily: "Lato, sans-serif",
                            transition: "background 0.15s",
                          }}
                        />
                      }
                    >
                      {l.label}
                      <ChevronRight
                        size={15}
                        color={active ? MINT : "rgba(255,255,255,0.25)"}
                      />
                    </SheetClose>
                  );
                })}
              </nav>

              {/* Contact section */}
              <div
                style={{
                  margin: "0 1.25rem 1.5rem",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 12,
                  padding: "1.1rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                }}
              >
                <p
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: "Lato, sans-serif",
                    marginBottom: "0.1rem",
                  }}
                >
                  Contact
                </p>
                <a
                  href="tel:0737161111"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.7rem",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      background: "rgba(194,230,223,0.12)",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={14} color={MINT} strokeWidth={1.75} />
                  </div>
                  <span
                    style={{
                      color: "#fff",
                      fontFamily: "Lato, sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    0737 161 111
                  </span>
                </a>
                <a
                  href="mailto:contact@digitalent.ro"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.7rem",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      background: "rgba(194,230,223,0.12)",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={14} color={MINT} strokeWidth={1.75} />
                  </div>
                  <span
                    style={{
                      color: "#fff",
                      fontFamily: "Lato, sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    contact@digitalent.ro
                  </span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo — right on mobile, left on desktop */}
        <Link href="/" className="nav-logo">
          <Image
            src="/images/logo1.png"
            alt="DigiTalent"
            width={100}
            height={33}
            style={{ objectFit: "contain", display: "block", filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Desktop nav — hidden on mobile */}
        <nav
          className="nav-desktop"
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: pathname === l.href ? MINT : "#ffffff",
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
      </div>

      <style>{`
        @media(min-width: 769px) {
          .nav-hamburger-wrap { display: none !important; }
          .nav-desktop { display: flex !important; }
          .nav-logo { order: -1; }
        }
        @media(max-width: 768px) {
          .nav-hamburger-wrap { display: block !important; order: 0; }
          .nav-logo { order: 1; }
          .nav-desktop { display: none !important; }
        }
      `}</style>
    </header>
  );
}
