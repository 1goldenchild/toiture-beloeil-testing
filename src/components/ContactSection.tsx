
import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center text-roofing-primary mb-8">
          Devis gratuit à Beloeil – Contactez-nous pour vos besoins de toiture
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex-1 bg-roofing-light p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-roofing-primary">Nos coordonnées</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="text-roofing-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Téléphone</p>
                  <a href="tel:+14506002538" className="text-roofing-secondary hover:text-roofing-accent">
                    +1 450 600 2538
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="text-roofing-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Courriel</p>
                  <a href="mailto:support@toiturebeloeil.ca" className="text-roofing-secondary hover:text-roofing-accent">
                    support@toiturebeloeil.ca
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="text-roofing-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Heures d'ouverture</p>
                  <p className="text-sm">Lun–Ven : 07h00–17h00</p>
                  <p className="text-sm">Sam : 08h00–12h00</p>
                  <p className="text-sm">Dim : Fermé</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Button 
                size="lg" 
                className="w-full bg-roofing-accent hover:bg-roofing-accent/90 text-white"
                asChild
              >
                <a href="tel:+14506002538">
                  <Phone className="mr-2" size={18} />
                  Appelez-nous maintenant
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
