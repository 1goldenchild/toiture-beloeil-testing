
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a 
            href="tel:+14506002538"
            className="hidden md:flex items-center gap-2 hover:text-gray-200 transition"
          >
            <Phone size={20} />
            <span>Appelez-nous aujourd'hui</span>
          </a>
          
          <div className="text-xl font-bold">Toiture Beloeil</div>

          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="hidden md:block">
            <DesktopMenu />
          </div>
          <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </div>
      </div>
    </header>
  );
};

export default Header;
