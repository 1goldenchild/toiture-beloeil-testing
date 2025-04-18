
import React from 'react';
import { Helmet } from "react-helmet";
import { Construction, Wrench, Shield, CheckCircle, Star, ArrowRight } from "lucide-react";
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

  return (
    <>
      <Helmet>
        <title>Installation de toiture en bardeaux, métal & membrane | Beloeil, QC</title>
        <meta name="description" content="Installation de toiture rapide et professionnelle à Beloeil. Profitez d'un service expert et d'une garantie sur nos travaux. Appelez au +1 450 600 2538 pour un devis !" />
        <link rel="canonical" href="https://toiturebeloeil.ca/services-de-couvreur/installation-toiture-Beloeil/" />
        <style type="text/css">
          {`
            a {
              color: #1B9D3E;
              text-decoration: none;
              transition: color 0.3s ease;
            }
            a:hover {
              text-decoration: underline;
            }
          `}
        </style>
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
            "Nous pouvons installer différents types de toitures, chacune avec ses propres avantages. Que vous préfériez un toit traditionnel en bardeaux d'asphalte, un toit en métal moderne ou une membrane élastomère pour votre toit plat, nous avons l'expertise nécessaire pour réaliser une <a href=\"https://toiturebeloeil.ca/services-de-couvreur/installation-toiture-beloeil/\">installation de toiture</a> impeccable qui durera pendant des décennies."
          ]}
          imageUrl="/lovable-uploads/9b0bb6a5-e524-4b35-a68e-fd963ee0deb9.png"
          reverseLayout
        />

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-roofing-primary mb-6">Quel type de toiture choisir ? Explorez vos options pour une installation réussie</h3>
            <div className="space-y-4 text-gray-700">
              <p>Le choix du matériau de toiture est crucial pour assurer la longévité et la performance de votre toit. À Beloeil, où les conditions météorologiques peuvent être rigoureuses, il est essentiel de choisir un matériau adapté à notre climat québécois. Nos experts vous guideront dans la sélection du meilleur type de toiture en fonction de vos besoins, de votre budget et de l'architecture de votre maison. Nous prendrons le temps de vous expliquer les avantages et les inconvénients de chaque option pour que vous puissiez prendre une décision éclairée. Votre satisfaction est notre priorité, et nous nous engageons à vous offrir un service personnalisé de la première consultation jusqu'à l'<a href="https://toiturebeloeil.ca/services-de-couvreur/inspection-toiture-Beloeil/">inspection de toiture</a> finale.</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-roofing-primary mb-6">Installation de toiture en bardeaux d'asphalte – Un choix fiable et économique</h3>
            <div className="space-y-4 text-gray-700">
              <p>Les bardeaux d'asphalte demeurent le choix le plus populaire pour les toitures résidentielles à Beloeil, et pour cause. Ce matériau offre un excellent rapport qualité-prix tout en étant disponible dans une vaste gamme de couleurs et de styles pour s'harmoniser avec l'esthétique de votre maison. Nos professionnels sont spécialisés dans l'installation de bardeaux d'asphalte de haute qualité qui résistent aux intempéries québécoises, incluant le vent, la pluie, la neige et les variations de température extrêmes. La durée de vie moyenne d'un toit en bardeaux d'asphalte bien installé est de 15 à 25 ans, ce qui en fait un investissement judicieux pour votre propriété. Pour maintenir votre toiture en parfait état, n'oubliez pas de planifier un <a href="https://toiturebeloeil.ca/services-de-couvreur/entretien-toiture-Beloeil/">entretien de toiture</a> régulier.</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-roofing-primary mb-6">Toiture en métal à Beloeil – Une solution résistante et moderne</h3>
            <div className="space-y-4 text-gray-700">
              <p>Les toitures métalliques gagnent en popularité à Beloeil en raison de leur durabilité exceptionnelle et de leur aspect moderne. Un toit en métal peut durer jusqu'à 50 ans ou plus avec un entretien minimal, résistant aux conditions climatiques rigoureuses du Québec. Ces toitures sont également écologiques, car elles sont souvent fabriquées à partir de matériaux recyclés et sont entièrement recyclables à la fin de leur vie utile. De plus, les toits métalliques offrent une excellente réflectivité solaire, ce qui contribue à réduire vos coûts de climatisation en été. Chez Toiture Beloeil, nous installons des toitures en métal de haute qualité avec une précision méticuleuse pour assurer leur performance optimale. Si votre toit existant présente des problèmes, nous pouvons également effectuer une <a href="https://toiturebeloeil.ca/services-de-couvreur/réparation-toiture-Beloeil/">réparation de toiture</a> professionnelle.</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-roofing-primary mb-6">Installation de membrane élastomère – Étanchéité et longévité pour votre toit plat</h3>
            <div className="space-y-4 text-gray-700">
              <p>Pour les propriétaires de maisons ou d'immeubles commerciaux à Beloeil avec des toits plats, la membrane élastomère est la solution idéale. Ce matériau offre une étanchéité exceptionnelle et une résistance remarquable aux rayons UV, aux fluctuations de température et aux mouvements structurels. Nos spécialistes en installation de membrane élastomère utilisent des techniques avancées pour assurer une adhérence parfaite et des joints étanches, éliminant tout risque d'infiltration d'eau. La membrane élastomère peut durer jusqu'à 25-30 ans et nécessite peu d'entretien, ce qui en fait un excellent choix pour les toits plats. Si vous envisagez de remplacer votre ancien toit plat, nous vous recommandons de consulter nos services de <a href="https://toiturebeloeil.ca/services-de-couvreur/remplacement-toiture-Beloeil/">remplacement de toiture</a> spécialisés.</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-roofing-primary mb-8">Pourquoi faire confiance à Toiture Beloeil pour votre installation de toiture à Beloeil ?</h2>
            <div className="space-y-4 text-gray-700">
              <p>Toiture Beloeil se distingue par son engagement envers l'excellence et la satisfaction client. Notre entreprise locale comprend les défis spécifiques que présentent les toitures dans notre région et nous adaptons nos services en conséquence. Voici pourquoi nous sommes le choix privilégié des résidents de Beloeil :</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Expertise locale</strong> : Notre équipe connaît parfaitement les conditions climatiques de Beloeil et les exigences du code du bâtiment local.</li>
                <li><strong>Matériaux de qualité supérieure</strong> : Nous utilisons uniquement des matériaux certifiés et performants pour garantir la durabilité de votre toiture.</li>
                <li><strong>Main-d'œuvre qualifiée</strong> : Nos couvreurs sont formés, expérimentés et soucieux du détail pour une installation impeccable.</li>
                <li><strong>Garanties solides</strong> : Nous offrons des garanties sur la main-d'œuvre et les matériaux pour votre tranquillité d'esprit.</li>
                <li><strong>Service personnalisé</strong> : De la première consultation jusqu'à l'inspection finale, nous vous accompagnons à chaque étape de votre projet.</li>
                <li><strong>Prix compétitifs</strong> : Nous proposons des tarifs justes et transparents sans compromettre la qualité.</li>
              </ul>
              <p>En choisissant <a href="https://toiturebeloeil.ca/">Toiture Beloeil</a>, vous investissez dans une toiture de qualité qui protégera votre maison pendant de nombreuses années.</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-roofing-primary mb-6">Installation de toiture : recevez votre devis gratuit rapidement !</h2>
            <div className="space-y-4 text-gray-700">
              <p>Prêt à démarrer votre projet d'installation de toiture à Beloeil ? Nous vous invitons à nous contacter dès aujourd'hui pour discuter de vos besoins et obtenir une estimation gratuite et sans engagement. Notre équipe se fera un plaisir de répondre à toutes vos questions, de vous présenter les différentes options disponibles et de vous fournir des conseils professionnels pour vous aider à faire le meilleur choix. Que ce soit pour une nouvelle construction ou pour remplacer une toiture existante, Toiture Beloeil est votre partenaire de confiance pour une installation de qualité qui respecte votre budget et vos délais.</p>
            </div>
          </div>
        </section>

        {/* Service Cards Section */}
        <ServiceCardsSection />

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
