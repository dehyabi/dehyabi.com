import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dehya Qalbi | Full-Stack AI Engineer",
  description:
    "Dehya Qalbi — Full-Stack AI Engineer with 5+ years of experience building production-grade AI systems, LLM pipelines, FastAPI backends, and React/Next.js frontends. Available for full-time, freelance, and consulting opportunities.",
  keywords: [
    "Dehya Qalbi",
    "Full Stack Engineer",
    "Full-Stack AI Engineer",
    "AI Engineer",
    "Machine Learning Engineer",
    "React Developer",
    "Next.js Developer",
    "FastAPI",
    "Python",
    "LLM",
    "OpenAI",
    "LangChain",
    "RAG",
    "Vector Database",
    "MLOps",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Dehya Qalbi", url: "https://dehyabi.com" }],
  creator: "Dehya Qalbi",
  metadataBase: new URL("https://dehyabi.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Dehya Qalbi | Full-Stack AI Engineer",
    description:
      "Production-grade AI systems, LLM pipelines, FastAPI backends, and React/Next.js frontends. 5+ years of shipping scalable software.",
    url: "https://dehyabi.com",
    siteName: "Dehya Qalbi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dehya Qalbi — Full-Stack AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dehya Qalbi | Full-Stack AI Engineer",
    description:
      "Production-grade AI systems, LLM pipelines, FastAPI backends, and React/Next.js frontends. 5+ years of shipping scalable software.",
    creator: "@dehyabi",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dehya Qalbi",
  url: "https://dehyabi.com",
  jobTitle: "Full-Stack AI Engineer",
  description:
    "Full-Stack AI Engineer with 5+ years of experience building production-grade AI systems, LLM pipelines, FastAPI backends, and React/Next.js frontends.",
  sameAs: [
    "https://github.com/dehyabi",
    "https://linkedin.com/in/dehyabi",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Large Language Models",
    "React",
    "Next.js",
    "FastAPI",
    "Python",
    "MLOps",
    "Retrieval-Augmented Generation",
    "Vector Databases",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Jackson Ventures LLC dba IPOT",
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
