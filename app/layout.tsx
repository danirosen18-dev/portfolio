import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";
import { links, SITE_URL } from "@/lib/links";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
});

const description =
  "Industrial & Systems Engineering student at the University of Florida, focused on operations, product, and strategy. MLT Career Prep Fellow and HSF Scholar.";

export const metadata: Metadata = {
  // Update this to your real domain once the site is deployed (e.g. https://danielrosen.com).
  // It tells social platforms where to find the share image.
  metadataBase: new URL(SITE_URL),
  title: "Daniel Rosen | Operations · Product · Strategy",
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daniel Rosen",
    description,
    type: "website",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Rosen",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Structured data so Google can associate the site with a real person.
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Rosen",
    url: SITE_URL,
    jobTitle: "Industrial & Systems Engineering Student",
    alumniOf: "University of Florida",
    sameAs: [links.linkedin, links.github],
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
