import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import CommunityLove from "@/components/CommunityLove";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Menu />
        <CommunityLove />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
