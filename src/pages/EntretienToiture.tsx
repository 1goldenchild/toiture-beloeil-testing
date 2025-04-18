
import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../components/service-pages/HeroSection";
import ServiceInfoSection from "../components/service-pages/ServiceInfoSection";
import MaintenanceServices from "../components/service-pages/MaintenanceServices";
import AdvantagesSection from "../components/service-pages/AdvantagesSection";
import ServiceCardsSection from "../components/service-pages/ServiceCardsSection";
import MapSection from "../components/service-pages/MapSection";
import { CallToActionBanner } from "../components/service-pages/CallToActionBanner";

const EntretienToiture = () => {
  return (
    <>
      <Helmet>
        <title>Entretien de toiture Beloeil | Nettoyage et Protection | +1 450 600 2538</title>
        <meta name="description" content="Nettoyage et entretien de toiture à Beloeil pour une protection optimale contre les intempéries. Demandez une estimation gratuite au +1 450 600 2538 !" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "entretien de toiture",
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
              "description": "Service d'entretien de toiture professionnel à Beloeil incluant inspection, nettoyage, traitement hydrofuge et anti-mousse, et vérification des solins pour prolonger la durée de vie de votre toit."
            }
          `}
        </script>
      </Helmet>
      
      <HeroSection
        title="Services d'entretien de toiture à Beloeil | Nettoyage & Protection"
        content="Bienvenue chez Toiture Beloeil, votre expert local en entretien de toiture. Notre équipe qualifiée offre des services professionnels d'entretien pour préserver l'intégrité et prolonger la durée de vie de votre toit. Que vous ayez besoin d'un nettoyage régulier, d'une inspection préventive ou d'un traitement spécifique, nous intervenons rapidement et efficacement partout à Beloeil. Un toit bien entretenu est votre meilleure protection contre les intempéries québécoises - faites confiance à nos services d'entretien pour garder votre maison en sécurité année après année."
        imageUrl="/lovable-uploads/2e396c8f-0426-4a75-b728-3418adda7b4e.png"
      />
      
      <ServiceInfoSection
        title="Pourquoi l'entretien de toiture est-il essentiel ?"
        paragraphs={[
          "L'entretien régulier de votre toiture n'est pas un luxe, c'est une nécessité! Au Québec, nos toits subissent des conditions météorologiques extrêmes - neige abondante, pluies torrentielles, cycles de gel et dégel, et soleil intense. Sans entretien, ces éléments accélèrent considérablement la détérioration de votre couverture.",
          "Un entretien préventif vous permet d'économiser beaucoup d'argent à long terme. Pensez-y: réparer une petite fuite détectée tôt coûte bien moins cher que de remplacer un plafond endommagé par l'eau! En <a href=\"https://toiturebeloeil.ca//services-de-couvreur/inspection-de-toiture-beloeil/\">faisant inspecter votre toiture</a> régulièrement, vous identifiez les problèmes potentiels avant qu'ils ne deviennent catastrophiques.",
          "L'accumulation de mousse, d'algues et de débris peut aussi retenir l'humidité et endommager progressivement vos bardeaux. Un nettoyage professionnel élimine ces menaces et prolonge sensiblement la durée de vie de votre toit. N'attendez pas que des dommages visibles apparaissent - à ce moment-là, il est souvent trop tard et les <a href=\"https://toiturebeloeil.ca//services-de-couvreur/reparation-de-toiture-beloeil/\">réparations nécessaires</a> seront beaucoup plus importantes.",
          "Chez Toiture Beloeil, nous recommandons un entretien au moins une fois par an, idéalement au printemps après l'hiver rude ou à l'automne avant les premières neiges. Votre toit est votre première ligne de défense - prenez-en soin!"
        ]}
      />

      <ServiceInfoSection
        title="Services d'entretien de toiture professionnels à Beloeil – Protégez votre investissement"
        paragraphs={[
          "Chez <a href=\"https://toiturebeloeil.ca//\">Toiture Beloeil</a>, nous offrons des services d'entretien complets adaptés aux besoins spécifiques de votre maison. Notre équipe expérimentée utilise des techniques éprouvées et un équipement de pointe pour garantir des résultats durables.",
          "Nous comprenons que chaque toit est unique, c'est pourquoi nous commençons toujours par une évaluation approfondie de l'état actuel de votre toiture. Cela nous permet de créer un plan d'entretien personnalisé qui cible les zones problématiques et prévient les dégâts futurs.",
          "Notre approche méthodique et attentive assure que rien n'est négligé. Du nettoyage des gouttières à la vérification des solins, nous prenons soin de chaque détail pour que votre toiture reste en parfait état pendant de nombreuses années.",
          "N'attendez pas que les petits problèmes deviennent des urgences coûteuses! Un entretien régulier avec Toiture Beloeil est l'investissement le plus intelligent que vous puissiez faire pour protéger votre maison et éviter les mauvaises surprises."
        ]}
        imageUrl="/lovable-uploads/1cb3a89d-d1e4-487d-8561-2c373d1fd34b.png" 
      />
      
      <CallToActionBanner 
        text="Faites réparer ou installer votre toiture par des pros – Appelez-nous maintenant !" 
        buttonText="Appelez pour assistance"
        phoneNumber="+1 450 600 2538"
      />
      
      <MaintenanceServices />
      
      <AdvantagesSection 
        title="Les avantages de choisir Toiture Beloeil à Beloeil"
        content={`Faire appel à Toiture Beloeil pour l'entretien de votre toiture, c'est choisir l'excellence et la tranquillité d'esprit. Voici pourquoi nos clients nous font confiance année après année :
        <ul class="list-disc pl-5 mt-4 space-y-2">
          <li><span class="font-semibold">Expertise locale :</span> Notre équipe connaît parfaitement les conditions climatiques spécifiques à Beloeil et adapte nos services en conséquence.</li>
          <li><span class="font-semibold">Techniciens certifiés :</span> Tous nos employés sont formés aux dernières techniques et utilisent des équipements de pointe pour garantir des résultats impeccables.</li>
          <li><span class="font-semibold">Matériaux premium :</span> Nous n'utilisons que des produits de haute qualité pour tous nos traitements et réparations, assurant ainsi une durabilité maximale.</li>
          <li><span class="font-semibold">Service personnalisé :</span> Nous créons un plan d'entretien sur mesure adapté à votre type de toiture et à ses besoins spécifiques.</li>
          <li><span class="font-semibold">Transparence totale :</span> Pas de surprises désagréables - nous vous fournissons toujours des devis détaillés et des explications claires.</li>
          <li><span class="font-semibold">Intervention rapide :</span> Nous comprenons l'urgence que peuvent représenter certains problèmes de toiture et nous nous engageons à intervenir promptement.</li>
          <li><span class="font-semibold">Garantie sur nos travaux :</span> Nous avons tellement confiance en notre travail que nous l'accompagnons d'une garantie solide pour votre tranquillité d'esprit.</li>
        </ul>
        En choisissant nos services d'<a href="https://toiturebeloeil.ca//services-de-couvreur/entretien-de-toiture-beloeil/">entretien de toiture</a>, vous investissez dans la longévité et la performance de votre maison. Contactez-nous aujourd'hui pour découvrir comment nous pouvons vous aider à protéger votre investissement immobilier.`}
        imageUrl="/lovable-uploads/88153479-99cf-4c17-a3e1-6a2f286b9c51.png"
      />
      
      <ServiceInfoSection
        title="Besoin d'un entretien de toiture professionnel ? Contactez-nous dès aujourd'hui !"
        paragraphs={[
          "Ne laissez pas votre toiture se détériorer faute d'entretien approprié. Chez Toiture Beloeil, nous sommes prêts à vous offrir des services d'entretien complets qui protégeront votre maison pour les années à venir.",
          "Prenez rendez-vous dès maintenant en nous appelant au +1 450 600 2538. Notre équipe amicale se fera un plaisir de répondre à toutes vos questions et de planifier une visite à votre convenance.",
          "Nous desservons Beloeil et les environs avec des services rapides, professionnels et abordables. Que vous ayez besoin d'une simple inspection, d'un nettoyage complet ou d'un traitement préventif, comptez sur nous pour un travail de qualité supérieure.",
          "N'attendez pas que des problèmes mineurs deviennent des réparations coûteuses. L'entretien préventif est toujours l'option la plus économique à long terme. Contactez les experts de Toiture Beloeil aujourd'hui et assurez la longévité de votre toiture!"
        ]}
      />
      
      <CallToActionBanner 
        text="Demandez votre estimation gratuite pour votre toit dès aujourd'hui !" 
        buttonText="Appelez-nous"
        phoneNumber="+1 450 600 2538"
      />
      
      <ServiceCardsSection />
      
      <MapSection />
    </>
  );
};

export default EntretienToiture;
