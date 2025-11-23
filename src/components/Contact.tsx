import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4 md:text-5xl">
                Visit Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Join us for an unforgettable dining experience high above Koh Samui
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 rounded-full bg-accent/20 p-3">
                  <MapPin className="h-5 w-5 text-tropical-ocean" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Hilltop Vista, Koh Samui<br />
                    Surat Thani, Thailand
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 rounded-full bg-accent/20 p-3">
                  <Clock className="h-5 w-5 text-tropical-palm" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Sunday<br />
                    10:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 rounded-full bg-accent/20 p-3">
                  <Phone className="h-5 w-5 text-tropical-rust" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">+66 XX XXX XXXX</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 rounded-full bg-accent/20 p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">hello@skyabovesamui.com</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 transition-smooth">
              Make a Reservation
            </Button>
          </div>
          
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-soft animate-in fade-in slide-in-from-right duration-1000">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126014.28507279397!2d99.93784404999999!3d9.5088449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3054f47d2e143247%3A0x30f0d67e71b3e9f!2sKoh%20Samui%2C%20Surat%20Thani%2C%20Thailand!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sky Above Samui Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
