
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 pt-20">
      <div className="container px-4 py-4 space-y-4">
        <Link to="/" className="block py-2 text-lg" onClick={onClose}>
          Accueil
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 py-2 text-lg">
            Services <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link to="/services-de-couvreur/entretien-toiture-Beloeil/" onClick={onClose}>
                Entretien de toiture
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/services-de-couvreur/inspection-toiture-Beloeil/" onClick={onClose}>
                Inspection de toiture
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/services-de-couvreur/installation-toiture-Beloeil/" onClick={onClose}>
                Installation de toiture
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/services-de-couvreur/remplacement-toiture-Beloeil/" onClick={onClose}>
                Remplacement de toiture
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/services-de-couvreur/réparation-toiture-Beloeil/" onClick={onClose}>
                Réparation de toiture
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link to="/contactez-nous/" className="block py-2 text-lg" onClick={onClose}>
          Contactez-nous
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 py-2 text-lg">
            Légal <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link to="/conditions-utilisation/" onClick={onClose}>
                Conditions d'utilisation
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/politique-de-confidentialité/" onClick={onClose}>
                Politique de confidentialité
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default MobileMenu;
