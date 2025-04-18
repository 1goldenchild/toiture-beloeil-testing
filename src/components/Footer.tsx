
import { Facebook, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">Toiture Beloeil</div>
            <p className="text-gray-400">Expert en toiture à Beloeil</p>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services-de-couvreur/entretien-toiture-Beloeil/" className="text-gray-400 hover:text-white transition">
                  Entretien de toiture
                </Link>
              </li>
              <li>
                <Link to="/services-de-couvreur/inspection-toiture-Beloeil/" className="text-gray-400 hover:text-white transition">
                  Inspection de toiture
                </Link>
              </li>
              <li>
                <Link to="/services-de-couvreur/installation-toiture-Beloeil/" className="text-gray-400 hover:text-white transition">
                  Installation de toiture
                </Link>
              </li>
              <li>
                <Link to="/services-de-couvreur/remplacement-toiture-Beloeil/" className="text-gray-400 hover:text-white transition">
                  Remplacement de toiture
                </Link>
              </li>
              <li>
                <Link to="/services-de-couvreur/réparation-toiture-Beloeil/" className="text-gray-400 hover:text-white transition">
                  Réparation de toiture
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <a href="tel:+14506002538" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                <Phone size={16} />
                +1 450 600 2538
              </a>
              <a href="mailto:support@toiturebeloeil.ca" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                <Mail size={16} />
                support@toiturebeloeil.ca
              </a>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>861 Rue Radisson, Beloeil, QC J3G 4V9, Canada</span>
              </div>
              <div className="flex items-start gap-2 text-gray-400">
                <Clock size={16} className="mt-1 flex-shrink-0" />
                <span>Lun–Ven : 07h00–17h00<br />Sam : 08h00–12h00<br />Dim : Fermé</span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/conditions-utilisation/" className="text-gray-400 hover:text-white transition">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link to="/politique-de-confidentialité/" className="text-gray-400 hover:text-white transition">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
            <div className="pt-4">
              <a 
                href="https://facebook.com/toiturebeloeil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>Droit d'auteur © Toiture Beloeil. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
