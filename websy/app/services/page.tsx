import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Design Services for Healthcare, Education & E-commerce",
  description: "Explore Websy's web design services for healthcare, education, e-commerce, and businesses that need a website with a clear point of view.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Business website design",
    text: "A distinctive home for your business, with clear messaging, thoughtful navigation, responsive layouts, and a practical route for visitors to make contact.",
  },
  {
    title: "Healthcare and professional services websites",
    text: "Calm, credible websites that make services understandable and help prospective patients or clients take the next step with confidence.",
  },
  {
    title: "Education and academy websites",
    text: "Structured, encouraging digital spaces that help learners understand courses, find what they need, and enquire without getting lost.",
  },
  {
    title: "E-commerce website design",
    text: "Product-led storefronts that balance the character of a brand with straightforward browsing, consideration, and purchase journeys.",
  },
];

export default function ServicesPage() {
  return (
    <main className="seo-page">
      <nav className="seo-nav" aria-label="Main navigation">
        <Link className="mark" href="/" aria-label="Websy home"><Image src="/websy-wordmark-transparent.png" alt="Websy" width={1080} height={330} priority /></Link>
        <Link href="/case-studies">Case studies</Link>
        <Link href="/#hello">Contact <span aria-hidden>↗</span></Link>
      </nav>
      <header className="seo-hero">
        <p className="kicker">Websy services</p>
        <h1>Websites that work<br/>hard and <em>feel like you.</em></h1>
        <p>Websy is an independent web design studio for businesses that want more than a template. The work pairs a clear customer journey with a visual identity people remember.</p>
        <a className="seo-button" href="mailto:info@websy.co.in">Tell me about your project ↗</a>
      </header>
      <section className="seo-services" aria-label="Web design services">
        {services.map((service, index) => (
          <article key={service.title}>
            <span>0{index + 1}</span>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </article>
        ))}
      </section>
      <section className="seo-cta">
        <p className="kicker">Start with a conversation</p>
        <h2>Have a website idea<br/>waiting in the wings?</h2>
        <p>Share what your business needs to say, sell, or simplify. Websy will help shape a website that gives it room to breathe.</p>
        <a className="seo-button" href="mailto:info@websy.co.in">Email Websy ↗</a>
      </section>
    </main>
  );
}
