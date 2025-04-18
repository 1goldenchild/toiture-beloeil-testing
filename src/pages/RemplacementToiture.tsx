
import React from 'react';
import { Helmet } from "react-helmet";
import { Construction, Wrench, Shield, CheckCircle, Star, ArrowRight } from "lucide-react";
import HeroSection from "@/components/service-pages/HeroSection";
import ServiceInfoSection from "@/components/service-pages/ServiceInfoSection";
import { CallToActionBanner } from "@/components/service-pages/CallToActionBanner";
import ServiceCardsSection from "@/components/service-pages/ServiceCardsSection";
import MapSection from "@/components/service-pages/MapSection";
import Script from "@/components/utils/Script";

const RemplacementToiture = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "remplacement de toiture",
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
    "description": "Service professionnel de remplacement de toiture à Beloeil. Nous offrons des solutions de remplacement pour tous types de toitures: bardeaux d'asphalte, métal et membrane élastomère."
  };

  const services = [
    {
      title: "Remplacement de toiture",
      description: "Remplacez votre toiture vieillissante par une installation neuve et durable adaptée à votre maison.",
      link: "https://toiturebeloeil.ca//services-de-couvreur/remplacement-toiture-Beloeil/",
      icon: Construction,
      imageUrl: "/lovable-uploads/997fad90-d1e7-4451-aeef-f739d9deb6cc.png"
    },
    {
      title: "Réparation de toiture",
      description: "Solutions rapides et efficaces pour tous types de dommages sur votre toiture.",
      link: "https://toiturebeloeil.ca//services-de-couvreur/réparation-toiture-Beloeil/",
      icon: Wrench,
      imageUrl: "/lovable-uploads/6422a796-7357-43f7-bc11-c6844664f8bf.png"
    },
    {
      title: "Entretien de toiture",
      description: "Services d'entretien régulier pour prolonger la durée de vie de votre toiture.",
      link: "https://toiturebeloeil.ca//services-de-couvreur/entretien-toiture-Beloeil/",
      icon: Shield,
      imageUrl: "/lovable-uploads/9b0bb6a5-e524-4b35-a68e-fd963ee0deb9.png"
    },
    {
      title: "Inspection de toiture",
      description: "Évaluation professionnelle de l'état de votre toiture pour prévenir les problèmes.",
      link: "https://toiturebeloeil.ca//services-de-couvreur/inspection-toiture-Beloeil/",
      icon: CheckCircle,
      imageUrl: "/lovable-uploads/88153479-99cf-4c17-a3e1-6a2f286b9c51.png"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Votre spécialiste en remplacement de toiture à Beloeil – +1 450 600 2538</title>
        <meta name="description" content="Votre toit a plus de 20 ans ou présente des signes d'usure ? Nous assurons un remplacement de toiture efficace à Beloeil. Demandez votre soumission gratuite au +1 450 600 2538 !" />
        <link rel="canonical" href="https://toiturebeloeil.ca/services-de-couvreur/remplacement-toiture-Beloeil/" />
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
          title="Remplacement de toiture à Beloeil, QC – Équipe Qualifiée pour Votre Nouvelle Toiture"
          content="Bienvenue chez Toiture Beloeil, l'expert en remplacement de toiture dans la région. Avec des années d'expérience et une équipe qualifiée, nous sommes votre partenaire de confiance pour redonner une seconde vie à votre toit. Nous utilisons des matériaux de première qualité pour garantir la longévité et la durabilité de votre nouvelle toiture. Notre processus de remplacement est efficace, rapide et professionnel, minimisant les désagréments pendant les travaux. Nous nous engageons à offrir un service personnalisé qui répond précisément à vos besoins et à votre budget. Contactez-nous dès aujourd'hui pour obtenir un devis gratuit et sans engagement!"
          imageUrl="/lovable-uploads/ff75c5b5-0f09-4a6f-b3eb-4cfab341c6ac.png"
        />

        <ServiceInfoSection
          title="Les Avantages de Remplacer Votre Toiture à Beloeil"
          paragraphs={[
            "Votre toiture montre des signes de fatigue? Ne tardez pas! Ici à Beloeil, nos hivers rigoureux et nos étés chauds mettent votre toit à rude épreuve. Un remplacement au bon moment peut vous éviter bien des tracas. Imaginez: plus de soucis de fuites pendant les fortes pluies ou de neige qui s'infiltre au mauvais moment! Une nouvelle toiture augmente non seulement la valeur de votre propriété, mais améliore aussi significativement son efficacité énergétique. Vous économiserez sur le chauffage en hiver et la climatisation en été. Sans compter que remplacer votre toiture avant qu'elle ne cède complètement vous évitera des réparations d'urgence coûteuses et des dommages potentiels à la structure de votre maison. C'est un investissement judicieux pour votre tranquillité d'esprit!"
          ]}
          imageUrl="/lovable-uploads/de3bd9b2-758a-4e99-855e-e5b68ab717b7.png"
        />

        <CallToActionBanner
          text="Appelez nos spécialistes en toiture pour un service rapide et fiable !"
          buttonText="Appelez-nous"
          phoneNumber="+1 450 600 2538"
        />

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-roofing-primary mb-8">Refaire votre toiture à Beloeil</h2>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-roofing-primary mb-6">Comparaison des types de toits à choisir pour un remplacement à Beloeil</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Choisir le bon matériau pour votre nouvelle toiture est une décision importante qui influencera la durabilité, l'esthétique et la valeur de votre propriété à Beloeil. Chaque type de toiture présente des avantages spécifiques selon votre budget, le style architectural de votre maison et vos priorités environnementales.
              </p>
              <p>
                Les bardeaux d'asphalte restent le choix le plus courant pour leur excellent rapport qualité-prix, tandis que les toitures métalliques offrent une longévité exceptionnelle malgré un investissement initial plus élevé. Pour les toits plats, la membrane élastomère est inégalée en matière d'étanchéité.
              </p>
              <p>
                Nos experts peuvent vous guider dans cette décision en tenant compte du climat particulier de Beloeil. Un bon choix de matériau peut faire toute la différence entre une toiture qui durera 15 ans et une qui protégera votre maison pendant plus de 50 ans. Avant de faire votre choix final, n'hésitez pas à demander une <a href="https://toiturebeloeil.ca//services-de-couvreur/inspection-de-toiture-beloeil/">inspection de toiture</a> pour évaluer vos besoins spécifiques.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-roofing-primary mb-6">Remplacer une toiture en bardeaux d'asphalte – Économique et performant</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Le bardeau d'asphalte reste le choix numéro un des propriétaires à Beloeil, et pour cause! Ce matériau offre un excellent rapport qualité-prix tout en étant disponible dans une vaste gamme de couleurs et de styles pour s'harmoniser parfaitement avec l'architecture de votre maison.
              </p>
              <p>
                Nos bardeaux d'asphalte premium sont spécialement conçus pour résister aux conditions climatiques québécoises extrêmes. Ils supportent le gel, la neige abondante, les pluies torrentielles et même les vents violents qui peuvent frapper notre région. Avec une durée de vie moyenne de 20 à 30 ans selon la qualité choisie, c'est un investissement judicieux pour votre propriété.
              </p>
              <p>
                L'installation est relativement rapide, ce qui réduit les désagréments pendant les travaux. De plus, si un <a href="https://toiturebeloeil.ca//services-de-couvreur/entretien-de-toiture-beloeil/">entretien de toiture</a> régulier est effectué, vous pouvez prolonger sa durée de vie de plusieurs années. Nos équipes sont formées aux techniques d'installation les plus récentes pour garantir l'étanchéité parfaite de votre nouvelle toiture.
              </p>
            </div>
          </div>
        </section>

        <CallToActionBanner
          text="Contactez-nous pour une consultation gratuite et sans engagement"
          buttonText="Appelez-nous"
          phoneNumber="+1 450 600 2538"
        />

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-roofing-primary mb-6">Remplacement de toiture en métal à Beloeil – Une solution durable et performante</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Les toitures métalliques gagnent en popularité à Beloeil, et ce n'est pas un hasard! Extrêmement durables, elles peuvent protéger votre maison pendant 50 ans ou plus avec un entretien minimal. C'est un investissement initial plus important qui se rentabilise sur le long terme.
              </p>
              <p>
                Ces toitures résistent admirablement aux rigueurs de notre climat québécois: neige, grêle, vents violents et écarts de température extrêmes. Elles sont également plus légères que d'autres matériaux, ce qui réduit la charge sur la structure de votre maison.
              </p>
              <p>
                Un autre avantage considérable est leur efficacité énergétique. En été, elles réfléchissent les rayons du soleil plutôt que de les absorber, réduisant ainsi vos coûts de climatisation. Si votre toiture actuelle présente des problèmes, nous pouvons effectuer une <a href="https://toiturebeloeil.ca//services-de-couvreur/reparation-de-toiture-beloeil/">réparation de toiture</a> temporaire avant de procéder au remplacement complet.
              </p>
              <p>
                L'aspect moderne des toitures métalliques peut également augmenter significativement la valeur de revente de votre propriété. Nos experts peuvent vous proposer différentes options de finition et de couleur pour s'harmoniser parfaitement avec le style architectural de votre maison à Beloeil.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-roofing-primary mb-6">Remplacement de toiture en membrane élastomère – Solution idéale pour les toits plats à Beloeil</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Les toits plats sont particulièrement vulnérables aux intempéries et nécessitent un matériau spécifiquement conçu pour assurer une étanchéité parfaite. La membrane élastomère est la solution par excellence pour remplacer efficacement la toiture de votre toit plat à Beloeil.
              </p>
              <p>
                Cette membrane bicouche offre une résistance exceptionnelle aux rayons UV, aux variations de température extrêmes et aux mouvements structurels du bâtiment. Sa flexibilité lui permet de s'adapter aux dilatations et contractions causées par les changements de température, un avantage crucial dans notre climat québécois.
              </p>
              <p>
                L'installation d'une membrane élastomère requiert un savoir-faire spécifique pour garantir des joints parfaitement étanches. Nos techniciens certifiés maîtrisent les techniques d'application à la torche pour une adhérence optimale. Avec une durée de vie pouvant atteindre 25 à 30 ans et une résistance remarquable aux perforations, c'est un choix judicieux pour votre <a href="https://toiturebeloeil.ca//services-de-couvreur/installation-de-toiture-beloeil/">installation de toiture</a> plate.
              </p>
              <p>
                Nous recommandons également un système de drainage adéquat pour éviter l'accumulation d'eau, prolongeant ainsi la durée de vie de votre nouvelle toiture. Pour un résultat optimal, faites confiance à notre expertise en remplacement de membrane élastomère à Beloeil.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-roofing-primary mb-8">Pourquoi faire appel à Toiture Beloeil pour votre remplacement de toiture?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Choisir <a href="https://toiturebeloeil.ca/">Toiture Beloeil</a> pour le remplacement de votre toiture, c'est opter pour la tranquillité d'esprit et un travail de qualité supérieure. Voici pourquoi nous nous démarquons:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Expertise locale</strong>: Notre équipe connaît parfaitement les défis climatiques spécifiques à Beloeil et adapte ses techniques en conséquence.</li>
                <li><strong>Matériaux premium</strong>: Nous n'utilisons que des matériaux de première qualité, garantis par les meilleurs fabricants de l'industrie.</li>
                <li><strong>Main-d'œuvre qualifiée</strong>: Nos couvreurs sont certifiés, expérimentés et formés aux techniques les plus récentes.</li>
                <li><strong>Travail propre et efficace</strong>: Nous respectons votre propriété et laissons votre terrain impeccable après nos travaux.</li>
                <li><strong>Garanties solides</strong>: Nous offrons des garanties sur la main-d'œuvre et les matériaux pour votre tranquillité d'esprit.</li>
                <li><strong>Transparence totale</strong>: Nos devis sont détaillés et sans surprise, avec des explications claires sur chaque étape du processus.</li>
                <li><strong>Service client exceptionnel</strong>: De la première consultation jusqu'au suivi post-installation, nous restons à votre écoute.</li>
              </ul>
              <p>
                Notre réputation d'excellence dans la région est le fruit d'années de travail minutieux et d'un engagement constant envers la satisfaction de nos clients. Pour un <a href="https://toiturebeloeil.ca//services-de-couvreur/remplacement-de-toiture-beloeil/">remplacement de toiture</a> durable et sans tracas à Beloeil, faites confiance à notre expertise.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-roofing-primary mb-6">Recevez une estimation gratuite pour votre remplacement de toiture</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Prêt à donner un nouveau souffle à votre maison avec une toiture neuve? N'attendez plus! Contactez-nous dès aujourd'hui pour une évaluation précise de vos besoins et un devis détaillé, entièrement gratuit et sans engagement. Notre équipe se déplacera à votre domicile à Beloeil pour examiner votre toiture actuelle et vous proposer les meilleures solutions adaptées à votre situation et à votre budget. Prenez rendez-vous maintenant en appelant le +1 450 600 2538 et franchissez le premier pas vers une maison mieux protégée et plus belle!
              </p>
            </div>
          </div>
        </section>

        <CallToActionBanner
          text="Appelez nos experts dès aujourd'hui"
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

        <MapSection />
      </main>
    </>
  );
};

export default RemplacementToiture;
