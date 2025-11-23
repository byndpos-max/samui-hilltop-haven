import { Card, CardContent } from "@/components/ui/card";
import thaiFoodImg from "@/assets/thai-food.jpg";
import smoothieBowlImg from "@/assets/smoothie-bowl.jpg";
import cocktailsImg from "@/assets/cocktails.jpg";

const menuCategories = [
  {
    title: "Authentic Thai Cuisine",
    description: "Traditional dishes bursting with flavor, from Pad Thai to Tom Yum soup",
    image: thaiFoodImg,
    items: ["Pad Thai", "Green Curry", "Tom Yum Soup", "Massaman Curry"]
  },
  {
    title: "Tropical Smoothies",
    description: "Fresh fruit smoothies and bowls made with exotic local ingredients",
    image: smoothieBowlImg,
    items: ["Mango Passion", "Dragon Fruit Bowl", "Coconut Paradise", "Pineapple Mint"]
  },
  {
    title: "Signature Cocktails",
    description: "Handcrafted tropical cocktails to complement your sunset experience",
    image: cocktailsImg,
    items: ["Samui Sunset", "Thai Basil Mojito", "Lychee Martini", "Passion Colada"]
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4 md:text-5xl">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover a culinary journey through Thailand's rich flavors and tropical delights
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menuCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="overflow-hidden border-none shadow-soft hover:shadow-glow transition-smooth animate-in fade-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="h-full w-full object-cover transition-smooth hover:scale-110"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
                <div className="pt-2 space-y-2">
                  {category.items.map((item) => (
                    <div 
                      key={item}
                      className="flex items-center text-sm text-foreground"
                    >
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
