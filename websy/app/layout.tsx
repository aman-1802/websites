import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.websy.co.in"),
  title: {
    default: "Websy | Web Design Studio for Memorable Business Websites",
    template: "%s | Websy",
  },
  description: "Websy is an independent web design studio creating distinctive, easy-to-use websites for healthcare, education, e-commerce, and growing businesses.",
  applicationName: "Websy",
  keywords: ["web design studio", "business website design", "healthcare website design", "education website design", "ecommerce web design", "website designer portfolio"],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
  },
  openGraph: {
    title: "Websy | Websites with a pulse",
    description: "Distinctive, practical websites for healthcare, education, e-commerce, and growing businesses.",
    images: ["/og.png"],
    type: "website",
    url: "/",
    siteName: "Websy",
  },
  twitter: { card: "summary_large_image", title: "Websy | Websites with a pulse", description: "Distinctive, practical websites for growing businesses.", images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script id="websy-structured-data" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Websy",
            url: "https://www.websy.co.in",
            logo: "https://www.websy.co.in/icon.svg",
            image: "https://www.websy.co.in/og.png",
            email: "info@websy.co.in",
            description: "Independent web design studio creating memorable business websites for healthcare, education, e-commerce, and growing businesses.",
            sameAs: ["https://www.linkedin.com/company/websy-agency/"],
            serviceType: ["Web design", "Website development", "E-commerce website design"],
          })}
        </Script>
        <Script id="chatbase-embed" strategy="afterInteractive">
          {`(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="9u539J1RE4Gk8o8EXmWOG";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`}
        </Script>
      </body>
    </html>
  );
}
