
import React from "react";
import { Helmet } from "react-helmet";
import { Shield, Search, CloudRain, FileCheck } from "lucide-react";
import HeroSection from "../components/service-pages/HeroSection";
import ServiceInfoSection from "../components/service-pages/ServiceInfoSection";
import { CallToActionBanner } from "../components/service-pages/CallToActionBanner";
import ServiceCardsSection from "../components/service-pages/ServiceCardsSection";
import MapSection from "../components/service-pages/MapSection";
import InspectionSection from "../components/service-pages/InspectionSection";

const InspectionToiture = () => {
  const preventiveInspection = {
    id: "preventive-inspection",
    title: "Inspection de toiture préventive – Gardez votre toit en parfait état toute l'année",
    content: [
      "Notre service d'inspection préventive est conçu pour les propriétaires conscients qu'un entretien régulier est le meilleur moyen d'éviter les problèmes coûteux. Cette inspection détaillée constitue votre première ligne de défense contre les dégradations progressives qui affectent toutes les toitures.",
      "Lors d'une inspection préventive, nos techniciens évaluent minutieusement chaque composant de votre système de toiture: bardeaux ou autres matériaux de couverture, solins, évents, faîtières, noues, et bien plus encore. Nous vérifions également l'état de vos gouttières et descentes pluviales, éléments essentiels pour évacuer l'eau loin de votre maison.",
      "Cette approche proactive permet d'identifier les signes précurseurs de problèmes potentiels: légères infiltrations, début de mousse ou de lichen, bardeaux qui commencent à se dégrader, etc. En les traitant rapidement, vous évitez qu'ils ne s'aggravent et préservez l'intégrité de votre toiture.",
      `Le coût d'une inspection préventive régulière est minime comparé aux économies réalisées en évitant des <a href="https://toiturebeloeil.ca//services-de-couvreur/remplacement-de-toiture-beloeil/">remplacements prématurés</a> ou des réparations d'urgence. C'est un investissement judicieux pour tout propriétaire soucieux de préserver la valeur de son bien immobilier.`,
      "Nous recommandons généralement ce type d'inspection au moins une fois par an, et plus fréquemment pour les toitures plus anciennes ou situées dans des zones particulièrement exposées aux intempéries."
    ]
  };

  const postStormInspection = {
    id: "post-storm-inspection",
    title: "Inspection après intempéries – Évaluez les impacts des conditions climatiques sur votre toit",
    content: [
      "Après une tempête violente, une chute de grêle, des vents forts ou des accumulations importantes de neige, votre toiture peut avoir subi des dommages invisibles à l'œil nu. Notre service d'inspection post-intempéries vous apporte la tranquillité d'esprit en évaluant précisément l'impact de ces événements sur votre toit.",
      "Nos experts savent exactement où chercher les signes de dommages spécifiques causés par différentes conditions météorologiques. La grêle peut créer des impacts sur vos bardeaux qui compromettent leur étanchéité sans être immédiatement visibles. Les vents violents peuvent soulever partiellement les matériaux de couverture, créant des zones vulnérables aux infiltrations. Les accumulations de neige peuvent exercer un poids excessif et déformer certaines structures.",
      "Agir rapidement après un événement météorologique intense est crucial. Les petits dommages non traités s'aggravent rapidement, surtout si d'autres intempéries surviennent. De plus, la plupart des compagnies d'assurance exigent des déclarations de sinistre dans un délai limité après l'événement.",
      "Notre rapport d'inspection détaillé peut également s'avérer précieux pour vos démarches auprès de votre assureur en cas de réclamation. Il constitue une documentation professionnelle des dommages constatés, facilitant ainsi le traitement de votre dossier.",
      "Ne prenez pas de risques avec l'intégrité de votre maison – après chaque événement climatique important, contactez Toiture Beloeil pour une inspection rapide et complète de votre toiture."
    ]
  };

  const insuranceInspection = {
    id: "insurance-inspection",
    title: "Inspection pour assurance – Vérifiez l'état de votre toit pour une couverture optimale",
    content: [
      "Vous achetez une nouvelle propriété? Vous renouvelez votre police d'assurance habitation? Vous souhaitez contester une réclamation refusée? Notre service d'inspection pour assurance vous fournit une évaluation professionnelle et impartiale de l'état de votre toiture.",
      "Les compagnies d'assurance sont de plus en plus exigeantes concernant l'état des toitures qu'elles acceptent de couvrir. Une toiture vieillissante ou mal entretenue peut entraîner une augmentation significative de vos primes, voire un refus de couverture. Notre rapport d'inspection vous permet de négocier en position de force avec votre assureur en démontrant l'état réel de votre toit.",
      "Pour les acheteurs potentiels d'une propriété, une inspection préalable de la toiture peut éviter de mauvaises surprises et fournir un argument de négociation si des travaux sont nécessaires. Pour les vendeurs, elle rassure les acheteurs et facilite la transaction.",
      "Notre rapport d'inspection pour assurance est particulièrement détaillé. Il inclut une estimation de la durée de vie restante de votre toiture, identifie précisément les défauts existants et recommande les travaux nécessaires pour maintenir votre couverture en bon état.",
      "Ce document professionnel, rédigé par des experts reconnus du secteur, vous donne toutes les cartes en main pour dialoguer efficacement avec votre compagnie d'assurance et obtenir les meilleures conditions possibles."
    ]
  };

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

      <InspectionSection {...preventiveInspection} />
      <InspectionSection {...postStormInspection} />
      <InspectionSection {...insuranceInspection} />

      <ServiceInfoSection
        title="Faites confiance à Toiture Beloeil pour une inspection de toiture fiable à Beloeil"
        paragraphs={[
          "Choisir Toiture Beloeil pour l'inspection de votre toiture, c'est opter pour l'expertise locale et un service client exceptionnel. Voici pourquoi nos clients nous font confiance année après année:",
          "Expertise locale: Notre équipe connaît parfaitement les particularités climatiques de Beloeil et les défis spécifiques qu'elles posent pour les toitures de la région. Cette connaissance approfondie nous permet d'identifier des problèmes que d'autres pourraient manquer.",
          "Techniciens certifiés: Tous nos inspecteurs sont des professionnels expérimentés et certifiés, formés aux dernières techniques d'évaluation et dotés d'un œil expert pour repérer les moindres signes de problèmes.",
          "Équipement de pointe: Nous utilisons des outils modernes, y compris des caméras thermiques qui peuvent détecter les infiltrations d'eau invisibles à l'œil nu, pour garantir une inspection complète et précise.",
          "Honnêteté et transparence: Contrairement à certaines entreprises qui pourraient exagérer les problèmes pour vendre des réparations, nous vous fournissons toujours une évaluation honnête et des recommandations équilibrées. Nous ne suggérons des travaux que s'ils sont vraiment nécessaires.",
          "Rapports détaillés: Vous recevez un rapport complet avec photos, explications claires et recommandations précises - un document précieux pour vos dossiers et pour planifier l'entretien futur de votre toiture.",
          `Services complémentaires: Si des problèmes sont détectés, nous pouvons vous proposer tous les services nécessaires, de l'<a href="https://toiturebeloeil.ca//services-de-couvreur/installation-de-toiture-beloeil/">installation</a> à la réparation, avec la même qualité et le même professionnalisme.`,
          "Avec Toiture Beloeil, vous bénéficiez d'une inspection approfondie qui vous procure une véritable tranquillité d'esprit concernant l'état de votre toiture."
        ]}
        imageUrl="/lovable-uploads/1cb3a89d-d1e4-487d-8561-2c373d1fd34b.png"
      />

      <ServiceInfoSection
        title="Demandez une évaluation de l'état de votre toiture"
        paragraphs={[
          "Ne remettez pas à plus tard l'inspection de votre toiture! Les problèmes non détectés s'aggravent rapidement et peuvent engendrer des réparations bien plus coûteuses à terme. Chez Toiture Beloeil, nous sommes prêts à vous offrir une évaluation professionnelle qui vous procurera tranquillité d'esprit et informations précieuses sur l'état de votre toit.",
          "Prendre rendez-vous est simple et rapide! Appelez-nous au +1 450 600 2538 pour planifier votre inspection à un moment qui vous convient. Notre équipe réactive s'adapte à votre emploi du temps et vous proposera un créneau dans les plus brefs délais.",
          "Vous recevrez un devis clair avant toute intervention, sans frais cachés ni surprises. Après l'inspection, nos techniciens prendront le temps de vous expliquer leurs constatations et de répondre à toutes vos questions.",
          "L'inspection de votre toiture est un petit investissement qui peut vous faire économiser des milliers de dollars en prévenant les dégâts majeurs. N'attendez pas qu'une fuite apparaisse au plafond - contactez les experts de Toiture Beloeil dès aujourd'hui et assurez la protection de votre maison!"
        ]}
      />

      <CallToActionBanner 
        text="Toiture endommagée ? Nos experts interviennent sans délai !"
        buttonText="Contactez-nous"
        phoneNumber="+1 450 600 2538"
      />

      <ServiceCardsSection />
      
      <MapSection />
    </>
  );
};

export default InspectionToiture;
