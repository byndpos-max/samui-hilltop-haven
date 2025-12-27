import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

// Import select menu pages for preview
import page01 from "@/assets/menu/page-01.webp";
import page03 from "@/assets/menu/page-03.webp";
import page06 from "@/assets/menu/page-06.webp";
import page12 from "@/assets/menu/page-12.webp";
import page18 from "@/assets/menu/page-18.webp";
import page21 from "@/assets/menu/page-21.webp";
import page23 from "@/assets/menu/page-23.webp";

const previewPages = [
  { src: page01, title: "Cover" },
  { src: page03, title: "Sora Signature" },
  { src: page06, title: "Thai Appetizers" },
  { src: page12, title: "All-Day Brunch" },
  { src: page18, title: "Coffee" },
  { src: page21, title: "Signature Smoothies" },
  { src: page23, title: "Cocktails" },
];

const MenuPreview = () => {
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="menu" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4 md:text-5xl">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover authentic Thai cuisine, all-day brunch, healthy bowls, signature cocktails, and more
          </p>
        </div>

        {/* Menu Preview Carousel */}
        <div className="relative px-12 md:px-16 mb-8">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {previewPages.map((page, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-2 md:pl-4 basis-[70%] sm:basis-[50%] md:basis-[40%] lg:basis-[30%]"
                >
                  <button
                    onClick={() => navigate('/menu')}
                    className="group relative w-full overflow-hidden rounded-xl shadow-soft hover:shadow-glow transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <div className="relative w-full" style={{ paddingBottom: '133.33%' }}>
                      <img
                        src={page.src}
                        alt={`Menu - ${page.title}`}
                        className="absolute inset-0 h-full w-full object-cover transition-smooth group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-smooth" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent p-3">
                        <p className="text-sm text-white font-medium">{page.title}</p>
                      </div>
                    </div>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 h-10 w-10 bg-background/90 hover:bg-background shadow-soft" />
            <CarouselNext className="right-0 h-10 w-10 bg-background/90 hover:bg-background shadow-soft" />
          </Carousel>

          {/* Page Indicator */}
          <div className="flex justify-center mt-6 gap-1.5">
            {previewPages.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-smooth ${
                  index === currentSlide 
                    ? "w-6 bg-primary" 
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to preview ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View Full Menu Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => navigate('/menu')}
            className="bg-primary hover:bg-primary/90"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
