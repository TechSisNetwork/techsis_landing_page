import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import portraits from "../../public/portraits.png";

const stories = [
  { quote: "Before TechSis, I had a degree but zero practical experience. The mentorship program helped me build a portfolio and land my first tech role.", name: "Amara Osei", role: "Junior PM · Fintech" },
  { quote: "I was a teacher who wanted to switch to tech. TechSis gave me a structured path, mentorship, and a network that became a full-time offer.", name: "Nkechi Adeyemi", role: "UX Designer · Remote SaaS" },
  { quote: "The community is unlike anything I’ve experienced. It’s not just about learning — it’s about belonging.", name: "Fatima Diallo", role: "Data Analyst · NGO" },
];

export function SuccessStories() {
  return <section className="section-space bg-white">
    <Container>
      <div className="section-heading"><span>Real Stories, Real Impact</span><h2>Success Stories</h2></div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {stories.map((story, i) => <article key={story.name} className={`rounded-xl border border-gray-100 p-7 shadow-sm ${i === 1 ? "bg-[#151515] text-white" : "bg-white"}`}>
          <div className="mb-5 tracking-widest text-amber-400">★★★★★</div>
          <p className="min-h-28 text-sm leading-6 opacity-80">“{story.quote}”</p>
          <div className="mt-6 flex items-center gap-3"><Image src={portraits} alt="" width={42} height={42} className="h-10 w-10 rounded-full object-cover object-left"/><div><strong className="block text-sm">{story.name}</strong><small className="text-primary">{story.role}</small></div></div>
        </article>)}
      </div>
    </Container>
  </section>
}

export function CTA({ title = "Ready to be part of the movement?" }: { title?: string }) {
  return <div className="mx-auto my-16 max-w-3xl rounded-2xl bg-[#fff7f9] p-10 text-center">
    <h3 className="text-2xl font-bold">{title}</h3>
    <p className="mt-3 text-sm text-gray-500">Join women building careers, community, and impact in tech across Africa and beyond.</p>
    <div className="mt-6 flex flex-wrap justify-center gap-4"><Link className="btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSeSLpiEx6IXZlqaiO0M_GH8uLuZM9Li4A--avHDor1KHIc9bA/viewform">Join our Community</Link><Link className="btn-outline" href="/contact-us">Partner with us</Link></div>
  </div>
}
