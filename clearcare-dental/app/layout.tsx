import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { business } from "./data";

const manrope=Manrope({variable:"--font-manrope",subsets:["latin"]});
const siteUrl="https://clearcare-dental-ahmedabad.vercel.app";
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#104b38"};
export const metadata:Metadata={
 metadataBase:new URL(siteUrl),
 title:{default:"ClearCare Dental | Dentist in Ahmedabad",template:"%s | ClearCare Dental"},
 description:"Clear dental guidance, comfortable consultations and appointment requests in Ahmedabad.",
 openGraph:{title:"ClearCare Dental",description:"Clear guidance. Comfortable care. Convenient appointments.",type:"website",locale:"en_IN"},
 twitter:{card:"summary_large_image",title:"ClearCare Dental",description:"Clear guidance. Comfortable care. Convenient appointments."},
 icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"},
};
const structuredData={"@context":"https://schema.org","@type":["Dentist","MedicalClinic"],name:business.name,url:siteUrl,telephone:business.phone,email:business.email,address:{"@type":"PostalAddress",streetAddress:business.address,addressLocality:"Ahmedabad",addressRegion:"Gujarat",addressCountry:"IN"},openingHours:"Mo-Sa 09:00-19:30",areaServed:"Ahmedabad"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={manrope.variable}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/></body></html>}
