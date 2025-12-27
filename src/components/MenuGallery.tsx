import { useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Import all menu pages
import page01 from "@/assets/menu/page-01.webp";
import page02 from "@/assets/menu/page-02.webp";
import page03 from "@/assets/menu/page-03.webp";
import page04 from "@/assets/menu/page-04.webp";
import page05 from "@/assets/menu/page-05.webp";
import page06 from "@/assets/menu/page-06.webp";
import page07 from "@/assets/menu/page-07.webp";
import page08 from "@/assets/menu/page-08.webp";
import page09 from "@/assets/menu/page-09.webp";
import page10 from "@/assets/menu/page-10.webp";
import page11 from "@/assets/menu/page-11.webp";
import page12 from "@/assets/menu/page-12.webp";
import page13 from "@/assets/menu/page-13.webp";
import page14 from "@/assets/menu/page-14.webp";
import page15 from "@/assets/menu/page-15.webp";
import page16 from "@/assets/menu/page-16.webp";
import page17 from "@/assets/menu/page-17.webp";
import page18 from "@/assets/menu/page-18.webp";
import page19 from "@/assets/menu/page-19.webp";
import page20 from "@/assets/menu/page-20.webp";
import page21 from "@/assets/menu/page-21.webp";
import page22 from "@/assets/menu/page-22.webp";
import page23 from "@/assets/menu/page-23.webp";
import page24 from "@/assets/menu/page-24.webp";

const menuPages = [
  { src: page01, title: "Cover" },
  { src: page02, title: "Welcome" },
  { src: page03, title: "Sora Signature" },
  { src: page04, title: "Taste of Samui Set" },
  { src: page05, title: "Local Favourites" },
  { src: page06, title: "Thai Menu - Appetizers" },
  { src: page07, title: "Tom Yum Prawn" },
  { src: page08, title: "Main Dishes" },
  { src: page09, title: "Thai Dishes Overview" },
  { src: page10, title: "Noodles & Rice" },
  { src: page11, title: "Thai Noodle Dishes" },
  { src: page12, title: "All-Day Brunch" },
  { src: page13, title: "Full English Breakfast" },
  { src: page14, title: "Healthy Bowls & Salads" },
  { src: page15, title: "Sandwiches & Light Bites" },
  { src: page16, title: "Wraps" },
  { src: page17, title: "Sweet Treats" },
  { src: page18, title: "Coffee" },
  { src: page19, title: "Matcha & Non-Coffee" },
  { src: page20, title: "Fruit Shakes" },
  { src: page21, title: "Signature Smoothies" },
  { src: page22, title: "Refreshing Drinks & Tea" },
  { src: page23, title: "Cocktails & Beer" },
  { src: page24, title: "Back Cover" },
];

const MenuGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? menuPages.length - 1 : selectedIndex - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === menuPages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <section className="py-20 px-4 bg-muted/30 pt-28">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-1000">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4 md:text-5xl">
            Our Full Menu
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our complete menu featuring authentic Thai cuisine, all-day brunch, healthy bowls, signature cocktails, and more.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {menuPages.map((page, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-soft hover:shadow-glow transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <img
                src={page.src}
                alt={`Menu page ${index + 1} - ${page.title}`}
                className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-smooth flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-smooth drop-shadow-lg" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-2">
                <p className="text-xs text-white font-medium truncate">{page.title}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedIndex !== null} onOpenChange={() => closeLightbox()}>
          <DialogContent 
            className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-background/95 backdrop-blur-md border-none"
            onKeyDown={handleKeyDown}
          >
            <VisuallyHidden>
              <DialogTitle>
                {selectedIndex !== null ? `Menu Page ${selectedIndex + 1} - ${menuPages[selectedIndex].title}` : "Menu Page"}
              </DialogTitle>
            </VisuallyHidden>
            
            {selectedIndex !== null && (
              <div className="relative h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border/50">
                  <span className="text-sm text-muted-foreground">
                    Page {selectedIndex + 1} of {menuPages.length}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {menuPages[selectedIndex].title}
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeLightbox}
                    className="hover:bg-muted"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Image Container */}
                <div className="flex-1 relative flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={menuPages[selectedIndex].src}
                    alt={`Menu page ${selectedIndex + 1} - ${menuPages[selectedIndex].title}`}
                    className="max-h-full max-w-full object-contain rounded-lg shadow-soft"
                  />

                  {/* Navigation Arrows */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToPrevious}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-soft h-12 w-12"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-soft h-12 w-12"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>

                {/* Thumbnail Navigation */}
                <div className="p-4 border-t border-border/50 overflow-x-auto">
                  <div className="flex gap-2 justify-center">
                    {menuPages.map((page, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className={`flex-shrink-0 w-12 h-16 rounded overflow-hidden transition-smooth ${
                          index === selectedIndex 
                            ? "ring-2 ring-primary ring-offset-2" 
                            : "opacity-50 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={page.src}
                          alt={`Thumbnail ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default MenuGallery;
