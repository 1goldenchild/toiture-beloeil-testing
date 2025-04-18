
import React from 'react';
import { Helmet } from "react-helmet";
import { Construction, Tools, Shield, CheckCircle, Star } from "lucide-react";
import HeroSection from "@/components/service-pages/HeroSection";
import ServiceInfoSection from "@/components/service-pages/ServiceInfoSection";
import { CallToActionBanner } from "@/components/service-pages/CallToActionBanner";
import ServiceCardsSection from "@/components/service-pages/ServiceCardsSection";
import MapSection from "@/components/service-pages/MapSection";
import Script from "@/components/utils/Script";

const InstallationToiture = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "installation de toiture",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Toiture Beloeil",
      "telephone": "+1 450 600 2538",
      "url": "https://toiturebeloeil.ca/",
      "email": "support@toiturebeloeil.ca",
      "openingHours": "Mo-Fr 07:00-17:00 Sa 08:00-12:00",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "861 Rue Radisson",
        "addressLocality": "Beloeil",
        "postalCode": "J3G 4V9",
        "addressRegion": "Quebec",
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
    "description": "Installation de toiture professionnelle à Beloeil, QC. Services d'experts pour tous types de toitures: bardeaux d'asphalte, métal et membrane élastomère."
  };

  const services = [
    {
      title: "Remplacement de toiture",
      description: "Remplacez votre vieille toiture par une neuve avec notre service professionnel et durable.",
      link: "https://toiturebeloeil.ca//services-de-couvreur/remplacement-toiture-Beloeil/",
      icon: Construction,
      imageUrl: "/lovable-uploads/6422a796-7357-43f7-bc11-c6844664f8bf.png"
    },
    {
      title: "Réparation de toiture",
      description: "Solutions rapides et efficaces pour tous types de dommages sur votre toiture.",
      link: "https://toiturebeloeil.ca//services-de-couvreur/réparation-toiture-Beloeil/",
      icon: Tools,
      imageUrl: "/lovable-uploads/9b0bb6a5-e524-4b35-a68e-fd963ee0deb9.png"
    },
    {
      title: "Entretien de toiture",
      description: "Maintenez votre toit en parfait état avec nos services d'entretien préventif.",
      link: "https://toiturebeloeil.ca//services-de-couvreur/entretien-toiture-Beloeil/",
      icon: Shield,
      imageUrl: "/lovable-uploads/de3bd9b2-758a-4e99-855e-e5b68ab717b7.png"
    },
    {
      title: "Inspection de toiture",
      description: "Évaluation complète de l'état de votre toiture par nos experts qualifiés.",
      link: "https://toiturebeloeil.ca//services-de-couvreur/inspection-toiture-Beloeil/",
      icon: CheckCircle,
      imageUrl: "/lovable-uploads/ff75c5b5-0f09-4a6f-b3eb-4cfab341c6ac.png"
    },
    {
      title: "Installation de toiture",
      description: "Installation professionnelle de toiture neuve avec des matériaux de qualité supérieure.",
      link: "https://toiturebeloeil.ca//services-de-couvreur/installation-toiture-Beloeil/",
      icon: Star,
      imageUrl: "/lovable-uploads/997fad90-d1e7-4451-aeef-f739d9deb6cc.png"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Installation de toiture en bardeaux, métal & membrane | Beloeil, QC</title>
        <meta name="description" content="Installation de toiture rapide et professionnelle à Beloeil. Profitez d'un service expert et d'une garantie sur nos travaux. Appelez au +1 450 600 2538 pour un devis !" />
        <link rel="canonical" href="https://toiturebeloeil.ca/services-de-couvreur/installation-toiture-Beloeil/" />
      </Helmet>

      <Script type="application/ld+json">{JSON.stringify(schema)}</Script>

      <main className="min-h-screen">
        <HeroSection
          title="Installation de toiture à Beloeil, QC – Des experts à votre service pour un toit robuste et élégant"
          content="Vous cherchez des experts pour l'installation de votre nouvelle toiture à Beloeil? Toiture Beloeil est votre partenaire de confiance pour tous vos projets de toiture. Notre équipe de professionnels qualifiés possède l'expertise nécessaire pour installer efficacement tout type de toiture. Que vous construisiez une nouvelle maison ou que vous remplaciez une toiture existante, nous vous garantissons un travail de qualité supérieure et une finition impeccable qui protégera votre maison pour les années à venir."
          imageUrl="/lovable-uploads/997fad90-d1e7-4451-aeef-f739d9deb6cc.png"
        />

        <ServiceInfoSection
          title="Nouvelle toiture à Beloeil – Des solutions adaptées à vos besoins !"
          paragraphs={[
            "Chez Toiture Beloeil, nous comprenons l'importance d'une toiture bien installée pour protéger votre maison et votre famille. Une installation professionnelle permet non seulement d'éviter les fuites et les dommages causés par l'eau, mais aussi d'améliorer l'efficacité énergétique de votre maison.",
            "Nos couvreurs expérimentés utilisent des matériaux de première qualité et suivent les meilleures pratiques de l'industrie pour assurer la durabilité et la performance de votre nouvelle toiture. Nous offrons des solutions personnalisées qui correspondent à votre style architectural et à votre budget, tout en respectant les normes de construction locales à Beloeil."
          ]}
          imageUrl="/lovable-uploads/6422a796-7357-43f7-bc11-c6844664f8bf.png"
        />

        <CallToActionBanner
          text="Appelez nos spécialistes en toiture pour un service rapide et fiable !"
          buttonText="Appelez-nous"
          phoneNumber="+1 450 600 2538"
        />

        <ServiceInfoSection
          title="Installation de toiture à Beloeil – Solution sur mesure pour votre toit"
          paragraphs={[
            "Chez Toiture Beloeil, nous offrons une gamme complète de services d'installation de toiture adaptés aux besoins spécifiques des résidents de Beloeil. Notre équipe d'experts analyse votre situation, évalue la structure de votre maison et vous propose la solution la plus appropriée.",
            "Nous pouvons installer différents types de toitures, chacune avec ses propres avantages. Que vous préfériez un toit traditionnel en bardeaux d'asphalte, un toit en métal moderne ou une membrane élastomère pour votre toit plat, nous avons l'expertise nécessaire pour réaliser une installation de toiture impeccable qui durera pendant des décennies."
          ]}
          imageUrl="/lovable-uploads/9b0bb6a5-e524-4b35-a68e-fd963ee0deb9.png"
          reverseLayout
        />

        <ServiceCardsSection services={services} />

        <CallToActionBanner
          text="Faites réparer ou installer votre toiture par des pros – Appelez-nous maintenant !"
          buttonText="Appelez-nous"
          phoneNumber="+1 450 600 2538"
        />

        <MapSection />
      </main>
    </>
  );
};

export default InstallationToiture;
