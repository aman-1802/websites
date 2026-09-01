import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Websy — Aman Agarwal",
  description: "Portfolio of Aman Agarwal, an independent web designer and developer creating memorable business websites.",
  keywords: ["web designer portfolio", "website developer portfolio", "business website design", "healthcare website design", "academy website design", "gift shop website", "ecommerce web design"],
  openGraph: {
    title: "Websy — Aman Agarwal",
    description: "Selected website design and development work by Aman Agarwal.",
    images: ["/og.png"],
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
