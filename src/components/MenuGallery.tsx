import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

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
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [lightboxApi, setLightboxApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Track main carousel slide changes
  useEffect(() => {
    if (!mainApi) return;

    const onSelect = () => {
      setCurrentSlide(mainApi.selectedScrollSnap());
    };

    mainApi.on("select", onSelect);
    onSelect();

    return () => {
      mainApi.off("select", onSelect);
    };
  }, [mainApi]);

  // Sync lightbox carousel when opened
  useEffect(() => {
    if (lightboxApi && selectedIndex !== null) {
      lightboxApi.scrollTo(selectedIndex, true);
    }
  }, [lightboxApi, selectedIndex]);

  const openLightbox = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Handle keyboard navigation in lightbox
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lightboxApi?.scrollPrev();
    if (e.key === "ArrowRight") lightboxApi?.scrollNext();
  }, [closeLightbox, lightboxApi]);

  return (
    <section className="py-20 px-4 bg-muted/30 pt-28 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4 md:text-5xl">
            Our Full Menu
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Swipe through our complete menu. Tap any page to enlarge.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative px-12 md:px-16">
          <Carousel
            setApi={setMainApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {menuPages.map((page, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-2 md:pl-4 basis-[80%] sm:basis-[60%] md:basis-[45%] lg:basis-[35%]"
                >
                  <button
                    onClick={() => openLightbox(index)}
                    className="group relative w-full overflow-hidden rounded-xl shadow-soft hover:shadow-glow transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <div className="relative w-full" style={{ paddingBottom: '133.33%' }}>
                      <img
                        src={page.src}
                        alt={`Menu page ${index + 1} - ${page.title}`}
                        className="absolute inset-0 h-full w-full object-cover transition-smooth group-hover:scale-105"
                        loading={index < 5 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-smooth" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent p-4">
                        <p className="text-sm text-white font-medium">{page.title}</p>
                        <p className="text-xs text-white/70">Page {index + 1} of {menuPages.length}</p>
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
            {menuPages.map((_, index) => (
              <button
                key={index}
                onClick={() => mainApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-smooth ${
                  index === currentSlide 
                    ? "w-6 bg-primary" 
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedIndex !== null} onOpenChange={() => closeLightbox()}>
          <DialogContent 
            className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-background/95 backdrop-blur-md border-none"
            onKeyDown={handleKeyDown}
          >
            <VisuallyHidden>
              <DialogTitle>
                Menu Page Viewer
              </DialogTitle>
            </VisuallyHidden>
            
            {selectedIndex !== null && (
              <div className="relative h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border/50">
                  <span className="text-sm text-muted-foreground">
                    Swipe to navigate
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeLightbox}
                    className="hover:bg-muted"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Lightbox Carousel */}
                <div className="flex-1 relative overflow-hidden min-h-0">
                  <Carousel
                    setApi={setLightboxApi}
                    opts={{
                      align: "center",
                      loop: true,
                      startIndex: selectedIndex,
                    }}
                    className="w-full h-full"
                  >
                    <CarouselContent className="h-full ml-0">
                      {menuPages.map((page, index) => (
                        <CarouselItem key={index} className="h-full pl-0">
                          <div className="h-full w-full flex items-center justify-center p-4">
                            <img
                              src={page.src}
                              alt={`Menu page ${index + 1} - ${page.title}`}
                              className="max-h-full max-w-full w-auto h-auto object-contain rounded-lg shadow-soft"
                              style={{ maxHeight: 'calc(100%)', maxWidth: 'calc(100%)' }}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    
                    {/* Navigation Arrows - Hidden on mobile, shown on larger screens */}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => lightboxApi?.scrollPrev()}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-soft h-12 w-12 hidden sm:flex"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => lightboxApi?.scrollNext()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-soft h-12 w-12 hidden sm:flex"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </Carousel>
                </div>

                {/* Thumbnail Navigation */}
                <div className="p-4 border-t border-border/50 overflow-x-auto">
                  <div className="flex gap-2 justify-start sm:justify-center min-w-max sm:min-w-0">
                    {menuPages.map((page, index) => (
                      <button
                        key={index}
                        onClick={() => lightboxApi?.scrollTo(index)}
                        className={`flex-shrink-0 w-10 h-14 sm:w-12 sm:h-16 rounded overflow-hidden transition-smooth ${
                          lightboxApi?.selectedScrollSnap() === index
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
