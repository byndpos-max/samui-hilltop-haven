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

type GalleryItem = 
  | { type: 'single'; src: string; alt: string; span?: string }
  | { type: 'wide'; src: string; alt: string }
  | { type: 'stacked'; images: { src: string; alt: string }[] };

const Gallery = () => {
  const galleryItems: GalleryItem[] = [
    { type: 'wide', src: heroView, alt: "Breathtaking ocean view from Sora Sierra" },
    { type: 'stacked', images: [
      { src: entrance, alt: "Entrance to Sora Sierra with tropical plants" },
      { src: interiorSwings, alt: "Interior dining area with hanging swings" },
    ]},
    { type: 'single', src: dish01, alt: "Crispy grilled chicken with sweet chili sauce" },
    { type: 'wide', src: dish02, alt: "Thai cuisine spread with curry, soup and fresh vegetables" },
    { type: 'stacked', images: [
      { src: dish03, alt: "Shrimp fried rice with fresh cucumber garnish" },
      { src: dish04, alt: "Pad Thai wrapped in egg with shrimp and peanuts" },
    ]},
    { type: 'single', src: dish05, alt: "Creamy Panang curry with chicken" },
    { type: 'wide', src: dish06, alt: "Thai curry dishes with steamed rice" },
    { type: 'stacked', images: [
      { src: dish07, alt: "Cashew chicken stir-fry with vegetables" },
      { src: dish08, alt: "Stir-fried chicken with cashews and bell peppers" },
    ]},
    { type: 'single', src: dish09, alt: "Crispy sweet potato fries with spicy dipping sauce" },
    { type: 'single', src: dish10, alt: "Shredded taro fries with Thai chili sauce" },
    { type: 'single', src: dish11, alt: "Smoked salmon bagel with cream cheese and capers" },
    { type: 'wide', src: dish12, alt: "Full English breakfast with eggs, sausage, bacon and beans" },
    { type: 'stacked', images: [
      { src: dish13, alt: "Eggs Benedict with hollandaise sauce and latte" },
      { src: dish14, alt: "Gourmet sandwich with crispy potatoes" },
    ]},
    { type: 'wide', src: ambiance01, alt: "Sora Sierra entrance with tropical architecture" },
    { type: 'stacked', images: [
      { src: ambiance02, alt: "Couple enjoying breakfast with ocean view" },
      { src: ambiance06, alt: "Friends laughing over delicious Thai food" },
    ]},
    { type: 'wide', src: ambiance03, alt: "Friends dining together with panoramic sea view" },
    { type: 'stacked', images: [
      { src: ambiance04, alt: "Group dining under thatched roof with ocean backdrop" },
      { src: ambiance07, alt: "Guests sharing a Thai feast in tropical setting" },
    ]},
    { type: 'wide', src: ambiance05, alt: "Guests enjoying Thai feast with jungle and sea views" },
    { type: 'stacked', images: [
      { src: ambiance09, alt: "Group enjoying Thai cuisine in open-air restaurant" },
      { src: ambiance10, alt: "Happy guests savoring Thai dishes with views" },
    ]},
    { type: 'wide', src: ambiance08, alt: "Friends dining with mountain jungle views" },
    { type: 'stacked', images: [
      { src: ambiance11, alt: "Friends gathered for Thai feast at Sora Sierra" },
      { src: ambiance12, alt: "Group dining with spectacular ocean and jungle views" },
    ]},
    { type: 'wide', src: ambiance13, alt: "Couple enjoying romantic dinner with sea view" },
    { type: 'stacked', images: [
      { src: ambiance14, alt: "Thai feast spread with panoramic ocean backdrop" },
      { src: ambiance16, alt: "Thai cuisine display with island mountain views" },
    ]},
    { type: 'single', src: ambiance15, alt: "Authentic Thai dishes with tropical garden view", span: "md:col-span-3" },
  ];

  const renderGalleryItem = (item: GalleryItem, index: number) => {
    if (item.type === 'wide') {
      return (
        <div 
          key={index}
          className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition-smooth md:col-span-2 md:row-span-2 animate-in fade-in zoom-in duration-1000"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="h-full">
            <img 
              src={item.src} 
              alt={item.alt}
              className="h-full w-full object-cover transition-smooth group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-smooth" />
        </div>
      );
    }

    if (item.type === 'stacked') {
      return (
        <div 
          key={index}
          className="flex flex-col gap-4 md:row-span-2 animate-in fade-in zoom-in duration-1000"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {item.images.map((img, imgIndex) => (
            <div 
              key={imgIndex}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition-smooth flex-1"
            >
              <div className="h-full">
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          ))}
        </div>
      );
    }

    return (
      <div 
        key={index}
        className={`group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition-smooth animate-in fade-in zoom-in duration-1000 ${item.span || ''}`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="aspect-[4/3]">
          <img 
            src={item.src} 
            alt={item.alt}
            className="h-full w-full object-cover transition-smooth group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-smooth" />
      </div>
    );
  };

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
        
        <div className="grid gap-4 md:grid-cols-3 auto-rows-fr">
          {galleryItems.map((item, index) => renderGalleryItem(item, index))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
