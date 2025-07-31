import About from "@/components/About";
import Hero from "@/components/Hero";
import Podcast from "@/components/Podcast";


export default function Home() {
  return (
    <main className="w-screen overflow-hidden">
      <Hero />
      <About />
      <Podcast/>
    </main>
  );
}
