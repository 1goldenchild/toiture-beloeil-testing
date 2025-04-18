
import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../components/service-pages/HeroSection";
import ServiceInfoSection from "../components/service-pages/ServiceInfoSection";
import { CallToActionBanner } from "../components/service-pages/CallToActionBanner";
import ServiceCardsSection from "../components/service-pages/ServiceCardsSection";
import MapSection from "../components/service-pages/MapSection";

const InspectionToiture = () => {
  return (
    <>
      <Helmet>
        <title>Inspection de toiture préventive à Beloeil | Réservez maintenant</title>
        <meta 
          name="description" 
          content="Faites inspecter votre toit par des professionnels à Beloeil. Prévention et diagnostic rapide ! Appelez-nous au +1 450 600 2538 !" 
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "inspection de toiture",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Toiture Beloeil",
                "telephone": "+1 450 600 2538",
                "url": "https://toiturebeloeil.ca//",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "07:00",
                    "closes": "17:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "08:00",
                    "closes": "12:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Sunday",
                    "opens": "00:00",
                    "closes": "00:00"
                  }
                ],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "861 Rue Radisson",
                  "addressLocality": "Beloeil",
                  "addressRegion": "Quebec",
                  "postalCode": "J3G 4V9",
                  "addressCountry": "Canada"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 45.4495898,
                  "longitude": -73.210129
                }
              },
              "areaServed": {
                "@type": "City",
                "name": "Beloeil"
              },
              "description": "Service professionnel d'inspection de toiture à Beloeil comprenant diagnostic complet, détection des problèmes potentiels et recommandations d'experts pour préserver l'intégrité de votre toit."
            }
          `}
        </script>
      </Helmet>
      
      <HeroSection
        title="Inspection de toiture à Beloeil – Prévenez les fuites et les dégâts"
        content="Bienvenue chez Toiture Beloeil, votre partenaire de confiance pour l'inspection professionnelle de toiture à Beloeil et ses environs. Notre équipe d'experts vous propose un service complet d'évaluation pour détecter les problèmes potentiels avant qu'ils ne se transforment en réparations coûteuses. Une inspection régulière est la meilleure façon de prolonger la durée de vie de votre toit et de protéger votre investissement immobilier. Que vous soupçonniez un problème, planifiez une maintenance préventive ou ayez besoin d'une évaluation pour votre assurance, nos techniciens qualifiés sont là pour vous offrir un diagnostic précis et des solutions adaptées. Contactez-nous aujourd'hui pour assurer la sécurité et la longévité de votre toiture!"
        imageUrl="/lovable-uploads/2e396c8f-0426-4a75-b728-3418adda7b4e.png"
      />

      <ServiceInfoSection
        title="Protégez votre toit, protégez votre maison – Faites inspecter votre toiture à Beloeil dès maintenant"
        paragraphs={[
          "Dans notre climat québécois rigoureux, votre toiture est constamment mise à l'épreuve. Neige abondante, pluie, grêle, vents violents et cycles de gel-dégel répétés peuvent causer des dommages insidieux qui passent souvent inaperçus jusqu'à ce qu'il soit trop tard.",
          "Une inspection régulière de votre toiture n'est pas un luxe, c'est une nécessité pour tout propriétaire prévoyant. Pensez-y: une simple infiltration d'eau peut rapidement entraîner des dégâts considérables - moisissures, pourriture des structures en bois, isolation compromise et même problèmes électriques!",
          `Chez <a href="https://toiturebeloeil.ca//">Toiture Beloeil</a>, nous recommandons une inspection professionnelle au moins une fois par an, idéalement au printemps après la fonte des neiges ou à l'automne avant l'arrivée de l'hiver. Cette visite préventive permet de détecter:

Les bardeaux endommagés, fissurés ou manquants
Les signes d'infiltration d'eau ou d'humidité excessive
L'usure des solins autour des cheminées et évents
Les problèmes de ventilation des combles
L'état général de votre système de gouttières

Ne laissez pas un petit problème devenir un cauchemar coûteux! Une inspection professionnelle coûte bien moins cher que les <a href="https://toiturebeloeil.ca//services-de-couvreur/reparation-de-toiture-beloeil/">réparations majeures</a> qui pourraient être nécessaires si vous négligez l'entretien de votre toiture. Protégez votre maison et votre tranquillité d'esprit avec une inspection approfondie par nos experts.`
        ]}
      />

      <CallToActionBanner 
        text="Contactez nos spécialistes en toiture pour un service rapide et fiable !"
        buttonText="Appelez immédiatement"
        phoneNumber="+1 450 600 2538"
      />

      <ServiceInfoSection
        title="Nos services d'inspection de toiture à Beloeil – Analyse approfondie pour un toit en toute sécurité"
        paragraphs={[
          "Chez Toiture Beloeil, nous offrons un service d'inspection complet et méticuleux pour évaluer précisément l'état de votre toiture. Notre approche systématique ne laisse rien au hasard et vous garantit un diagnostic fiable.",
          "Nous commençons par une inspection visuelle extérieure complète de votre toit. Nos techniciens examinent attentivement chaque partie de votre couverture pour repérer les signes d'usure ou de dommages. Nous utilisons des équipements spécialisés pour accéder en toute sécurité à toutes les zones, même les plus difficiles d'accès.",
          "L'inspection se poursuit ensuite dans vos combles, où nous recherchons des traces d'infiltration, des problèmes d'isolation ou de ventilation, et tout signe de faiblesse structurelle. Cette partie de l'évaluation est cruciale car elle permet de détecter des problèmes qui ne sont pas visibles de l'extérieur.",
          `À l'issue de l'inspection, vous recevez un rapport détaillé qui documente l'état de votre toiture avec photos à l'appui. Ce document précieux identifie clairement les problèmes actuels, les risques potentiels et inclut nos recommandations pour les travaux d'<a href="https://toiturebeloeil.ca//services-de-couvreur/entretien-de-toiture-beloeil/">entretien</a> ou de réparation nécessaires.`,
          "Notre objectif est de vous fournir toutes les informations dont vous avez besoin pour prendre des décisions éclairées concernant l'entretien de votre toiture. Avec Toiture Beloeil, vous bénéficiez d'une expertise locale et d'une évaluation honnête, sans surprises ni frais cachés."
        ]}
        imageUrl="/lovable-uploads/1cb3a89d-d1e4-487d-8561-2c373d1fd34b.png"
      />

      <ServiceCardsSection />
      
      <CallToActionBanner 
        text="Toiture endommagée ? Nos experts interviennent sans délai !"
        buttonText="Contactez-nous"
        phoneNumber="+1 450 600 2538"
      />

      <MapSection />
    </>
  );
};

export default InspectionToiture;
