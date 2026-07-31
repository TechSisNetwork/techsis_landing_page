import About from "@/components/About";
import Hero from "@/components/Hero";
import Internship from "@/components/Internship/Internship";
import Podcast from "@/components/Podcast";
import { SuccessStories } from "@/components/SharedSections";


export default function Home() {
  return (
    <main className="w-full scroll-container">
      <Hero />
      <About />
      <Internship />
      <SuccessStories />
      <Podcast />
    </main>
  );
}
