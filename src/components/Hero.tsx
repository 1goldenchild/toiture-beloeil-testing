
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div 
      className="hero-section min-h-[600px] w-full flex items-center justify-center text-white relative py-16"
      style={{
        backgroundImage: `url('/lovable-uploads/2e396c8f-0426-4a75-b728-3418adda7b4e.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto z-10 px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-lg">
            Toiture à Beloeil – Faites confiance à nos experts pour votre toit
          </h1>
          <div className="text-lg md:text-xl mb-8 space-y-4">
            <p>
              Bienvenue chez Toiture Beloeil, votre partenaire de confiance pour tous vos besoins en toiture dans la région de Beloeil. Notre équipe d'experts passionnés combine savoir-faire technique et expérience locale pour vous offrir des services de toiture exceptionnels, qu'il s'agisse d'une <a href="https://toiturebeloeil.ca/services-de-couvreur/installation-toiture-beloeil/" className="text-roofing-accent hover:underline">installation complète</a>, d'une <a href="https://toiturebeloeil.ca/services-de-couvreur/reparation-toiture-beloeil/" className="text-roofing-accent hover:underline">réparation urgente</a> ou d'un simple <a href="https://toiturebeloeil.ca/services-de-couvreur/entretien-toiture-beloeil/" className="text-roofing-accent hover:underline">entretien</a>.
            </p>
            <p>
              Nous nous distinguons par notre engagement envers la qualité, en utilisant exclusivement des matériaux durables et en respectant les normes les plus strictes pour chaque projet. Notre promesse? Une intervention rapide, un travail soigné et un service personnalisé qui dépasse vos attentes.
            </p>
            <p>
              Chez Toiture Beloeil, votre satisfaction est notre priorité absolue. Nous prenons le temps d'écouter vos besoins pour vous proposer des solutions adaptées à votre budget et à vos exigences spécifiques. Faites-nous confiance pour protéger ce qui compte le plus: votre maison et ceux qui y vivent.
            </p>
          </div>
          <Button size="lg" className="bg-roofing-accent hover:bg-roofing-accent/90 text-white">
            Contactez-nous pour une consultation gratuite et sans engagement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
