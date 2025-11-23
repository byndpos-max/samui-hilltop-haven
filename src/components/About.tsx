import { MapPin, Leaf, Heart } from "lucide-react";
import interiorSwings from "@/assets/interior-swings.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-1000">
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              A Taste of Paradise
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Perched high above the stunning coastline of Koh Samui, Sora Sierra offers an unforgettable 
              dining experience where authentic Thai flavors meet breathtaking panoramic ocean views.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our hilltop location provides the perfect escape from the everyday, where you can relax on 
              our iconic swings, savor tropical cocktails, and indulge in traditional Thai cuisine prepared 
              with love and the freshest local ingredients.
            </p>
            
            <div className="grid gap-6 pt-4 sm:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-accent/20 p-4">
                  <MapPin className="h-6 w-6 text-tropical-ocean" />
                </div>
                <h3 className="font-semibold text-foreground">Hilltop Views</h3>
                <p className="text-sm text-muted-foreground">Panoramic ocean vistas</p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-accent/20 p-4">
                  <Leaf className="h-6 w-6 text-tropical-palm" />
                </div>
                <h3 className="font-semibold text-foreground">Fresh & Local</h3>
                <p className="text-sm text-muted-foreground">Authentic ingredients</p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-accent/20 p-4">
                  <Heart className="h-6 w-6 text-tropical-rust" />
                </div>
                <h3 className="font-semibold text-foreground">Made with Love</h3>
                <p className="text-sm text-muted-foreground">Traditional recipes</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
              <img 
                src={interiorSwings} 
                alt="Sora Sierra interior with swings and ocean view"
                className="h-full w-full object-cover transition-smooth hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
