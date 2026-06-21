import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Leadership from "@/components/Leadership";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Interests from "@/components/Interests";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Subtle warm grain so the paper background has depth, not flat color */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none opacity-[0.4]"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, rgba(194,65,12,0.06) 0%, transparent 55%)",
        }}
      />

      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Leadership />
        <Projects />
        <Skills />
        <Interests />
      </main>
      <Footer />
    </>
  );
}
