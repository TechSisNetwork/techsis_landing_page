import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

const packages = [
  ["Bronze Category","Perfect for beginners, the Bronze category focuses on building your foundation. Ideal for Business Analysts, Product Managers, Designers and Developers who are just starting out and want to sharpen their skills.","3–6 Months / ₦50 per annum","Sign Up for Individual Project Mentorship"],
  ["Silver Category","Designed for Product Managers, Business Analysts, Designers, and Developers who want to practice teamwork while growing their portfolios.","6 Months / ₦80 per annum","Sign Up for Collaborative Project Mentorship"],
  ["Gold Category","Perfect for professionals who would like to take the leap into professional work experience. Includes live projects with real deliverables and mentorship.","6–12 Months / ₦100 per annum","Sign Up for Live Project Mentorship"],
];

const applicantsLeft = [
  ["Curious Student","You’re currently studying in school or university, and you’re keen on your first steps into tech."],
  ["Recent Graduate","With a fresh qualification in your hand, you’re ready to learn, grow, and build real-world experience."],
  ["Career Explorer","You’re considering a career in tech but aren’t fully sure where you fit. We offer an introductory understanding of the areas and support your exploration."],
];
const applicantsRight = [
  ["The Self-Learner","You’ve been learning through YouTube, online courses, or bootcamps. You know the basics and now you’re eager to apply your skills in real projects."],
  ["The Community Builder","You’ve discovered social media, writing, or design, and want to contribute while learning."],
  ["Career Shifter","With a basic understanding maybe from an online course, you’re looking for a guided route into another career path."],
];

export default function InternshipPage() {
  return <main className="internship-page">
    <section className="intern-hero"><Container className="text-center"><h1>Internship Opportunities at<br/><b>Tech Sis Network</b></h1><p>Step into tech with confidence. Our internship program empowers students and Early<br className="hidden md:block"/> career tech sis with hands-on experience, mentorship, and a strong support network to<br className="hidden md:block"/> launch their careers in tech.</p><div className="intern-actions"><Link href="#packages" className="btn-primary">Pick your Category</Link><Link href="#tracks" className="btn-outline">Explore with us</Link></div><Image src="/internship-hero.svg" alt="TechSis internship community" width={789} height={345} className="intern-hero-image"/><div className="intern-benefits">{[["Mentorship from inspiring women in tech","Get practical career knowledge from women who have navigated and succeeded in tech."],["Professional growth with portfolio-ready work","Build projects that prove your skills and help you stand out."],["belonging in a network that champions women in tech","Be part of a supportive community for every stage of your journey."]].map(x=><div key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p></div>)}</div></Container></section>

    <section id="tracks" className="intern-tracks"><Container><div className="intern-heading"><span>Internship Opportunity</span><h2>Explore Our Internship Tracks</h2><p>Our internships are more than work experience — they’re a pathway to growth, representation, and impact.<br/>We provide opportunities in key areas of tech and product development.</p></div>
      <div className="track-mosaic">
        <article className="track-business"><Image src="/business-analysis-card.svg" alt="Business Analysis — hands-on experience gathering requirements and creating documentation" fill/></article>
        <article className="track-simple track-front"><Image src="/frontend-track.svg" alt="" width={72} height={72}/><h3>Front-end Development</h3><p>Strengthen your coding skills by building responsive, interactive web interfaces.</p></article>
        <article className="track-simple track-writing"><Image src="/technical-writing.svg" alt="" width={72} height={72}/><h3>Technical Writing</h3><p>Easily create simple, structured, readable content for users and developers.</p></article>
        <article className="track-design"><div><h3>Product Designing</h3><p>Explore the world of user-centered design. Develop skills in wireframing, prototyping, and usability testing while creating intuitive, accessible, and visually engaging digital experiences.</p></div><Image src="/product-design-person.svg" alt="" width={500} height={251}/></article>
        <article className="track-simple track-product"><Image src="/product-management.svg" alt="" width={72} height={72}/><h3>Product Management</h3><p>Step into the role of a product leader. You’ll learn how to define product vision and strategy.</p></article>
        <article className="track-social track-image"><Image src="/social-media.svg" alt="" fill/><div><h3>SocialMedia<br/>Management</h3><p>Learn content creation, strategy, and analytics in a professional environment.</p></div></article>
        <article className="track-simple track-back"><Image src="/backend-track.svg" alt="" width={72} height={72}/><h3>Back-end development</h3><p>Learn to build, test, and manage server-side applications, APIs, and databases.</p></article>
      </div>
    </Container></section>

    <section id="packages" className="intern-packages"><Container><div className="intern-heading"><h2>Choose the best internship<br/>package for you</h2><p>At Tech Sis Network, we know that every learner has different goals and starting points. That’s why our internship program offers three flexible categories.</p></div><div className="package-list">{packages.map(p=><article key={p[0]}><h3>{p[0]}</h3><p>{p[1]}</p><h4>Features</h4><p>Collaborative projects (portfolio pieces)<br/>Access to resources and templates<br/>Mentorship from industry professionals</p><h4>Period</h4><p>{p[2]}</p><Link href="#apply">{p[3]}</Link></article>)}</div></Container></section>

    <section className="intern-applicants"><Container><div className="intern-heading"><h2>Who Can Apply To Our<br/>Internship?</h2><p>Wondering if you’re qualified? Here’s Who We’re Looking For</p></div><div className="applicant-grid"><div>{applicantsLeft.map(x=><Applicant key={x[0]} item={x}/>)}</div><Image src="/internship-applicant.svg" width={450} height={740} alt="Internship applicant"/><div className="text-right">{applicantsRight.map(x=><Applicant key={x[0]} item={x}/>)}</div></div></Container></section>

    <section id="apply" className="apply-section"><Container className="apply-grid"><div><h2>Ready To Apply? Send us a Message</h2><p>We’d love to hear from you. Please fill out this form, and we’ll reply soon.</p><div className="apply-details"><div><h3>Email</h3><p>Contact us by email, and we will respond shortly.</p><b>admin@techsisnetwork.com</b></div><div><h3>Socials</h3><p>Reach out to us on all socials.</p><b>@Techsis Network</b></div><div><h3>Mobile</h3><p>Call us on weekdays from 9 AM to 5 PM.</p><b>+234 704 722 1018</b></div></div></div><form className="apply-form"><h3>Write us a message</h3><div className="grid grid-cols-2 gap-3"><label>First name *<input placeholder="Jane"/></label><label>Last name *<input placeholder="Smith"/></label></div><label>Email *<input type="email" placeholder="you@gmail.com"/></label><label>Message *<textarea rows={4} placeholder="Leave us a message..."/></label><button type="button">Send</button></form></Container></section>
  </main>
}

function Applicant({item}:{item:string[]}) { return <article className="applicant-item"><h3>{item[0]}</h3><p>{item[1]}</p></article> }
