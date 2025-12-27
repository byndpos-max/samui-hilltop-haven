import heroView from "@/assets/hero-view.jpg";
import entrance from "@/assets/entrance.jpg";
import interiorSwings from "@/assets/interior-swings.jpg";
import dish01 from "@/assets/gallery/dish-01.jpg";
import dish02 from "@/assets/gallery/dish-02.jpg";
import dish03 from "@/assets/gallery/dish-03.jpg";
import dish04 from "@/assets/gallery/dish-04.jpg";
import dish05 from "@/assets/gallery/dish-05.jpg";
import dish06 from "@/assets/gallery/dish-06.jpg";
import dish07 from "@/assets/gallery/dish-07.jpg";
import dish08 from "@/assets/gallery/dish-08.jpg";
import dish09 from "@/assets/gallery/dish-09.jpg";
import dish10 from "@/assets/gallery/dish-10.jpg";
import dish11 from "@/assets/gallery/dish-11.jpg";
import dish12 from "@/assets/gallery/dish-12.jpg";
import dish13 from "@/assets/gallery/dish-13.jpg";
import dish14 from "@/assets/gallery/dish-14.jpg";
import ambiance01 from "@/assets/gallery/ambiance-01.jpg";
import ambiance02 from "@/assets/gallery/ambiance-02.jpg";
import ambiance03 from "@/assets/gallery/ambiance-03.jpg";
import ambiance04 from "@/assets/gallery/ambiance-04.jpg";
import ambiance05 from "@/assets/gallery/ambiance-05.jpg";
import ambiance06 from "@/assets/gallery/ambiance-06.jpg";
import ambiance07 from "@/assets/gallery/ambiance-07.jpg";
import ambiance08 from "@/assets/gallery/ambiance-08.jpg";
import ambiance09 from "@/assets/gallery/ambiance-09.jpg";
import ambiance10 from "@/assets/gallery/ambiance-10.jpg";
import ambiance11 from "@/assets/gallery/ambiance-11.jpg";
import ambiance12 from "@/assets/gallery/ambiance-12.jpg";
import ambiance13 from "@/assets/gallery/ambiance-13.jpg";
import ambiance14 from "@/assets/gallery/ambiance-14.jpg";
import ambiance15 from "@/assets/gallery/ambiance-15.jpg";
import ambiance16 from "@/assets/gallery/ambiance-16.jpg";

const Gallery = () => {
  const images = [
    { src: heroView, alt: "Breathtaking ocean view from Sora Sierra" },
    { src: entrance, alt: "Entrance to Sora Sierra with tropical plants" },
    { src: interiorSwings, alt: "Interior dining area with hanging swings" },
    { src: dish01, alt: "Crispy grilled chicken with sweet chili sauce" },
    { src: dish02, alt: "Thai cuisine spread with curry, soup and fresh vegetables" },
    { src: dish03, alt: "Shrimp fried rice with fresh cucumber garnish" },
    { src: dish04, alt: "Pad Thai wrapped in egg with shrimp and peanuts" },
    { src: dish05, alt: "Creamy Panang curry with chicken" },
    { src: dish06, alt: "Thai curry dishes with steamed rice" },
    { src: dish07, alt: "Cashew chicken stir-fry with vegetables" },
    { src: dish08, alt: "Stir-fried chicken with cashews and bell peppers" },
    { src: dish09, alt: "Crispy sweet potato fries with spicy dipping sauce" },
    { src: dish10, alt: "Shredded taro fries with Thai chili sauce" },
    { src: dish11, alt: "Smoked salmon bagel with cream cheese and capers" },
    { src: dish12, alt: "Full English breakfast with eggs, sausage, bacon and beans" },
    { src: dish13, alt: "Eggs Benedict with hollandaise sauce and latte" },
    { src: dish14, alt: "Gourmet sandwich with crispy potatoes" },
    { src: ambiance01, alt: "Sora Sierra entrance with tropical architecture" },
    { src: ambiance02, alt: "Couple enjoying breakfast with ocean view" },
    { src: ambiance03, alt: "Friends dining together with panoramic sea view" },
    { src: ambiance04, alt: "Group dining under thatched roof with ocean backdrop" },
    { src: ambiance05, alt: "Guests enjoying Thai feast with jungle and sea views" },
    { src: ambiance06, alt: "Friends laughing over delicious Thai food" },
    { src: ambiance07, alt: "Guests sharing a Thai feast in tropical setting" },
    { src: ambiance08, alt: "Friends dining with mountain jungle views" },
    { src: ambiance09, alt: "Group enjoying Thai cuisine in open-air restaurant" },
    { src: ambiance10, alt: "Happy guests savoring Thai dishes with views" },
    { src: ambiance11, alt: "Friends gathered for Thai feast at Sora Sierra" },
    { src: ambiance12, alt: "Group dining with spectacular ocean and jungle views" },
    { src: ambiance13, alt: "Couple enjoying romantic dinner with sea view" },
    { src: ambiance14, alt: "Thai feast spread with panoramic ocean backdrop" },
    { src: ambiance15, alt: "Authentic Thai dishes with tropical garden view" },
    { src: ambiance16, alt: "Thai cuisine display with island mountain views" },
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
        
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition-smooth animate-in fade-in zoom-in duration-1000"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-[4/3]">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                  loading="lazy"
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
