import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import { ReactLenis } from "lenis/react";
export default function Home() {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
    </ReactLenis>
  );
}
