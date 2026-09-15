import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { SuccessStories } from "@/components/SharedSections";
import hero from "../../../public/about-hero.png";
import story from "../../../public/story-image.png";
import LinkedIn from "@/components/icons/LinkedIn";

const values = [
  ["value-inclusion.svg","Inclusion","Every woman belongs, regardless of background or starting point."],
  ["value-innovation.svg","Innovation","We build new solutions and pathways where none existed before."],
  ["value-growth.svg","Growth","Continuous learning and measurable career progress."],
  ["value-collaboration.svg","Collaboration","We rise by lifting each other, community over competition."],
  ["value-empowerment.svg","Empowerment","Equipping women with tools, confidence, and agency."],
  ["value-opportunity.svg","Opportunity","Creating access where systems have historically closed doors."],
];
const team = [
  ["team-obelema.svg","Obelema Fubara","Founder & Executive Director","A business strategist, operations specialist, and social entrepreneur with over a decade of cross-sector experience."],
  ["team-ofure.svg","Ofure Asotie","Co-Founder & Head of Programs","A Product Manager with a background in multidisciplinary administration, project management, and human-centered design."],
  ["team-chidinma.svg","Chidinma","Head of Technology","Software engineer turned educator. Designed TechSis core curriculum framework."],
];

export default function AboutPage() {
  return <main>
    <section className="about-hero">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <p className="eyebrow normal-case tracking-normal">Women in Tech — Africa & Beyond</p>
          <h1 className="mt-3 max-w-[650px] text-4xl font-bold leading-[1.02] tracking-[-.04em] text-[#181818] md:text-5xl lg:text-6xl">Building a Culture<br/>Where Women in<br/>Tech Grow Together</h1>
          <p className="mt-7 max-w-[570px] text-base leading-[1.5] text-[#999] lg:text-lg">Techsis Network is building a community-driven ecosystem where women can learn, collaborate, gain experience, and confidently grow their careers in technology.</p>
          <div className="mt-10 flex flex-wrap gap-7"><Link className="about-button bg-primary text-white" href="https://docs.google.com/forms/d/e/1FAIpQLSeSLpiEx6IXZlqaiO0M_GH8uLuZM9Li4A--avHDor1KHIc9bA/viewform">Join our Community</Link><Link className="about-button border border-primary text-primary" href="/contact-us">Partner with us</Link></div>
          <div className="mt-10 flex gap-12">{[["100+","Women Trained"],["50+","Internship Placements"],["83%","Career Transition Rate"]].map(x=><div key={x[1]}><strong className="text-2xl">{x[0]}</strong><small className="block text-sm text-gray-500 lg:text-base">{x[1]}</small></div>)}</div>
        </div>
        <div className="relative mx-auto"><div className="absolute -left-10 top-14 h-36 w-36 rounded-full bg-[#f0fbfb]"/><Image src={hero} alt="Women collaborating in technology" className="relative w-[460px] rounded-[24px]" priority/><div className="absolute -bottom-5 -left-8 rounded-lg bg-white px-4 py-3 text-sm shadow-xl lg:text-base"><b>5+ Partner Orgs</b><br/><span className="text-gray-400">NGOs, Tech & Startups</span></div><div className="absolute -right-8 top-5 rounded-lg bg-white px-4 py-3 text-sm shadow-xl lg:text-base">Cohort 3 — Open<br/><b className="text-primary">Applications Live →</b></div></div>
      </Container>
    </section>

    <section className="bg-[#fff6f8] py-20 md:py-28"><Container className="grid items-center gap-14 md:grid-cols-[320px_1fr]"><Image src={story} alt="Obelema Fubara, founder" className="mx-auto w-[300px]"/><div><p className="eyebrow normal-case tracking-normal">Our Story</p><h2 className="mt-3 text-3xl font-bold leading-[1.05] md:text-4xl lg:text-5xl">Born from a Gap That Couldn&apos;t<br className="hidden lg:block"/> Be Ignored</h2><div className="mt-6 max-w-[780px] space-y-5 text-base leading-[1.5] text-[#888]"><p>Techsis Network was founded after witnessing firsthand how talented African women were being locked out of the tech industry, not because of lack of skill, but because of lack of access and experience. No internships. No mentors. No networks. No pathways.</p><p>Our founder, having navigated those same barriers, built Techsis to be the bridge she never had. A place where women don’t just learn, they practice, get placed, get paid, and get ahead.</p><p>Today, Techsis Network is a growing ecosystem of women in product management, software development, data, design, and business analysis, all building real careers with real support.</p></div></div></Container></section>

    <section className="values-section"><Container><div className="section-heading values-heading"><span className="normal-case tracking-normal">What Drives Us</span><h2>Mission, Vision &amp; Core Values</h2></div>
      <div className="mission-grid">
        <article className="mission-card mission-pink"><div className="mission-title-row"><div className="mission-icon bg-[#e8547a]"><Image src="/mission-target.svg" width={22} height={22} alt="Mission"/></div><h3>Our Mission</h3></div><p>To create a gender-balanced tech ecosystem by empowering women with the skills, experience, and opportunities needed to thrive in the technology industry.</p></article>
        <article className="mission-card mission-teal"><div className="mission-title-row"><div className="mission-icon bg-[#2d7d7d]"><Image src="/vision-eye.svg" width={22} height={15} alt="Vision"/></div><h3>Our Vision</h3></div><p>To close the gender gap in the tech workforce by providing tech-trained women with hands-on experience through collaborative live projects, mentorship, and resources. While also offering innovative tech solutions and consulting services to small and medium-sized businesses.</p></article>
      </div>
      <div className="core-values"><h3>Core Values</h3><div className="core-values-grid">{values.map(v=><div className="value-item" key={v[1]}><div className={`value-icon value-${v[1].toLowerCase()}`}><Image src={`/${v[0]}`} width={20} height={20} alt=""/></div><div><h4>{v[1]}</h4><p>{v[2]}</p></div></div>)}</div></div>
    </Container></section>

    <section className="bg-[#fff6f8] py-24"><Container><div className="section-heading"><span className="normal-case tracking-normal">The People Behind the Mission</span><h2>Our Leadership Team</h2></div><div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">{team.map(t=><article className="overflow-hidden rounded-xl bg-white shadow-sm" key={t[1]}><Image src={`/${t[0]}`} alt={t[1]} width={285} height={200} className="h-[210px] w-full object-cover"/><div className="p-4"><h3 className="text-lg font-bold">{t[1]}</h3><p className="text-sm font-semibold text-primary lg:text-base">{t[2]}</p><p className="mt-3 min-h-16 text-sm leading-[1.5] text-gray-500 lg:text-base">{t[3]}</p><span className="mt-3 block text-sm text-teal-700 lg:text-base"><LinkedIn/></span></div></article>)}</div></Container></section>

    <section className="impact-section py-24 text-white"><Container><div className="section-heading"><span className="normal-case tracking-normal">Measurable Impact</span><h2>Numbers That Tell Our Story</h2><p>Every metric below represents a real woman whose career trajectory changed because of Techsis Network.</p></div><div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-5">{[["100+","Women Trained"],["50+","Internship Placements"],["10+","Mentorship Sessions"],["5+","Partner Organizations"],["83%","Career Transition Rate"]].map((x,i)=><div className={`impact-card ${i===4?"text-teal-300":i===1?"text-pink-300":""}`} key={x[1]}><strong>{x[0]}</strong><small>{x[1]}</small></div>)}</div></Container></section>
    <SuccessStories />
  </main>
}
