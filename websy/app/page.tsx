"use client";

import { useState, type FormEvent } from "react";

const work = [
  { title: "Healthcare", kind: "Healthcare website · patient-first experience", thumbnail: "/projects/healthcare.png", className: "bake", href: "https://clearcare-dental-ahmedabad.vercel.app" },
  { title: "SkillBridge Academy", kind: "Academy website · learner guidance", thumbnail: "/projects/academy.png", className: "arch", href: "https://skillbridge-academy-theta.vercel.app" },
  { title: "Petal & Parcel", kind: "Gift shop · e-commerce storefront", thumbnail: "/projects/gifting.png", className: "well", href: "https://petal-parcel-static.vercel.app" },
  { title: "Cheesecake", kind: "Dessert website · artisan dessert experience", thumbnail: "/projects/cheesecake.png", className: "bake", href: "https://cheesecake.amanagarwal.site/" },
];

export default function Home() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setFormState("sending");

    try {
      const formData = Object.fromEntries(new FormData(form).entries());
      const response = await fetch(form.action, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!response.ok) throw new Error("Unable to send message");
      form.reset();
      setFormState("sent");
    } catch {
      setFormState("error");
    }
  }

  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="mark" href="#top" aria-label="Websy home">web<i>sy.</i></a>
        <a href="#work">Selected work</a>
        <a href="#hello">Contact <span aria-hidden>↗</span></a>
      </nav>

      <section id="top" className="hero">
        <div className="eyebrow"><span className="spark">✳</span> Independent web studio <span className="arrow">↘</span></div>
        <h1>Websites with<br/><em>a pulse.</em></h1>
        <p className="hero-copy">I customise and design memorable business websites—from healthcare and education to e-commerce—for brands too interesting to look like everybody else.</p>
        <a href="#hello" className="scribble-link">You bring the good stuff <span>↘</span></a>
        <div className="hero-art" aria-hidden="true">
          <div className="sun">hi!</div>
          <div className="browser"><span/><span/><span/><b>your corner<br/>of the internet</b><i>~</i></div>
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          <div className="little-note">no beige<br/>templates</div>
        </div>
      </section>

      <section className="manifesto">
        <p className="kicker">The tiny manifesto</p>
        <h2>Your business deserves<br/>a website that feels<br/>like <span>you.</span></h2>
        <p className="manifesto-copy">It has a particular energy. A good website should catch it — in the words, the odd little details, the way things move, and the feeling people leave with.</p>
        <div className="stamp">made<br/>for you</div>
      </section>

      <section id="work" className="work-section">
        <div className="section-head"><p className="kicker">Selected website works</p></div>
        <div className="work-grid">
          {work.map((item, index) => (
            <article className={`work-card ${item.className}`} key={item.title}>
              <div className="card-number">0{index + 1}</div>
              <div className="fake-site"><img className="project-thumbnail" src={item.thumbnail} alt={`${item.title} website thumbnail`} /><span className="window-dots" aria-hidden="true">•••</span></div>
              <div><h3>{item.title}</h3><p>{item.kind}</p><a className="card-live" href={item.href} target="_blank" rel="noreferrer">View live site <span aria-hidden>↗</span></a></div>
            </article>
          ))}
        </div>
      </section>

      <section id="hello" className="hello">
        <p className="kicker">Got something brewing?</p>
        <h2>Let&apos;s give your<br/>website a <em>personality.</em></h2>
        <a className="email" href="mailto:info@websy.co.in">Contact: info@websy.co.in <span>↗</span></a>
        <form className="contact-form" action="https://formsubmit.co/ajax/info@websy.co.in" method="POST" onSubmit={handleContactSubmit}>
          <input type="hidden" name="_subject" value="New message from the Websy portfolio" />
          <input type="hidden" name="_template" value="table" />
          <label>
            <span>Your name</span>
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            <span>Email address</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label className="message-field">
            <span>How can I help?</span>
            <textarea name="message" rows={4} required />
          </label>
          <button type="submit" disabled={formState === "sending"}>{formState === "sending" ? "Sending…" : <>Send message <span aria-hidden="true">↗</span></>}</button>
          {formState === "sent" && <p className="form-feedback success" role="status">Message sent — I&apos;ll be in touch soon.</p>}
          {formState === "error" && <p className="form-feedback error" role="alert">That didn&apos;t send. Please try again or email me directly.</p>}
        </form>
        <div className="hello-doodle" aria-hidden="true">
          <i className="doodle-eye eye-left" />
          <i className="doodle-eye eye-right" />
          <i className="doodle-smile" />
          <span className="doodle-sparkle">✦</span>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><strong>Websy.</strong><span>By Aman Agarwal</span></div>
        <span className="footer-copy">© 2026 Aman Agarwal. All rights reserved.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
