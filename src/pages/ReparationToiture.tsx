import React from 'react';
import { Helmet } from "react-helmet";
import { Construction, Wrench, Shield, CheckCircle, Star } from "lucide-react";
import HeroSection from "@/components/service-pages/HeroSection";
import ServiceInfoSection from "@/components/service-pages/ServiceInfoSection";
import { CallToActionBanner } from "@/components/service-pages/CallToActionBanner";
import ServiceCardsSection from "@/components/service-pages/ServiceCardsSection";
import MapSection from "@/components/service-pages/MapSection";
import Script from "@/components/utils/Script";

const ReparationToiture = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "réparation de toiture",
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
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 45.4495898,
        "longitude": -73.210129
      },
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
          "closes": "00:00",
          "opens": "00:00"
        }
      ]
    },
    "areaServed": {
      "@type": "City",
      "name": "Beloeil"
    },
    "description": "Service professionnel de réparation de toiture à Beloeil offrant des solutions rapides et durables pour tous types de dommages: fuites, bardeaux endommagés, problèmes de membrane élastomère et réparations de toiture en métal."
  };

  const services = [
    {
      title: "Remplacement de toiture",
      description: "Remplacez votre toiture vieillissante pour une protection optimale et une valeur ajoutée à votre propriété.",
      link: "/services-de-couvreur/remplacement-toiture-Beloeil/",
      icon: Construction,
      imageUrl: "/lovable-uploads/997fad90-d1e7-4451-aeef-f739d9deb6cc.png"
    },
    {
      title: "Réparation de toiture",
      description: "Solutions rapides et efficaces pour tous types de dommages sur votre toit à Beloeil.",
      link: "/services-de-couvreur/réparation-toiture-Beloeil/",
      icon: Wrench,
      imageUrl: "/lovable-uploads/6422a796-7357-43f7-bc11-c6844664f8bf.png"
    },
    {
      title: "Entretien de toiture",
      description: "Prolongez la durée de vie de votre toiture grâce à un entretien préventif régulier.",
      link: "/services-de-couvreur/entretien-toiture-Beloeil/",
      icon: Shield,
      imageUrl: "/lovable-uploads/9b0bb6a5-e524-4b35-a68e-fd963ee0deb9.png"
    },
    {
      title: "Inspection de toiture",
      description: "Détection précoce des problèmes potentiels pour éviter les réparations coûteuses.",
      link: "/services-de-couvreur/inspection-toiture-Beloeil/",
      icon: CheckCircle,
      imageUrl: "/lovable-uploads/88153479-99cf-4c17-a3e1-6a2f286b9c51.png"
    },
    {
      title: "Installation de toiture",
      description: "Installation professionnelle de toitures neuves avec des matériaux de qualité supérieure.",
      link: "/services-de-couvreur/installation-toiture-Beloeil/",
      icon: Star,
      imageUrl: "/lovable-uploads/de3bd9b2-758a-4e99-855e-e5b68ab717b7.png"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Réparation de toiture | Urgence toiture Beloeil ? Contactez nos experts au +1 450 600 2538</title>
        <meta name="description" content="Toiture endommagée ou infiltration d'eau ? Faites appel à nos couvreurs qualifiés à Beloeil. Devis gratuit au +1 450 600 2538 !" />
        <link rel="canonical" href="https://toiturebeloeil.ca/services-de-couvreur/réparation-toiture-Beloeil/" />
      </Helmet>

      <Script type="application/ld+json">{JSON.stringify(schema)}</Script>

      <main className="min-h-screen">
        <HeroSection
          title="Fuites, bardeaux endommagés ? Réparation de toiture rapide à Beloeil"
          content="Votre toiture est endommagée et vous craignez des infiltrations d'eau ? Ne laissez pas un petit problème se transformer en catastrophe coûteuse ! Chez Toiture Beloeil, nos experts interviennent rapidement pour réparer tous types de dommages sur votre toit. Avec notre équipe de couvreurs expérimentés et nos méthodes éprouvées, nous garantissons des réparations durables pour protéger votre maison contre les éléments. Faites confiance à des professionnels locaux qui connaissent les défis spécifiques des toitures à Beloeil !"
          imageUrl="/lovable-uploads/6422a796-7357-43f7-bc11-c6844664f8bf.png"
        />

        <ServiceInfoSection
          title="Réparer votre toiture à Beloeil immédiatement : les avantages"
          paragraphs={[
            "Réparer rapidement votre toiture n'est pas seulement une question de confort, c'est un investissement judicieux ! Une petite fuite aujourd'hui peut causer des dégâts majeurs demain. L'eau qui s'infiltre peut endommager l'isolation, créer des moisissures dangereuses pour la santé et même compromettre la structure de votre maison.",
            "En agissant vite, vous évitez ces problèmes coûteux. De plus, nos réparations rapides prolongent la durée de vie de votre toiture, vous évitant un remplacement complet prématuré. Sans oublier que les dommages visibles comme les bardeaux manquants nuisent à l'apparence et à la valeur de votre propriété.",
            "Ne prenez pas de risques avec les intempéries du Québec ! Qu'il s'agisse de pluies abondantes, de neige ou de vents violents, une toiture en bon état est votre meilleure protection. Contactez Toiture Beloeil dès aujourd'hui pour une inspection gratuite et dormir tranquille !"
          ]}
          imageUrl="/lovable-uploads/6422a796-7357-43f7-bc11-c6844664f8bf.png"
        />

        <CallToActionBanner
          text="Problème de toiture ? Nous intervenons rapidement !"
          buttonText="Appelez-nous"
          phoneNumber="+1 450 600 2538"
        />

        <ServiceInfoSection
          title="Fuites de toit ? Nos couvreurs réparent rapidement pour votre tranquillité"
          paragraphs={[
            "Une goutte d'eau qui tombe du plafond est toujours un signe alarmant ! Nos experts en réparation de toiture à Beloeil maîtrisent parfaitement la détection et la réparation des fuites. Nous utilisons des équipements spécialisés pour localiser précisément l'origine de l'infiltration, même lorsqu'elle n'est pas évidente.",
            "Contrairement aux idées reçues, l'eau peut voyager loin de son point d'entrée avant de devenir visible. C'est pourquoi notre méthode de diagnostic approfondi est essentielle. Une fois la source identifiée, nous procédons à une réparation ciblée et efficace en remplaçant les matériaux endommagés, en réparant les solins défectueux ou en colmatant les fissures.",
            `N'attendez pas que votre problème de fuite s'aggrave ! Pour une <a href="https://toiturebeloeil.ca/services-de-couvreur/inspection-toiture-Beloeil/" class="text-roofing-primary hover:underline">inspection de toiture</a> complète et une réparation professionnelle, appelez Toiture Beloeil au +1 450 600 2538.`
          ]}
        />

        <ServiceInfoSection
          title="Bardeaux abîmés ou manquants ? Nos spécialistes sont là pour les remplacer !"
          paragraphs={[
            "Les bardeaux endommagés ou manquants sont plus qu'un simple problème esthétique. Ils exposent votre toit aux éléments et compromettent l'étanchéité de toute votre toiture. Chez Toiture Beloeil, nous offrons un service rapide et efficace pour remplacer ces bardeaux défectueux.",
            "Nos couvreurs expérimentés évaluent d'abord l'étendue des dommages. Si seulement quelques bardeaux sont touchés, un remplacement partiel peut suffire. Cependant, si les dommages sont étendus, nous pourrions vous recommander un <a href='https://toiturebeloeil.ca/services-de-couvreur/remplacement-toiture-Beloeil/' class='text-roofing-primary hover:underline'>remplacement de toiture</a> complet pour une solution plus durable.",
            "Nous veillons toujours à assortir parfaitement les nouveaux bardeaux avec votre toiture existante. Notre équipe utilise des matériaux de première qualité et des techniques d'installation éprouvées pour garantir une réparation qui résistera à l'épreuve du temps. Contactez-nous pour une évaluation honnête de vos besoins en réparation de bardeaux !"
          ]}
        />

        <ServiceInfoSection
          title="Réparation de toiture métallique – Pour un travail fiable et professionnel"
          paragraphs={[
            "Les toitures métalliques sont réputées pour leur durabilité, mais elles ne sont pas à l'abri des dommages. Qu'il s'agisse de rayures profondes dans le revêtement protecteur, de joints défectueux ou de panneaux déformés par les intempéries, notre équipe possède l'expertise nécessaire pour restaurer l'intégrité de votre toit en métal.",
            "La réparation d'une toiture métallique demande des compétences spécifiques et une attention aux détails que nos artisans maîtrisent parfaitement. Nous utilisons des techniques de soudure avancées, des fixations spécialisées et des matériaux compatibles avec votre système de toiture existant.",
            `Si vous remarquez des signes d'oxydation, des zones décolorées ou des bruits inhabituels lors de changements de température, contactez-nous rapidement. Un <a href="https://toiturebeloeil.ca/services-de-couvreur/entretien-toiture-Beloeil/" class="text-roofing-primary hover:underline">entretien de toiture</a> régulier peut prévenir ces problèmes, mais lorsqu'ils surviennent, une réparation professionnelle est essentielle pour préserver votre investissement.`
          ]}
          reverseLayout={true}
        />

        <ServiceInfoSection
          title="Membrane élastomère endommagée ? Contactez nos experts !"
          paragraphs={[
            "La membrane élastomère est idéale pour les toits plats, mais elle peut subir des dommages avec le temps. Craquelures, déchirures ou décollements peuvent compromettre son étanchéité et mener à des problèmes d'infiltration sérieux. À Toiture Beloeil, nous sommes spécialistes dans la réparation de ces membranes techniques.",
            "Notre processus commence par une inspection minutieuse pour identifier tous les points faibles. Ensuite, nous préparons soigneusement la surface avant d'appliquer les correctifs nécessaires. Selon l'ampleur des dommages, nous pouvons réparer des sections spécifiques ou recommander une réfection complète si la membrane a atteint sa fin de vie utile.",
            `La qualité de nos réparations de membrane élastomère est garantie grâce à l'utilisation de matériaux premium et d'une technique d'application rigoureuse. Pour une <a href="https://toiturebeloeil.ca/services-de-couvreur/installation-toiture-Beloeil/" class="text-roofing-primary hover:underline">installation de toiture</a> neuve ou une réparation durable, faites confiance à notre expertise locale. Contactez-nous au +1 450 600 2538 pour une évaluation professionnelle !`
          ]}
        />

        <CallToActionBanner
          text="Appelez nos spécialistes en toiture pour un service rapide et fiable !"
          buttonText="Appelez-nous"
          phoneNumber="+1 450 600 2538"
        />

        <ServiceInfoSection
          title="Pourquoi confier la réparation de votre toiture à Toiture Beloeil ?"
          paragraphs={[
            `Choisir Toiture Beloeil pour réparer votre toiture, c'est opter pour la tranquillité d'esprit et un travail bien fait. Notre entreprise locale se distingue par plusieurs avantages majeurs :`,
            "Premièrement, notre équipe est composée de couvreurs certifiés avec plus de 15 ans d'expérience dans la réparation de tous types de toitures à Beloeil et ses environs. Cette expertise nous permet de diagnostiquer rapidement les problèmes et d'appliquer les solutions les plus efficaces.",
            "Deuxièmement, nous utilisons exclusivement des matériaux de haute qualité, sélectionnés pour leur durabilité face aux conditions climatiques québécoises rigoureuses. Cette attention aux détails garantit des réparations qui durent dans le temps.",
            "Troisièmement, nous offrons une garantie sur notre travail, parce que nous avons confiance en la qualité de nos services. Notre réputation dans la communauté de Beloeil est bâtie sur la satisfaction de nos clients et le bouche-à-oreille positif.",
            `Enfin, nous proposons des tarifs transparents et compétitifs, sans frais cachés. Notre estimation gratuite vous permet de connaître exactement le coût des travaux avant de vous engager. Pour une réparation professionnelle qui respecte votre budget, faites confiance à <a href="https://toiturebeloeil.ca/">Toiture Beloeil</a>.`
          ]}
        />

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-roofing-primary mb-6">Votre toit nécessite une réparation urgente ? Contactez-nous dès aujourd'hui pour une intervention rapide</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Ne laissez pas un problème de toiture s'aggraver ! Chez Toiture Beloeil, nous comprenons l'urgence d'une toiture endommagée et proposons des interventions rapides pour protéger votre maison. Notre équipe de professionnels est prête à répondre à votre appel et à vous offrir une solution adaptée à vos besoins spécifiques.
              </p>
              <p>
                Pour une estimation gratuite ou pour planifier une inspection, contactez-nous au +1 450 600 2538. Nos experts sont disponibles du lundi au vendredi de 07h00 à 17h00 et le samedi de 08h00 à 12h00. Faites confiance à notre équipe locale pour des réparations de qualité qui redonnent à votre toiture sa pleine fonctionnalité et sa beauté d'origine !
              </p>
            </div>
          </div>
        </section>

        <CallToActionBanner
          text="Appelez-nous maintenant pour une inspection gratuite"
          buttonText="Appelez-nous"
          phoneNumber="+1 450 600 2538"
        />

        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-roofing-primary mb-12">Nos services de toiture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <a 
                  key={index} 
                  href={service.link}
                  className="block h-full transition-transform hover:-translate-y-1"
                >
                  <div className="h-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.imageUrl} 
                        alt={`Service de ${service.title}`} 
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3 text-roofing-primary">
                        <service.icon size={24} />
                        <h4 className="text-xl font-bold">{service.title}</h4>
                      </div>
                      <p className="text-gray-700">{service.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <CallToActionBanner
          text="Faites réparer ou installer votre toiture par des pros – Appelez-nous maintenant !"
          buttonText="Contactez-nous"
          phoneNumber="+1 450 600 2538"
        />

        <MapSection />
      </main>
    </>
  );
};

export default ReparationToiture;
