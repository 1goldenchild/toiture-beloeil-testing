
import React from 'react';
import { Helmet } from "react-helmet";
import { Construction, Wrench, Shield, Search, Hammer } from "lucide-react";
import HeroSection from "@/components/service-pages/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import MapSection from "@/components/service-pages/MapSection";

const Services = () => {
  const services = [
    {
      title: "Remplacement de toiture",
      description: "Donnez une nouvelle vie à votre maison avec notre service complet de remplacement de toiture, utilisant des matériaux durables et garantis.",
      icon: Construction,
      link: "/services-de-couvreur/remplacement-toiture-Beloeil/",
      imageUrl: "/lovable-uploads/8e9c73e7-e681-4925-9f3a-7c4376a86bbc.png"
    },
    {
      title: "Réparation de toiture",
      description: "Intervention rapide et efficace pour réparer les fuites, dommages et usures avant qu'ils ne deviennent des problèmes majeurs.",
      icon: Wrench,
      link: "/services-de-couvreur/réparation-toiture-Beloeil/",
      imageUrl: "/lovable-uploads/1cb3a89d-d1e4-487d-8561-2c373d1fd34b.png"
    },
    {
      title: "Entretien de toiture",
      description: "Prolongez la durée de vie de votre toiture grâce à nos services d'entretien régulier adaptés aux conditions climatiques de Beloeil.",
      icon: Shield,
      link: "/services-de-couvreur/entretien-toiture-Beloeil/",
      imageUrl: "/lovable-uploads/88153479-99cf-4c17-a3e1-6a2f286b9c51.png"
    },
    {
      title: "Inspection de toiture",
      description: "Détection précoce des problèmes potentiels grâce à notre inspection professionnelle minutieuse et nos recommandations personnalisées.",
      icon: Search,
      link: "/services-de-couvreur/inspection-toiture-Beloeil/",
      imageUrl: "/lovable-uploads/a9b2e5d7-2d6e-4df6-bc57-89fdff438045.png"
    },
    {
      title: "Installation de toiture",
      description: "Installation experte de votre nouvelle toiture avec des techniques modernes et un souci du détail pour une protection optimale.",
      icon: Hammer,
      link: "/services-de-couvreur/installation-toiture-Beloeil/",
      imageUrl: "/lovable-uploads/69230fa7-790c-4a3c-bd7a-047c501a387e.png"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nos Services de Toiture | Beloeil</title>
        <meta 
          name="description" 
          content="Les services de toiture de Toiture Beloeil à beloeil incluent l'entretien de toiture, la réparation de toiture, l'inspection de toiture, l'installation de toiture et le remplacement de toiture." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "services de toiture",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Toiture Beloeil",
              "telephone": "+1 450 600 2538",
              "email": "support@toiturebeloeil.ca",
              "url": "https://toiturebeloeil.ca/",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "861 Rue Radisson",
                "addressLocality": "Beloeil",
                "addressRegion": "Quebec",
                "postalCode": "J3G 4V9",
                "addressCountry": "Canada"
              }
            }
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        <HeroSection 
          title="Nos Services de Toiture Offerts à Beloeil"
          content="Bienvenue chez Toiture Beloeil, votre partenaire de confiance pour tous vos besoins en toiture. Notre équipe de couvreurs expérimentés offre une gamme complète de services de qualité supérieure, du remplacement complet à l'inspection préventive. Que vous ayez besoin d'une réparation urgente ou d'un entretien saisonnier, nous sommes là pour protéger votre maison avec expertise et professionnalisme."
          imageUrl="/lovable-uploads/8e9c73e7-e681-4925-9f3a-7c4376a86bbc.png"
        />

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-roofing-primary mb-12">
              Services de Toiture Beloeil
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                  imageUrl={service.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-roofing-primary mb-8">
              Pourquoi choisir Toiture Beloeil pour vos services de couvreur?
            </h3>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                À Toiture Beloeil, nous nous démarquons par notre engagement envers l'excellence et la satisfaction client. Voici pourquoi les propriétaires de Beloeil nous font confiance depuis des années.
              </p>
              <p className="mb-4">
                Notre équipe est composée de couvreurs certifiés et expérimentés qui connaissent parfaitement les défis spécifiques aux toits dans notre région. Le climat québécois, avec ses hivers rigoureux et ses variations de température, exige une expertise particulière que nous maîtrisons.
              </p>
              <p className="mb-4">
                Nous utilisons exclusivement des matériaux de haute qualité provenant de fournisseurs réputés. Que vous optiez pour le bardeau d'asphalte, la tôle, les membranes élastomères ou d'autres options, nous vous garantissons une durabilité maximale.
              </p>
              <p className="mb-4">
                La transparence est au cœur de notre approche. Chaque projet commence par une évaluation détaillée et un devis clair, sans frais cachés. Nous prenons le temps d'expliquer nos recommandations et de répondre à toutes vos questions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-roofing-primary mb-8">
              Notre processus de service
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Consultation initiale",
                  description: "Nous commençons par écouter vos besoins et préoccupations lors d'un premier contact téléphonique."
                },
                {
                  title: "Inspection sur place",
                  description: "Un de nos experts se déplace à votre domicile pour évaluer l'état de votre toiture et identifier les problèmes potentiels."
                },
                {
                  title: "Recommandations",
                  description: "Nous vous présentons nos conclusions et vous proposons des solutions adaptées à votre situation et à votre budget."
                },
                {
                  title: "Planification",
                  description: "Une fois le devis approuvé, nous organisons l'intervention en fonction de votre agenda et des conditions météorologiques."
                },
                {
                  title: "Réalisation",
                  description: "Notre équipe intervient avec efficacité, en respectant les normes de sécurité et en minimisant les désagréments."
                },
                {
                  title: "Suivi",
                  description: "Nous restons disponibles pour répondre à vos questions et vous conseiller sur l'entretien futur."
                }
              ].map((step, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-roofing-primary">
                    {step.title}
                  </h4>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-roofing-primary mb-6">
                Contactez-nous pour vos besoins en toiture
              </h3>
              <div className="space-y-4 text-gray-700 mb-8">
                <p>
                  Vous avez des questions sur nos services de couvreur ou souhaitez obtenir un devis gratuit? Notre équipe est à votre disposition pour vous aider.
                </p>
                <div className="space-y-2">
                  <p><strong>Téléphone:</strong> +1 450 600 2538</p>
                  <p><strong>Email:</strong> support@toiturebeloeil.ca</p>
                  <p><strong>Adresse:</strong> 861 Rue Radisson, Beloeil, Quebec, J3G 4V9</p>
                  <p><strong>Heures d'ouverture:</strong></p>
                  <p>Lun–Ven : 07h00–17h00 | Sam : 08h00–12h00 | Dim : Fermé</p>
                </div>
              </div>
              <Button size="lg" className="bg-roofing-accent hover:bg-roofing-accent/90 text-white">
                Appelez ce numéro : +1 450 600 2538
              </Button>
            </div>
          </div>
        </section>

        <MapSection />
      </main>
    </>
  );
};

export default Services;
