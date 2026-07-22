import About from "@/components/About";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Participation from "@/components/Participation";
import Pillars from "@/components/Pillars";
import Programme from "@/components/Programme";
import Registration from "@/components/Registration";
import Sponsors from "@/components/Sponsors";
import WorldTourismDay from "@/components/WorldTourismDay";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WorldTourismDay />
      <Pillars />
      <Programme />
      <Participation />
      <Sponsors />
      <Gallery />
      <Registration />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
