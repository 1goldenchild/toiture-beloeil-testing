
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const DesktopMenu = () => {
  return (
    <NavigationMenu className="py-2">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/" className="px-4 py-2 hover:text-gray-600 transition">
              Accueil
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-2 p-4">
              <Link
                to="/services-de-couvreur/entretien-toiture-Beloeil/"
                className="block p-2 hover:bg-gray-100 rounded-md"
              >
                Entretien de toiture
              </Link>
              <Link
                to="/services-de-couvreur/inspection-toiture-Beloeil/"
                className="block p-2 hover:bg-gray-100 rounded-md"
              >
                Inspection de toiture
              </Link>
              <Link
                to="/services-de-couvreur/installation-toiture-Beloeil/"
                className="block p-2 hover:bg-gray-100 rounded-md"
              >
                Installation de toiture
              </Link>
              <Link
                to="/services-de-couvreur/remplacement-toiture-Beloeil/"
                className="block p-2 hover:bg-gray-100 rounded-md"
              >
                Remplacement de toiture
              </Link>
              <Link
                to="/services-de-couvreur/réparation-toiture-Beloeil/"
                className="block p-2 hover:bg-gray-100 rounded-md"
              >
                Réparation de toiture
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/contactez-nous/" className="px-4 py-2 hover:text-gray-600 transition">
              Contactez-nous
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Légal</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[300px] gap-2 p-4">
              <Link
                to="/conditions-utilisation/"
                className="block p-2 hover:bg-gray-100 rounded-md"
              >
                Conditions d'utilisation
              </Link>
              <Link
                to="/politique-de-confidentialité/"
                className="block p-2 hover:bg-gray-100 rounded-md"
              >
                Politique de confidentialité
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopMenu;
