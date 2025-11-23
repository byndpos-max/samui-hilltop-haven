import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string, isRoute?: boolean) => {
    if (isRoute) {
      navigate('/gallery');
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Menu", id: "menu" },
    { label: "Gallery", id: "gallery", isRoute: true },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-soft" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-serif text-2xl font-bold transition-smooth hover:text-primary"
            >
              <span className={isScrolled ? "text-foreground" : "text-white drop-shadow-lg"}>
                Sora Sierra
              </span>
            </button>
            
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link.id, link.isRoute)}
                  className={`font-medium transition-smooth hover:text-primary ${
                    isScrolled ? "text-foreground" : "text-white drop-shadow-lg"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button 
                size="sm"
                className={`transition-smooth ${
                  isScrolled 
                    ? "bg-primary hover:bg-primary/90" 
                    : "bg-white/20 backdrop-blur-sm hover:bg-white hover:text-foreground border-2 border-white text-white"
                }`}
              >
                Reserve Now
              </Button>
            </div>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-smooth ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden animate-in fade-in slide-in-from-top duration-300">
          <div className="flex h-full flex-col items-center justify-center gap-8 px-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id, link.isRoute)}
                className="text-2xl font-medium text-foreground transition-smooth hover:text-primary"
              >
                {link.label}
              </button>
            ))}
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Reserve Now
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
