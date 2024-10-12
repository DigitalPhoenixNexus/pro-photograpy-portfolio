import Hero from "./components/Hero";
import SectionOne from "./components/SectionOne";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer.";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-1 bg-first font ">
      <Hero />
      <SectionOne />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
