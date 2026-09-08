import type { Metadata } from "next";
import Script from "next/script";
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
  return (
    <html lang="en">
      <body>
        {children}
        <Script id="chatbase-embed" strategy="afterInteractive">
          {`(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="9u539J1RE4Gk8o8EXmWOG";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`}
        </Script>
      </body>
    </html>
  );
}
