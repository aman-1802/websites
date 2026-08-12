import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { business } from "./data";
import { StoreProvider } from "./components";

const manrope=Manrope({variable:"--font-manrope",subsets:["latin"]});
const siteUrl="https://skillbridge-academy-ahmedabad.aagarwal1802.chatgpt.site";
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#4a1733"};
export const metadata:Metadata={
 metadataBase:new URL(siteUrl),
 title:{default:"Petal & Parcel | Flower & Gift Delivery in Ahmedabad",template:"%s | Petal & Parcel"},
 description:"Fresh flower bouquets, gift hampers and personalised gifts in Ahmedabad. Browse and send an honest order request through WhatsApp.",
 openGraph:{title:"Petal & Parcel",description:business.tagline,type:"website",locale:"en_IN",images:[{url:"/og.png",width:1200,height:630,alt:"Petal & Parcel flowers and gifting in Ahmedabad"}]},
 twitter:{card:"summary_large_image",title:"Petal & Parcel",description:business.tagline,images:["/og.png"]},
 icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"},
};
const structuredData={"@context":"https://schema.org","@type":["Florist","LocalBusiness"],name:business.name,description:business.tagline,url:siteUrl,telephone:business.phone,email:business.email,address:{"@type":"PostalAddress",streetAddress:"12, Aarohi Arcade, Near Vijay Cross Road, Navrangpura",addressLocality:"Ahmedabad",addressRegion:"Gujarat",postalCode:"380009",addressCountry:"IN"},openingHours:"Mo-Sa 09:00-20:00, Su 10:00-18:00",areaServed:"Ahmedabad",priceRange:"₹₹"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={manrope.variable}><StoreProvider>{children}</StoreProvider><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/></body></html>}
