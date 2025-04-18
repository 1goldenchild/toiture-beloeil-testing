
import React from 'react';
import { Roof, Wrench, Droplet, Search, HardHat } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ServiceCardsSection = () => {
  const services = [
    {
      icon: <Roof size={48} className="text-roofing-accent" />,
      title: "Remplacement de toiture",
      description: "Remplacez votre vieille toiture par une installation neuve et durable pour protéger votre maison.",
      link: "https://toiturebeloeil.ca//services-de-couvreur/remplacement-toiture-Beloeil/"
    },
    {
      icon: <Wrench size={48} className="text-roofing-accent" />,
      title: "Réparation de toiture",
      description: "Résolvez rapidement vos problèmes de toiture avec notre service d'intervention professionnelle.",
      link: "https://toiturebeloeil.ca//services-de-couvreur/réparation-toiture-Beloeil/"
    },
    {
      icon: <Droplet size={48} className="text-roofing-accent" />,
      title: "Entretien de toiture",
      description: "Prolongez la durée de vie de votre toit grâce à un entretien régulier et préventif.",
      link: "https://toiturebeloeil.ca//services-de-couvreur/entretien-toiture-Beloeil/"
    },
    {
      icon: <Search size={48} className="text-roofing-accent" />,
      title: "Inspection de toiture",
      description: "Détectez les problèmes avant qu'ils ne s'aggravent avec notre service d'inspection approfondie.",
      link: "https://toiturebeloeil.ca//services-de-couvreur/inspection-toiture-Beloeil/"
    },
    {
      icon: <HardHat size={48} className="text-roofing-accent" />,
      title: "Installation de toiture",
      description: "Faites installer votre nouvelle toiture par nos experts qualifiés pour une protection optimale.",
      link: "https://toiturebeloeil.ca//services-de-couvreur/installation-toiture-Beloeil/"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-roofing-primary mb-12">Nos services de toiture</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a 
              key={index} 
              href={service.link}
              className="block h-full transition-transform hover:-translate-y-1"
            >
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-roofing-primary">{service.title}</h4>
                  <p className="text-gray-700">{service.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsSection;
