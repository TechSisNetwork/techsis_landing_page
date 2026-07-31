import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

const articles = [
  ["/blog-card-1.svg","An open discussion on mental health IV"],
  ["/blog-card-2.svg","An open discussion on mental health IV"],
  ["/blog-card-3.svg","An open discussion on mental health IV"],
  ["/blog-card-4.svg","An open discussion on mental health IV"],
];

export default function BlogPage() {
  return <main className="blog-listing">
    <section className="blog-list-hero"><Image src="/blog-listing-hero.svg" alt="" fill priority/><div><h1>Explore Our Latest Insights<br/>and Ideas.</h1><p>Thoughts we’re excited about, from tutorials to trend reports, fresh perspectives and tips you<br className="hidden md:block"/> can actually use.</p></div></section>
    <section className="all-articles"><Container><h2>All articles</h2><div className="article-grid">{articles.map((a,i)=><Link className="article-card-link" href="/blog/community-support" key={i}><article><Image src={a[0]} alt="" width={304} height={200}/><h3>{a[1]}</h3><span>Read more&nbsp; ⊙</span></article></Link>)}</div></Container></section>
  </main>
}
