import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.websy.co.in"),
  title: "Websy — Websites with a pulse",
  description: "Websy creates memorable business websites for healthcare, education, e-commerce, and more.",
  keywords: ["web designer portfolio", "website developer portfolio", "business website design", "healthcare website design", "academy website design", "gift shop website", "ecommerce web design"],
  openGraph: {
    title: "Websy — Websites with a pulse",
    description: "Selected website design and development work by Websy.",
    images: ["/og.png"],
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
