"use client";

import { FormEvent, ReactNode, useMemo, useState } from "react";
import { batches, courses, faqs, stories, type Course } from "./data";

const phoneHref = "tel:+917940012345";
const whatsappHref = "https://wa.me/917940012345?text=Hi%20SkillBridge%20Academy%2C%20I%20would%20like%20to%20know%20about%20a%20course.";

export function Icon({ name }: { name: string }) {
  const icons: Record<string, string> = { phone: "☎", pin: "◆", clock: "◷", arrow: "→", check: "✓", spark: "✦", menu: "☰", close: "×", chat: "◉", calendar: "▣" };
  return <span aria-hidden="true">{icons[name] || "•"}</span>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [["Home", "/"], ["Courses", "/courses"], ["About", "/about"], ["Student Stories", "/stories"], ["Contact", "/contact"]];
  return <header className="site-header"><div className="wrap nav-wrap">
      <a href="/" className="brand" aria-label="SkillBridge Academy home"><span className="brand-mark">SB</span><span>SkillBridge<small>ACADEMY</small></span></a>
      <button className="menu-button" aria-expanded={open} aria-controls="main-nav" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} /></button>
      <nav id="main-nav" className={open ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="button button-small" href="/#demo" onClick={() => setOpen(false)}>Book Free Demo</a>
      </nav>
    </div></header>;
}

export function Footer() {
  return <footer className="footer"><div className="wrap footer-grid">
    <div><a href="/" className="brand brand-light footer-wordmark"><span>SkillBridge<small>ACADEMY</small></span></a><p>Practical skills. Personal guidance. Better opportunities.</p><p className="muted-light">A fictional portfolio concept for a local Ahmedabad training institute.</p></div>
    <div><h3>Explore</h3><a href="/courses">All courses</a><a href="/about">About us</a><a href="/stories">Student stories</a><a href="/contact">Contact</a></div>
    <div><h3>Popular skills</h3>{courses.slice(0,4).map(c => <a key={c.slug} href={`/courses/${c.slug}`}>{c.name}</a>)}</div>
    <div><h3>Visit the centre</h3><p>2nd Floor, Shilp Square<br/>Navrangpura, Ahmedabad 380009</p><a href={phoneHref}>+91 79 4001 2345</a><a href="mailto:hello@skillbridge.example">hello@skillbridge.example</a></div>
  </div><div className="wrap footer-bottom"><span>© 2026 SkillBridge Academy. Demo website.</span><span>Privacy · Accessibility · No guaranteed-job claims</span></div></footer>;
}

export function MobileActions() {
  return <div className="mobile-actions" aria-label="Quick contact actions"><a href={phoneHref}><Icon name="phone" /> Call</a><a href={whatsappHref} target="_blank" rel="noreferrer"><Icon name="chat" /> WhatsApp</a><a href="/#demo" className="primary"><Icon name="calendar" /> Book Demo</a></div>;
}

export function Shell({ children }: { children: ReactNode }) {
  return <><Header/><main>{children}</main><Footer/><MobileActions/></>;
}

