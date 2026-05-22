import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const BASE_URL = "https://www.digitalent.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "DigiTalent – Agenție de Recrutare | Joburi în toată România",
    template: "%s | DigiTalent",
  },
  description: "Agenție de recrutare în toată România. Conectăm talentele cu companiile potrivite. Consiliere gratuită, joburi în digital și content creation.",
  keywords: ["agentie de recrutare", "agentie recrutare Bucuresti", "recrutare Romania", "joburi content creator", "joburi social media", "joburi copywriter", "recrutare talente digitale", "consultanta cariera", "DigiTalent"],
  authors: [{ name: "DigiTalent" }],
  creator: "DigiTalent",
  publisher: "DigiTalent",
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: BASE_URL,
    siteName: "DigiTalent",
    title: "DigiTalent – Agenție de Recrutare | Joburi în toată România",
    description: "Agenție de recrutare în toată România. Conectăm talentele cu companiile potrivite. Consiliere gratuită, joburi în digital și content creation.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DigiTalent – Agenție de Recrutare România" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiTalent – Agenție de Recrutare | Joburi în toată România",
    description: "Agenție de recrutare în toată România. Conectăm talentele cu companiile potrivite. Consiliere gratuită, joburi în digital și content creation.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  alternates: { canonical: BASE_URL },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DigiTalent",
  legalName: "ARTIFEX PROGRESSIO SRL",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description: "Agenție de recrutare specializată în talente digitale, cu acoperire națională în România.",
  foundingDate: "2011",
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+40737161111", contactType: "customer service", availableLanguage: "Romanian" },
    { "@type": "ContactPoint", email: "contact@digitalent.com", contactType: "customer service" },
  ],
  address: [
    { "@type": "PostalAddress", streetAddress: "Bd. Pipera", addressLocality: "Voluntari", addressRegion: "Ilfov", addressCountry: "RO" },
    { "@type": "PostalAddress", streetAddress: "Wimpole Street", addressLocality: "London", addressCountry: "GB" },
  ],
  sameAs: [],
  areaServed: { "@type": "Country", name: "Romania" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={cn("font-sans", geist.variable)}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Navbar />
        <ScrollReveal />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights/>
        <GoogleAnalytics gaId="G-XTRJ2SCMVR" />
      </body>
    </html>
  );
}
