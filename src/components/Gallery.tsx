import heroView from "@/assets/hero-view.jpg";
import entrance from "@/assets/entrance.jpg";
import interiorSwings from "@/assets/interior-swings.jpg";

const Gallery = () => {
  const images = [
    { src: heroView, alt: "Breathtaking ocean view from Sky Above Samui", span: "md:col-span-2" },
    { src: entrance, alt: "Entrance to Sky Above Samui with tropical plants" },
    { src: interiorSwings, alt: "Interior dining area with hanging swings" },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4 md:text-5xl">
            Experience the View
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in the beauty of our hilltop paradise
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition-smooth ${image.span || ''} animate-in fade-in zoom-in duration-1000`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/3] md:aspect-auto md:h-full">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
