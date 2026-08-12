import { CourseGrid, FAQ, Icon, LeadForm, SectionHead, Shell } from "./components";
import Image from "next/image";

export default function Home() {
  return <Shell>
    <section className="minimal-hero"><div className="wrap minimal-hero-grid">
      <div className="minimal-hero-inner"><span className="eyebrow">Ahmedabad skill courses</span>
      <h1>Learn useful skills.<br/><span>Move forward with confidence.</span></h1>
      <p>Practical, trainer-led courses for students and working professionals. Learn through guided practice, personal feedback and real-world tasks.</p>
      <div className="hero-actions"><a className="button" href="#demo">Book a Free Demo Class <Icon name="arrow"/></a><a className="button button-secondary" href="/courses">Explore Courses</a></div>
      <div className="mini-proof"><span>Small batches</span><span>Flexible timings</span><span>Practical assignments</span></div></div>
      <Image className="hero-image" src="/og.png" width={1732} height={909} priority alt="SkillBridge trainer guiding students during a practical classroom session"/>
    </div></section>

    <section className="section section-compact"><div className="wrap"><SectionHead eyebrow="Popular courses" title="Start with the skill that matters now" copy="Clear course plans, useful practice and support when you need it."/><CourseGrid limit={3}/><div className="center-action"><a className="text-link" href="/courses">View all courses <Icon name="arrow"/></a></div></div></section>

    <section className="section section-tint section-compact"><div className="wrap simple-split"><div><SectionHead eyebrow="Why SkillBridge" title="Practical learning, kept personal" copy="Simple, focused teaching for learners who want to make steady progress."/></div><div className="simple-list"><article><span>01</span><div><h3>Small batches</h3><p>More space for questions and specific feedback.</p></div></article><article><span>02</span><div><h3>Practice-led classes</h3><p>Use concepts in guided exercises, not just notes.</p></div></article><article><span>03</span><div><h3>Flexible schedules</h3><p>Morning, evening and selected weekend options.</p></div></article></div></div></section>

    <section className="section section-compact"><div className="wrap narrow"><SectionHead eyebrow="Frequently asked" title="Clear answers before you enrol"/><FAQ/></div></section>

    <section id="demo" className="section cta-section"><div className="wrap form-layout"><div><span className="eyebrow light">Free demo class</span><h2>See if the course is a good fit.</h2><p>Meet the teaching team, ask your questions and choose a suitable batch—without pressure to enrol.</p><p className="minimal-contact"><a href="tel:+917940012345"><Icon name="phone"/> +91 79 4001 2345</a><a href="https://wa.me/917940012345" target="_blank" rel="noreferrer"><Icon name="chat"/> WhatsApp</a></p></div><LeadForm compact/></div></section>
  </Shell>;
}
