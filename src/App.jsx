import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

// ===== Components =====
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function App() {

  // ===== Scroll Reveal Animation =====
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 1200,
      delay: 200,
      reset: false,
      easing: "ease-in-out",
    });

    sr.reveal(".reveal-top", { origin: "top" });
    sr.reveal(".reveal-left", { origin: "left" });
    sr.reveal(".reveal-right", { origin: "right" });
    sr.reveal(".reveal-bottom", { origin: "bottom" });
  }, []);

  return (
    <div className="font-sans overflow-x-hidden">

      {/* ===== Header ===== */}
      <Header />

      {/* ===== Main Content ===== */}
      <main>

        <section className="reveal-top">
          <Home />
        </section>

        <section className="reveal-left">
          <About />
        </section>

        <section className="reveal-right">
          <Services />
        </section>

        <section className="reveal-bottom">


        <Experience />
          <Projects />
        </section>

        <section className="reveal-top">
          <Testimonials />
        </section>

        <section className="reveal-left">
          <Contact />
        </section>

      </main>

      {/* ===== Footer ===== */}
      <Footer />

    </div>
  );
}
