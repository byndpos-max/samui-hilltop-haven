import Navigation from "@/components/Navigation";
import MenuGallery from "@/components/MenuGallery";
import Footer from "@/components/Footer";

const MenuPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <MenuGallery />
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;
