import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://skillbridge-academy-training-demo.aagarwal1802.chatgpt.site"),
  title: { default: "SkillBridge Academy | Practical Skill Courses in Ahmedabad", template: "%s | SkillBridge Academy" },
  description: "Practical, trainer-led courses in Spoken English, Tally, Excel, design, web development and more in Ahmedabad. Book a free demo class.",
  openGraph: { title: "SkillBridge Academy", description: "Practical skills. Personal guidance. Better opportunities.", type: "website", locale: "en_IN", images: [{ url: "/og.png", width: 1732, height: 909, alt: "SkillBridge Academy practical learning classroom" }] },
  twitter: { card: "summary_large_image", title: "SkillBridge Academy", description: "Practical, trainer-led skill courses in Ahmedabad.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const structuredData = { "@context":"https://schema.org", "@graph":[{"@type":["EducationalOrganization","LocalBusiness"],"name":"SkillBridge Academy","description":"A fictional practical skills training institute concept.","url":"https://skillbridge-academy-training-demo.aagarwal1802.chatgpt.site","telephone":"+91-79-4001-2345","address":{"@type":"PostalAddress","streetAddress":"2nd Floor, Shilp Square, Navrangpura","addressLocality":"Ahmedabad","addressRegion":"Gujarat","postalCode":"380009","addressCountry":"IN"},"openingHours":"Mo-Sa 08:00-20:00","areaServed":"Ahmedabad"}]};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={geist.variable}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/></body></html>}
