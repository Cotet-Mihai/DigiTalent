"use client";
import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section, main > div")
    );

    const hide = (el: HTMLElement) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(48px)";
      el.style.transition =
        "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)";
    };

    const show = (el: HTMLElement) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    };

    // Only hide sections that start below the fold
    const toReveal = sections.filter((el) => {
      const rect = el.getBoundingClientRect();
      return rect.top > window.innerHeight * 0.9;
    });

    toReveal.forEach(hide);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    toReveal.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
