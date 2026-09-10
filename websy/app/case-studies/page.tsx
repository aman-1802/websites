import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Design Case Studies",
  description: "See selected Websy website design work across healthcare, education, gifting, e-commerce, and hospitality.",
  alternates: { canonical: "/case-studies" },
};

const projects = [
  { title: "ClearCare Dental", sector: "Healthcare", focus: "A patient-first information experience that makes a dental practice feel reassuring, modern, and easy to approach.", href: "https://clearcare-dental-ahmedabad.vercel.app" },
  { title: "SkillBridge Academy", sector: "Education", focus: "A clearer course-discovery experience designed to help prospective learners understand their options and move forward.", href: "https://skillbridge-academy-theta.vercel.app" },
  { title: "Petal & Parcel", sector: "Gifting and e-commerce", focus: "A playful storefront that helps occasions, gift ideas, and products feel personal from the first scroll.", href: "https://petal-parcel-static.vercel.app" },
  { title: "Unhinged Cheesecake", sector: "Food and hospitality", focus: "A high-character dessert website that gives an artisan product a memorable, craveable online presence.", href: "https://cheesecake.amanagarwal.site/" },
];

export default function CaseStudiesPage() {
  return (
    <main className="seo-page">
      <nav className="seo-nav" aria-label="Main navigation">
        <Link className="mark" href="/" aria-label="Websy home"><Image src="/websy-wordmark-transparent.png" alt="Websy" width={1080} height={330} priority /></Link>
        <Link href="/services">Services</Link>
        <Link href="/#hello">Contact <span aria-hidden>↗</span></Link>
      </nav>
      <header className="seo-hero case-hero">
        <p className="kicker">Selected work</p>
        <h1>Website design with<br/><em>a pulse.</em></h1>
        <p>Selected Websy work for businesses in healthcare, education, e-commerce, gifting, and hospitality. Each project is shaped around a clearer experience and a stronger brand presence.</p>
      </header>
      <section className="case-list" aria-label="Website design case studies">
        {projects.map((project, index) => (
          <article key={project.title}>
            <span>0{index + 1} / {project.sector}</span>
            <h2>{project.title}</h2>
            <p>{project.focus}</p>
            <a href={project.href} target="_blank" rel="noreferrer">View live website ↗</a>
          </article>
        ))}
      </section>
      <section className="seo-cta">
        <p className="kicker">Your project could be next</p>
        <h2>Let&apos;s give your website<br/>a <em>personality.</em></h2>
        <a className="seo-button" href="mailto:info@websy.co.in">Contact Websy ↗</a>
      </section>
    </main>
  );
}
