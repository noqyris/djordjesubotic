import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Certifications from "@/components/Certifications";
import About from "@/components/About";
import Profile from "@/components/Profile";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Capabilities />
      <Experience />
      <Stack />
      <Certifications />
      <About />
      <Profile />
      <Contact />
      <Footer />
    </main>
  );
}
