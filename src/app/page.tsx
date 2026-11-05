import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Cursor from "@/components/Cursor";
import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Cursor />
      <Background />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
