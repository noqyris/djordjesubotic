import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Keyword-rich meta description (shown under the title in Google results).
// Leads with the name + role + location so brand and role searches both match.
const description =
  "Djordje Subotic is a full-stack engineer based in Serbia, building fast, reliable web and mobile products with React, Next.js, React Native, Node.js and TypeScript. Open to remote full-time and B2B roles.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role} (React, Next.js, Node.js)`,
    template: `%s — ${site.name}`,
  },
  description,
  applicationName: site.name,
  category: "technology",
  keywords: [
    "Djordje Subotic",
    "Djordje Subotic developer",
    "Djordje Subotic engineer",
    "Djordje Subotic portfolio",
    "full-stack engineer",
    "full-stack developer Serbia",
    "React developer",
    "Next.js developer",
    "React Native developer",
    "Node.js developer",
    "TypeScript developer",
    "web developer Serbia",
    "mobile developer",
    "remote software engineer",
    "AI engineer",
    "Serbia",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Set GOOGLE_SITE_VERIFICATION in the Vercel env to prove ownership in
  // Google Search Console (alternatively verify via a DNS TXT record).
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  width: "device-width",
  initialScale: 1,
};

// Structured data lets Google build a rich entity for "Djordje Subotic" and
// understand the site. One @graph with the Person as the primary entity,
// linked from a WebSite and a ProfilePage node.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      image: `${site.url}/dj.png`,
      email: `mailto:${site.email}`,
      jobTitle: site.role,
      description,
      knowsAbout: [
        "Full-stack development",
        "Web development",
        "Mobile development",
        "React",
        "Next.js",
        "React Native",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "AI integration",
      ],
      address: { "@type": "PostalAddress", addressCountry: "RS" },
      worksFor: { "@type": "Organization", name: "GrEco" },
      ...(site.socials.length ? { sameAs: site.socials.map((s) => s.url) } : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profilepage`,
      url: site.url,
      name: `${site.name} — ${site.role}`,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="grain antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
