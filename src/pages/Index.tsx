import { Helmet } from "react-helmet";
import { HomeIcon, Wrench, Construction, Search, Hammer, Wrench as MaintenanceTool } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ServiceSection from "@/components/ServiceSection";
import CallToActionBanner from "@/components/CallToActionBanner";
import FAQItem from "@/components/FAQItem";
import ServiceArea from "@/components/ServiceArea";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  const serviceAreas = [
    "Mont-Saint-Hilaire", "McMasterville", "Saint-Mathieu-de-Beloeil", 
    "Otterburn Park", "Saint-Charles-sur-Richelieu", "Saint-Marc-sur-Richelieu", 
    "Saint-Denis-sur-Richelieu", "Saint-Jean-Baptiste", "Saint-Basile-le-Grand", 
    "Saint-Bruno-de-Montarville"
  ];

  return (
    <>
      <Helmet>
        <title>Toiture Beloeil - Couvreur Beloeil - +1 450 600 2538</title>
        <meta name="description" content="Toiture Beloeil – Votre couvreur expert en toiture à Beloeil, QC. Réparation, installation et entretien de toiture. Appelez-nous dès maintenant au +1 450 600 2538 !" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://toiturebeloeil.ca/",
            "name": "Toiture Beloeil",
            "description": "Toiture Beloeil – Votre couvreur expert en toiture à Beloeil, QC. Réparation, installation et entretien de toiture.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://toiturebeloeil.ca/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Toiture Beloeil",
            "image": "https://toiturebeloeil.ca/lovable-uploads/8e9c73e7-e681-4925-9f3a-7c4376a86bbc.png",
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
            "url": "https://toiturebeloeil.ca/",
            "telephone": "+1 450 600 2538",
            "email": "support@toiturebeloeil.ca",
            "priceRange": "$$",
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
            "sameAs": [
              "https://facebook.com/toiturebeloeil"
            ]
          })}
        </script>
      </Helmet>

      <main className="min-h-screen overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Services Introduction */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-roofing-primary mb-6">
              Nos services de toiture à Beloeil – Des solutions sur mesure pour votre toit
            </h2>
            <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto mb-12">
              Que vous cherchiez à <a href="https://toiturebeloeil.ca/services-de-couvreur/réparation-toiture-Beloeil/" className="text-roofing-accent hover:underline">réparer un toit endommagé</a>, à <a href="https://toiturebeloeil.ca/services-de-couvreur/remplacement-toiture-Beloeil/" className="text-roofing-accent hover:underline">remplacer une toiture vieillissante</a> ou à faire <a href="https://toiturebeloeil.ca/services-de-couvreur/inspection-toiture-Beloeil/" className="text-roofing-accent hover:underline">inspecter votre couverture</a> avant l'hiver, chez Toiture Beloeil nous avons la solution qu'il vous faut. Nos services complets couvrent tous les aspects de l'entretien et de la rénovation de votre toit, avec une attention particulière portée à la qualité et à la durabilité. Découvrez comment notre équipe expérimentée peut vous aider à protéger votre investissement immobilier avec des solutions de toiture fiables et performantes.
            </p>
          </div>
        </section>

        {/* CTA Banner */}
        <CallToActionBanner 
          text="Appelez nos spécialistes en toiture pour un service rapide et fiable !" 
          buttonText="Appelez-nous"
        />

        {/* Services Cards */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <ServiceCard 
                title="Remplacement de toiture"
                description="Remplacez votre ancienne toiture par une installation durable et moderne."
                icon={Construction}
                link="https://toiturebeloeil.ca/services-de-couvreur/remplacement-toiture-Beloeil/"
                imageUrl="/lovable-uploads/8e9c73e7-e681-4925-9f3a-7c4376a86bbc.png"
              />
              <ServiceCard 
                title="Réparation de toiture"
                description="Solutions rapides et efficaces pour tous types de dommages sur votre toit."
                icon={Wrench}
                link="https://toiturebeloeil.ca/services-de-couvreur/réparation-toiture-Beloeil/"
                imageUrl="/lovable-uploads/1cb3a89d-d1e4-487d-8561-2c373d1fd34b.png"
              />
              <ServiceCard 
                title="Entretien de toiture"
                description="Prolongez la durée de vie de votre toiture avec un entretien régulier."
                icon={MaintenanceTool}
                link="https://toiturebeloeil.ca/services-de-couvreur/entretien-toiture-Beloeil/"
                imageUrl="/lovable-uploads/88153479-99cf-4c17-a3e1-6a2f286b9c51.png"
              />
              <ServiceCard 
                title="Inspection de toiture"
                description="Diagnostic complet pour identifier les problèmes avant qu'ils ne s'aggravent."
                icon={Search}
                link="https://toiturebeloeil.ca/services-de-couvreur/inspection-toiture-Beloeil/"
                imageUrl="/lovable-uploads/a9b2e5d7-2d6e-4df6-bc57-89fdff438045.png"
              />
              <ServiceCard 
                title="Installation de toiture"
                description="Installation professionnelle pour une toiture neuve qui résiste au temps."
                icon={Hammer}
                link="https://toiturebeloeil.ca/services-de-couvreur/installation-toiture-Beloeil/"
                imageUrl="/lovable-uploads/69230fa7-790c-4a3c-bd7a-047c501a387e.png"
              />
            </div>
          </div>
        </section>

        {/* Service Descriptions */}
        <ServiceSection 
          title="Remplacement de toiture à Beloeil – Des experts à votre service"
          content={[
            "Votre toiture montre des signes de vieillissement ou de détérioration avancée? Notre service de remplacement de toiture vous offre une solution complète et durable. Chez Toiture Beloeil, nous utilisons exclusivement des matériaux de première qualité, sélectionnés pour leur résistance aux conditions climatiques québécoises et leur longévité exceptionnelle.",
            "Nos équipes spécialisées travaillent avec précision et méthode pour assurer une installation parfaite, en respectant les délais et votre budget. Du retrait de l'ancienne toiture jusqu'à la pose minutieuse des nouveaux matériaux, chaque étape est réalisée selon les plus hauts standards de l'industrie.",
            "Que vous optiez pour des bardeaux d'asphalte traditionnels, un toit en métal moderne ou d'autres solutions avancées, nous vous accompagnons dans le choix de la meilleure option pour votre maison. Un remplacement de toiture bien exécuté représente non seulement une protection renforcée pour votre domicile, mais aussi une valorisation considérable de votre propriété."
          ]}
          ctaText="Un projet de toiture ? Appelez-nous pour un devis offert !"
          imageUrl="/lovable-uploads/8e9c73e7-e681-4925-9f3a-7c4376a86bbc.png"
        />

        <ServiceSection 
          title="Besoin d'une réparation de toiture à Beloeil?"
          content={[
            "Une fuite subite, des bardeaux manquants après une tempête, ou des signes d'infiltration d'eau? N'attendez pas que les dommages s'aggravent! Chez Toiture Beloeil, nous comprenons l'urgence des réparations de toiture et intervenons rapidement pour diagnostiquer et résoudre efficacement tout problème.",
            "Notre équipe de réparation est formée pour détecter les sources de fuites même les plus discrètes et y remédier définitivement. Qu'il s'agisse de réparer des zones endommagées par les intempéries, de remplacer des solins défectueux ou de colmater des fissures, nous disposons de l'expertise nécessaire pour redonner à votre toiture son intégrité.",
            "Agir promptement face aux premiers signes de détérioration peut vous épargner des milliers de dollars en dommages structurels. Une simple réparation aujourd'hui peut éviter un remplacement complet demain. Contactez-nous dès les premiers signes de problème pour une intervention professionnelle qui prolongera significativement la durée de vie de votre toiture."
          ]}
          ctaText="Appelez-nous dès maintenant pour un devis gratuit"
          reverse={true}
          imageUrl="/lovable-uploads/1cb3a89d-d1e4-487d-8561-2c373d1fd34b.png"
        />

        <ServiceSection 
          title="Installation de toiture à Beloeil – Faites confiance à nos experts"
          content={[
            "Construire une nouvelle maison ou remplacer entièrement votre toiture? Notre service d'installation de toiture vous garantit un travail exemplaire, réalisé dans les règles de l'art. Chez Toiture Beloeil, nous proposons une large gamme de matériaux adaptés à tous les styles architecturaux et à tous les budgets.",
            "Les bardeaux d'asphalte offrent un excellent rapport qualité-prix et une grande variété de styles et de couleurs. Pour une durabilité supérieure, nos toitures métalliques constituent un investissement judicieux, résistant aux conditions météorologiques extrêmes pendant des décennies. Nous installons également des solutions écologiques comme les toits verts ou les systèmes à haute efficacité énergétique.",
            "Chaque installation commence par une évaluation précise de vos besoins et une préparation minutieuse du chantier. Nos couvreurs certifiés suivent un processus rigoureux pour assurer l'étanchéité parfaite de votre toit et sa conformité aux normes de construction locales. Faites confiance à notre expertise pour une installation qui vous protégera efficacement pendant de nombreuses années."
          ]}
          ctaText="Contactez-nous pour un devis gratuit"
          imageUrl="/lovable-uploads/69230fa7-790c-4a3c-bd7a-047c501a387e.png"
        />

        {/* Second CTA Banner */}
        <CallToActionBanner 
          text="Faites réparer ou installer votre toiture par des pros – Appelez-nous maintenant !" 
          buttonText="Appelez pour assistance"
        />

        <ServiceSection 
          title="Inspection de toiture à Beloeil – Détectez les fuites et dommages"
          content={[
            "Une inspection régulière de votre toiture est la clé pour éviter des réparations coûteuses et imprévues. Notre service d'inspection professionnelle vous offre un diagnostic complet de l'état de votre toit, identifiant les problèmes potentiels avant qu'ils ne deviennent critiques.",
            "Nos techniciens expérimentés examinent minutieusement tous les composants de votre toiture: bardeaux ou autres matériaux de couverture, solins, gouttières, ventilation, et structure sous-jacente. Cette approche exhaustive nous permet de repérer les zones vulnérables, les signes d'usure prématurée ou les dommages causés par les intempéries.",
            "À l'issue de l'inspection, vous recevez un rapport détaillé incluant nos observations et recommandations. Cette évaluation professionnelle vous aide à planifier intelligemment l'entretien ou les réparations nécessaires, prolongeant ainsi considérablement la durée de vie de votre toiture. Nous recommandons une inspection au moins une fois par an, idéalement au printemps après l'hiver rigoureux du Québec ou après une tempête importante."
          ]}
          ctaText="Planifiez votre estimation gratuite dès maintenant – Contactez-nous"
          reverse={true}
          imageUrl="/lovable-uploads/a9b2e5d7-2d6e-4df6-bc57-89fdff438045.png"
        />

        <ServiceSection 
          title="Entretien de toiture à Beloeil – Pour un toit en parfait état toute l'année"
          content={[
            "Un entretien régulier est essentiel pour maximiser la longévité de votre toiture et prévenir les problèmes coûteux. Notre service d'entretien professionnel à Beloeil vous aide à protéger votre investissement grâce à des interventions planifiées et préventives.",
            "Notre programme d'entretien comprend le nettoyage des débris accumulés, l'inspection et le remplacement des bardeaux endommagés, la vérification et la réparation des solins, le nettoyage et la réparation des gouttières, ainsi que l'évaluation de la ventilation et de l'isolation de votre grenier.",
            "Les saisons québécoises, particulièrement l'hiver avec ses cycles de gel-dégel, mettent votre toiture à rude épreuve. Un entretien biannuel, au printemps et à l'automne, constitue une stratégie judicieuse pour prévenir les dommages et assurer une protection optimale de votre maison. Investir dans l'entretien aujourd'hui, c'est éviter des réparations majeures demain et prolonger significativement la durée de vie de votre toiture."
          ]}
          ctaText="Planifiez un entretien préventif pour garder votre toiture en parfait état !"
          imageUrl="/lovable-uploads/88153479-99cf-4c17-a3e1-6a2f286b9c51.png"
        />

        {/* Why Choose Us */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center text-roofing-primary mb-10">
              Pourquoi opter pour Toiture Beloeil à Beloeil pour vos besoins de toiture ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-roofing-primary">Expertise locale</h3>
                <p className="text-gray-700">
                  Choisir Toiture Beloeil pour vos projets de toiture, c'est opter pour une équipe locale qui connaît parfaitement les défis spécifiques au climat de notre région. Notre expertise développée au fil des années nous permet d'offrir des solutions adaptées aux conditions météorologiques québécoises, particulièrement exigeantes pour les toitures.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-roofing-primary">Qualité supérieure</h3>
                <p className="text-gray-700">
                  La qualité est au cœur de notre philosophie. Nous sélectionnons rigoureusement nos matériaux pour leur durabilité exceptionnelle et leur performance à long terme. Chaque installation ou réparation est réalisée selon des standards élevés, assurant une protection optimale de votre domicile pour les années à venir.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-roofing-primary">Transparence totale</h3>
                <p className="text-gray-700">
                  Nous croyons en la transparence totale avec nos clients. C'est pourquoi nous offrons des devis détaillés et gratuits, sans frais cachés ni surprises. Notre équipe prend le temps d'expliquer clairement les travaux nécessaires et les différentes options disponibles, vous permettant de faire un choix éclairé.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-roofing-primary">Service rapide et fiable</h3>
                <p className="text-gray-700">
                  Nous comprenons l'urgence que peuvent représenter certains problèmes de toiture. Notre équipe réactive s'engage à intervenir rapidement, minimisant les délais entre votre appel et la résolution du problème. Que ce soit pour une réparation urgente suite à une tempête ou pour un projet planifié d'installation, nous respectons scrupuleusement les délais annoncés.
                </p>
              </div>
            </div>
            
            <p className="text-center text-lg mt-8 text-gray-700">
              Chez Toiture Beloeil, nous ne nous contentons pas de réparer des toits – nous bâtissons des relations de confiance durables avec nos clients, en offrant un service personnalisé et attentif à chaque étape de votre projet.
            </p>
          </div>
        </section>

        {/* Third CTA Banner */}
        <CallToActionBanner 
          text="Demandez votre estimation gratuite pour votre toit dès aujourd'hui !" 
          buttonText="Contactez-nous"
        />

        {/* Service Areas */}
        <ServiceArea areas={serviceAreas} />

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center text-roofing-primary mb-10">
              Questions Fréquemment Posées Sur Les Toitures (FAQ)
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <FAQItem 
                question="Quels types de matériaux utilisez-vous ?"
                answer="Chez Toiture Beloeil, nous utilisons une large gamme de matériaux de haute qualité adaptés aux conditions climatiques du Québec. Nos options incluent les bardeaux d'asphalte de différentes qualités, les toitures métalliques (acier galvanisé, aluminium), les membranes élastomères pour toits plats, et d'autres solutions spécialisées selon vos besoins spécifiques. Nous sélectionnons uniquement des produits réputés pour leur durabilité et leur résistance aux conditions météorologiques extrêmes."
              />
              
              <FAQItem 
                question="Est-ce que vous travaillez pendant l'hiver?"
                answer="Oui, nous offrons nos services toute l'année, y compris pendant la saison hivernale. Bien que certains projets majeurs comme les remplacements complets soient idéalement réalisés pendant les saisons plus clémentes, nous effectuons des réparations d'urgence, des inspections et certains travaux d'entretien même en hiver. Notre équipe est équipée et formée pour travailler dans des conditions hivernales tout en maintenant la qualité et la sécurité des interventions."
              />
              
              <FAQItem 
                question="Êtes-vous assurés et certifiés ?"
                answer="Absolument! Toiture Beloeil est une entreprise pleinement assurée, incluant une assurance responsabilité civile complète. Nos couvreurs sont certifiés et formés régulièrement aux dernières techniques et normes de l'industrie. Nous respectons scrupuleusement les codes du bâtiment et les réglementations locales pour tous nos projets. Nous pouvons vous fournir tous les documents attestant nos certifications et assurances sur simple demande."
              />
              
              <FAQItem 
                question="Offrez-vous une garantie sur vos travaux ?"
                answer="Oui, tous nos travaux sont couverts par une garantie solide. Nous offrons une garantie sur la main-d'œuvre en plus des garanties fabricant sur les matériaux utilisés. La durée exacte de la garantie varie selon le type de projet et les matériaux choisis. Par exemple, nos installations de bardeaux d'asphalte premium peuvent être garanties jusqu'à 50 ans par le fabricant, avec notre propre garantie de travail qui s'y ajoute. Nous détaillons clairement toutes les informations concernant la garantie dans notre devis."
              />
              
              <FAQItem 
                question="Intervenez-vous en cas d'urgence ?"
                answer="Oui, nous offrons un service d'intervention d'urgence pour les situations critiques comme les fuites importantes, les dommages causés par les tempêtes ou autres problèmes nécessitant une attention immédiate. Notre équipe est prête à répondre rapidement pour sécuriser votre toiture et minimiser les dommages à votre propriété. N'hésitez pas à nous contacter à notre numéro principal en cas d'urgence, et nous ferons notre possible pour intervenir dans les plus brefs délais."
              />
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44672.91775738207!2d-73.266136002696!3d45.589391645266375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9aada71cbdde9%3A0x89fbc914ab406ddd!2sBeloeil%2C%20QC%2C%20Canada!5e0!3m2!1sen!2sma!4v1745008642283!5m2!1sen!2sma" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de Beloeil, QC, Canada"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
        
        {/* Final CTA Banner */}
        <CallToActionBanner 
          text="Besoin d'un toit solide ? Contactez nos experts en toiture dès maintenant !" 
          buttonText="Appelez immédiatement"
        />
      </main>
    </>
  );
};

export default Index;
