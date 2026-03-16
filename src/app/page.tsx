import About from "@/components/About";
import Hero from "@/components/Hero";
import Internship from "@/components/Internship/Internship";
import Podcast from "@/components/Podcast";


export default function Home() {
  return (
    <main className="w-full scroll-container">
      <Hero />
      <About />
      <Internship />
      <Podcast />
    </main>
  );
}
