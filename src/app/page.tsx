import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Sectors from "@/components/Sectors";
import Contact from "@/components/Contact";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Services />
        <About />
        <Sectors />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
