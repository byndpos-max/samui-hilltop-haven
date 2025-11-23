import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroView from "@/assets/hero-view.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroView})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 font-serif text-5xl font-bold text-white drop-shadow-2xl md:text-7xl lg:text-8xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Sora Sierra
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white/90 drop-shadow-lg md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Experience breathtaking hilltop views, authentic Thai cuisine, and tropical paradise
        </p>
        <div className="flex flex-col gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-smooth"
            onClick={scrollToAbout}
          >
            Discover More
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-foreground transition-smooth"
          >
            View Menu
          </Button>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-8 w-8 text-white drop-shadow-lg" />
      </button>
    </section>
  );
};

export default Hero;
