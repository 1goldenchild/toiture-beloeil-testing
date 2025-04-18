
import { Helmet } from "react-helmet";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/service-pages/MapSection";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contactez-nous | Toiture Beloeil</title>
        <meta 
          name="description" 
          content="Contactez Toiture Beloeil pour tous vos besoins en toiture. Notre équipe professionnelle est disponible par téléphone au +1 450 600 2538 ou par courriel." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Toiture Beloeil",
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
            "url": "https://toiturebeloeil.ca//",
            "telephone": "+1 450 600 2538",
            "email": "support@toiturebeloeil.ca//",
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
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "telephone": "+1 450 600 2538",
                "areaServed": "Beloeil",
                "availableLanguage": ["French"]
              },
              {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "support@toiturebeloeil.ca//",
                "areaServed": "Beloeil",
                "availableLanguage": ["French"]
              }
            ]
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-roofing-primary mb-8">
            Contactez-nous
          </h1>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Besoin d'un service de toiture professionnel à Beloeil ? Notre équipe est à votre disposition pour répondre à toutes vos questions et vous offrir un service personnalisé.
            </p>
          </div>

          <ContactSection />
          <MapSection />
        </div>
      </main>
    </>
  );
};

export default Contact;
