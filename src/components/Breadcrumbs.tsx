
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Script from "@/components/utils/Script";

interface BreadcrumbMapping {
  [key: string]: {
    name: string;
    schema: {
      "@context": string;
      "@type": string;
      itemListElement: Array<{
        "@type": string;
        position: number;
        name: string;
        item: string;
      }>;
    };
  };
}

const breadcrumbMappings: BreadcrumbMapping = {
  "/": {
    name: "Accueil",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://toiturebeloeil.ca/",
        },
      ],
    },
  },
  "/services-de-couvreur/": {
    name: "Services de couvreur",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://toiturebeloeil.ca/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services de couvreur",
          item: "https://toiturebeloeil.ca/services-de-couvreur/",
        },
      ],
    },
  },
  "/services-de-couvreur/entretien-toiture-Beloeil/": {
    name: "Entretien de toiture Beloeil",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://toiturebeloeil.ca/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services de couvreur",
          item: "https://toiturebeloeil.ca/services-de-couvreur/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Entretien de toiture Beloeil",
          item: "https://toiturebeloeil.ca/services-de-couvreur/entretien-toiture-Beloeil/",
        },
      ],
    },
  },
  "/services-de-couvreur/réparation-toiture-Beloeil/": {
    name: "Réparation de toiture Beloeil",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://toiturebeloeil.ca/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services de couvreur",
          item: "https://toiturebeloeil.ca/services-de-couvreur/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Réparation de toiture Beloeil",
          item: "https://toiturebeloeil.ca/services-de-couvreur/réparation-toiture-Beloeil/",
        },
      ],
    },
  },
  "/services-de-couvreur/inspection-toiture-Beloeil/": {
    name: "Inspection de toiture Beloeil",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://toiturebeloeil.ca/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services de couvreur",
          item: "https://toiturebeloeil.ca/services-de-couvreur/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Inspection de toiture Beloeil",
          item: "https://toiturebeloeil.ca/services-de-couvreur/inspection-toiture-Beloeil/",
        },
      ],
    },
  },
  "/services-de-couvreur/installation-toiture-Beloeil/": {
    name: "Installation de toiture Beloeil",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://toiturebeloeil.ca/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services de couvreur",
          item: "https://toiturebeloeil.ca/services-de-couvreur/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Installation de toiture Beloeil",
          item: "https://toiturebeloeil.ca/services-de-couvreur/installation-toiture-Beloeil/",
        },
      ],
    },
  },
  "/services-de-couvreur/remplacement-toiture-Beloeil/": {
    name: "Remplacement de toiture Beloeil",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://toiturebeloeil.ca/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services de couvreur",
          item: "https://toiturebeloeil.ca/services-de-couvreur/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Remplacement de toiture Beloeil",
          item: "https://toiturebeloeil.ca/services-de-couvreur/remplacement-toiture-Beloeil/",
        },
      ],
    },
  },
  "/contactez-nous/": {
    name: "Contactez-nous",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://toiturebeloeil.ca/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contactez-nous",
          item: "https://toiturebeloeil.ca/contactez-nous/",
        },
      ],
    },
  },
  "/conditions-utilisation/": {
    name: "Conditions d'utilisation",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://toiturebeloeil.ca/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Conditions d'utilisation",
          item: "https://toiturebeloeil.ca/conditions-utilisation/",
        },
      ],
    },
  },
  "/politique-de-confidentialité/": {
    name: "Politique de confidentialité",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://toiturebeloeil.ca/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Politique de confidentialité",
          item: "https://toiturebeloeil.ca/politique-de-confidentialité/",
        },
      ],
    },
  },
};

const Breadcrumbs = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Find the breadcrumbs for the current path
  const currentBreadcrumb = breadcrumbMappings[currentPath];
  
  // If we don't have specific breadcrumbs for this path, return null
  if (!currentBreadcrumb) {
    return null;
  }
  
  // Get the schema for the current path
  const schemaString = JSON.stringify(currentBreadcrumb.schema);
  
  // Build the breadcrumb trail
  const pathSegments = currentPath.split('/').filter(Boolean);
  const breadcrumbTrail = [];
  
  // Always start with home
  breadcrumbTrail.push({
    path: '/',
    name: 'Accueil',
    isLast: pathSegments.length === 0,
  });
  
  // Add services if it's a service page
  if (pathSegments.includes('services-de-couvreur')) {
    const servicesPath = '/services-de-couvreur/';
    breadcrumbTrail.push({
      path: servicesPath,
      name: 'Services de couvreur',
      isLast: currentPath === servicesPath,
    });
  }
  
  // Add the current page if it's not already covered
  if (pathSegments.length > 0 && currentPath !== '/' && currentPath !== '/services-de-couvreur/') {
    breadcrumbTrail.push({
      path: currentPath,
      name: currentBreadcrumb.name,
      isLast: true,
    });
  }

  return (
    <div className="w-full bg-gray-50">
      <div className="container mx-auto px-4 py-2">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbTrail.map((item, index) => (
              <React.Fragment key={item.path}>
                {index > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {item.isLast ? (
                    <BreadcrumbPage>{item.name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={item.path}>{item.name}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        
        {/* Add the schema.org breadcrumb markup */}
        <Script type="application/ld+json">{schemaString}</Script>
      </div>
    </div>
  );
};

export default Breadcrumbs;