export function SectionHead({ eyebrow, title, copy, align = "left" }: { eyebrow: string; title: string; copy?: string; align?: "left" | "center" }) {
  return <div className={`section-head ${align}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

export function CourseCard({ course }: { course: Course }) {
  return <article className="course-card">
    <div className="course-icon" style={{ background: course.accent }}>{course.name.slice(0,2).toUpperCase()}</div>
    <div className="course-tags"><span>{course.category}</span><span>{course.level}</span></div>
    <h3>{course.name}</h3><p>{course.description}</p>
    <div className="course-meta"><span><strong>{course.duration}</strong> duration</span><span><strong>{course.mode}</strong> mode</span></div>
    <a href={`/courses/${course.slug}`}>View course <Icon name="arrow" /></a>
  </article>;
}

export function CourseGrid({ limit }: { limit?: number }) {
  const [category, setCategory] = useState("All");
  const [duration, setDuration] = useState("All");
  const [mode, setMode] = useState("All");
  const [level, setLevel] = useState("All");
  const filtered = useMemo(() => courses.filter(c =>
    (category === "All" || c.category === category) &&
    (duration === "All" || (duration === "Short" ? c.durationWeeks <= 8 : c.durationWeeks > 8)) &&
    (mode === "All" || c.mode.includes(mode)) &&
    (level === "All" || c.level === level)
  ).slice(0, limit), [category, duration, mode, level, limit]);

  if (limit) return <div className="course-grid">{filtered.map(c => <CourseCard key={c.slug} course={c}/>)}</div>;
  return <>
    <div className="filters" aria-label="Course filters">
      <label>Category<select value={category} onChange={e=>setCategory(e.target.value)}><option>All</option>{[...new Set(courses.map(c=>c.category))].map(x=><option key={x}>{x}</option>)}</select></label>
      <label>Duration<select value={duration} onChange={e=>setDuration(e.target.value)}><option>All</option><option>Short</option><option>Long</option></select></label>
      <label>Learning mode<select value={mode} onChange={e=>setMode(e.target.value)}><option>All</option><option>Offline</option><option>Live</option></select></label>
      <label>Level<select value={level} onChange={e=>setLevel(e.target.value)}><option>All</option><option>Beginner</option><option>Intermediate</option></select></label>
    </div>
    <div className="results-line" aria-live="polite">Showing <strong>{filtered.length}</strong> courses</div>
    <div className="course-grid">{filtered.map(c => <CourseCard key={c.slug} course={c}/>)}</div>
    {!filtered.length && <div className="empty-state"><h3>No exact matches yet</h3><p>Clear a filter or talk to our counsellor about the closest option.</p><button className="text-button" onClick={()=>{setCategory("All");setDuration("All");setMode("All");setLevel("All")}}>Clear all filters</button></div>}
  </>;
}

type FormKind = "demo" | "counselling" | "contact" | "brochure";

function Field({ label, name, type="text", required=false, children, error, placeholder }: { label: string; name: string; type?: string; required?: boolean; children?: ReactNode; error?: string; placeholder?: string }) {
  const id = `field-${name}`;
  return <label className="field" htmlFor={id}><span>{label}{required && <b aria-hidden="true"> *</b>}</span>{children || <input id={id} name={name} type={type} required={required} placeholder={placeholder} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined}/>} {error && <small id={`${id}-error`} className="field-error">{error}</small>}</label>;
}

export function LeadForm({ kind = "demo", compact = false }: { kind?: FormKind; compact?: boolean }) {
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [status, setStatus] = useState<"idle"|"loading"|"success">("idle");
  const title = {demo:"Book your free demo", counselling:"Request free counselling", contact:"Send us a message", brochure:"Get the course brochure"}[kind];
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = e.currentTarget; const data = new FormData(form); const next: Record<string,string> = {};
    if (data.get("website")) return;
    ["name","phone"].forEach(n => { if (!String(data.get(n)||"").trim()) next[n] = n === "name" ? "Please enter your name." : "Please enter your mobile number."; });
    const phone = String(data.get("phone")||"").replace(/[\s()-]/g,"");
    if (phone && !/^\+?(?:91)?[6-9]\d{9}$/.test(phone)) next.phone = "Enter a valid Indian mobile number, with or without +91.";
    if (kind === "contact" && !String(data.get("email")||"").includes("@")) next.email = "Enter a valid email address.";
    if (kind === "demo" && !data.get("consent")) next.consent = "Please confirm that we may contact you about this enquiry.";
    setErrors(next); if (Object.keys(next).length) return;
    setStatus("loading"); window.setTimeout(()=>setStatus("success"), 800);
  }
  if (status === "success") return <div className="form-success" role="status"><span><Icon name="check" /></span><h3>Details saved in this demo</h3><p>This portfolio site has no live admissions backend, so nothing was sent. A real integration can connect this form to your CRM, email or Google Sheet.</p><a className="button" href={whatsappHref} target="_blank" rel="noreferrer">Continue on WhatsApp</a><button className="text-button" onClick={()=>setStatus("idle")}>Submit another enquiry</button></div>;
  return <form className={compact ? "lead-form compact" : "lead-form"} onSubmit={submit} noValidate>
    <div className="form-heading"><span className="eyebrow">No obligation</span><h2>{title}</h2><p>Tell us what you want to learn. A counsellor can help you choose the right starting point.</p></div>
    <div className="form-grid">
      <Field label="Full name" name="name" required error={errors.name}/><Field label="Mobile number" name="phone" type="tel" required placeholder="+91 98765 43210" error={errors.phone}/>
      {(kind === "demo" || kind === "contact") && <Field label={kind === "contact" ? "Email address" : "Email address (optional)"} name="email" type="email" required={kind === "contact"} error={errors.email}/>} 
      {(kind === "demo" || kind === "brochure") && <Field label="Interested course" name="course" required><select id="field-course" name="course" defaultValue=""><option value="" disabled>Select a course</option>{courses.map(c=><option key={c.slug}>{c.name}</option>)}</select></Field>}
      {kind === "demo" && <><Field label="Preferred learning mode" name="mode"><select id="field-mode" name="mode"><option>At Ahmedabad centre</option><option>Live online</option><option>Not sure</option></select></Field><Field label="Preferred time" name="time"><select id="field-time" name="time"><option>Morning</option><option>Afternoon</option><option>Evening</option><option>Weekend</option></select></Field><Field label="Education or occupation (optional)" name="occupation"/></>}
      {kind === "counselling" && <><Field label="Current goal" name="goal"><select id="field-goal" name="goal"><option>Get job-ready</option><option>Grow in my current role</option><option>Improve confidence</option><option>Start freelancing</option><option>Learn for my business</option></select></Field><Field label="Interested skill" name="skill"><select id="field-skill" name="skill">{courses.map(c=><option key={c.slug}>{c.name}</option>)}</select></Field><Field label="Preferred callback time" name="callback"><select id="field-callback" name="callback"><option>9 AM–12 PM</option><option>12 PM–4 PM</option><option>4 PM–8 PM</option></select></Field></>}
      {kind === "contact" && <><Field label="Subject" name="subject"/><Field label="Message" name="message"><textarea id="field-message" name="message" rows={4}/></Field></>}
      {kind === "brochure" && <Field label="Email or mobile" name="contact" required/>}
    </div>
    {kind === "demo" && <label className="consent"><input type="checkbox" name="consent" aria-invalid={!!errors.consent}/><span>I agree that SkillBridge Academy may contact me about this enquiry. <small className="field-error">{errors.consent}</small></span></label>}
    <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
    <button className="button button-full" type="submit" disabled={status === "loading"}>{status === "loading" ? "Saving your details…" : kind === "demo" ? "Book My Free Demo" : kind === "brochure" ? "Get Brochure" : "Send Enquiry"} <Icon name="arrow" /></button>
    <p className="form-note">Demo form only—no information is transmitted or stored.</p>
  </form>;
}

export function FAQ({ items = faqs }: { items?: string[][] }) {
  return <div className="faq-list">{items.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>;
}

export function StoryCards() { return <div className="story-grid">{stories.map(s=><article className="story-card" key={s.name}><div className="quote">“</div><p>{s.quote}</p><div className="story-person"><span>{s.initials}</span><div><strong>{s.name}</strong><small>{s.course}</small></div></div></article>)}</div>; }

export function BatchTable() { return <div className="batch-table" role="region" aria-label="Upcoming batch timings"><div className="batch-row batch-head"><span>Course</span><span>Starts</span><span>Timing</span><span>Availability</span><span></span></div>{batches.map(b=><div className="batch-row" key={b[0]}><strong>{b[0]}</strong><span>{b[1]}</span><span>{b[2]}</span><span><em>{b[3]}</em></span><a href="/#demo" aria-label={`Enquire about ${b[0]}`}>Enquire <Icon name="arrow"/></a></div>)}<small className="demo-label">Illustrative batch dates for this portfolio demo.</small></div>; }

export function CourseDetail({ course }: { course: Course }) {
  return <Shell>
    <section className="course-hero"><div className="wrap course-hero-grid"><div><a href="/courses" className="back-link">← All courses</a><span className="eyebrow">{course.category} · {course.level}</span><h1>{course.name}</h1><p>{course.description} {course.outcome}</p><div className="hero-actions"><a className="button" href="#enquire">Book Free Demo</a><button className="button button-secondary" onClick={()=>document.getElementById("brochure")?.scrollIntoView({behavior:"smooth"})}>Download Brochure</button></div></div><aside className="course-facts"><h2>Course at a glance</h2><dl><div><dt>Duration</dt><dd>{course.duration}</dd></div><div><dt>Mode</dt><dd>{course.mode}</dd></div><div><dt>Level</dt><dd>{course.level}</dd></div><div><dt>Certificate</dt><dd>On eligible completion</dd></div></dl></aside></div></section>
    <section className="section"><div className="wrap detail-grid"><div><SectionHead eyebrow="What you will learn" title="Skills built through practice" copy="Trainer-led explanation is followed by exercises, feedback and a final applied task."/><div className="check-list">{["Understand the core concepts without unnecessary jargon","Complete guided exercises using realistic examples",course.outcome,"Receive personalised feedback on key assignments"].map(x=><p key={x}><Icon name="check"/>{x}</p>)}</div><h2 className="subhead">Syllabus modules</h2><div className="syllabus">{course.modules.map((m,i)=><details key={m.title} open={i===0}><summary><span>{String(i+1).padStart(2,"0")}</span><strong>{m.title}</strong><b aria-hidden="true">+</b></summary><p>{m.lessons}</p></details>)}</div><h2 className="subhead">Tools and practice</h2><div className="tool-pills">{course.tools.map(t=><span key={t}>{t}</span>)}</div></div><aside><div className="info-card"><h3>Is this course for you?</h3><p>Ideal for learners who want structured guidance, regular practice and a clear path from basics to an applied project.</p><hr/><p><strong>Prerequisite:</strong> Basic computer familiarity where relevant. No prior professional experience required.</p></div><div id="brochure" className="mini-form"><LeadForm kind="brochure" compact/></div></aside></div></section>
    <section className="section section-tint"><div className="wrap narrow"><SectionHead eyebrow="Meet your trainer" title="Guidance that stays practical"/><div className="trainer"><div className="trainer-avatar">RP</div><div><h3>Riya Patel <span>Sample trainer profile</span></h3><p>A practical-skills trainer profile designed for this demo. In a live institute site, this area would include verified experience, teaching approach and relevant certifications.</p></div></div></div></section>
    <section className="section"><div className="wrap narrow"><SectionHead eyebrow="Common questions" title={`About the ${course.name} course`}/><FAQ items={[["Can I attend a demo before joining?","Yes. Book a free demo to experience the teaching style and discuss your goals."],["Are there practical assignments?","Yes. Each module includes guided work, and the course ends with an applied task or portfolio piece where relevant."],["Can I switch batch timings?","Batch changes depend on availability. The counselling team can explain current options before enrolment."]]}/></div></section>
    <section id="enquire" className="section cta-section"><div className="wrap form-layout"><div><span className="eyebrow light">Ready to explore?</span><h2>Try the learning experience before you decide.</h2><p>Share your preferred time and we’ll help you find a suitable demo slot.</p></div><LeadForm compact/></div></section>
  </Shell>;
}
