
import React from 'react';
import { Search, Droplet, Shield, PenTool } from 'lucide-react';

const MaintenanceServices = () => {
  const services = [
    {
      icon: <Search className="w-12 h-12 text-roofing-accent" />,
      title: "Inspection approfondie de toiture – Protégez votre maison des dégâts futurs",
      content: `Notre service d'inspection de toiture à Beloeil est la première étape cruciale de tout programme d'entretien efficace. Nos techniciens qualifiés examinent minutieusement chaque aspect de votre toiture pour détecter les signes précoces de problèmes potentiels.
      <br/><br/>
      Nous vérifions l'état des bardeaux, recherchons les fissures ou déformations, et nous assurons que tous les composants structurels sont en bon état. Notre inspection comprend également une vérification des combles pour repérer toute trace d'infiltration d'eau ou de problèmes de ventilation.
      <br/><br/>
      Après l'inspection, vous recevez un rapport détaillé qui identifie clairement les problèmes trouvés et nos recommandations pour y remédier. Cette approche préventive vous permet d'agir avant que de petits problèmes ne deviennent des réparations majeures et coûteuses.
      <br/><br/>
      Une <a href="https://toiturebeloeil.ca//services-de-couvreur/inspection-de-toiture-beloeil/" class="text-roofing-accent hover:underline">inspection professionnelle</a> annuelle est particulièrement importante après des événements météorologiques extrêmes ou si votre toit a plus de 10 ans. C'est votre meilleure assurance pour la tranquillité d'esprit!`
    },
    {
      icon: <Droplet className="w-12 h-12 text-roofing-accent" />,
      title: "Service de nettoyage de toiture – Offrez à votre toit une nouvelle vie sans mousses ni saleté",
      content: `Le climat humide du Québec favorise la croissance de mousses, d'algues et de lichens sur votre toiture. Non seulement ces organismes nuisent à l'apparence de votre maison, mais ils peuvent aussi causer des dommages importants en retenant l'humidité contre les matériaux de couverture.
      <br/><br/>
      Notre service de nettoyage de toiture à Beloeil élimine efficacement ces menaces biologiques ainsi que tous les débris accumulés. Nous utilisons des techniques adaptées au type de votre toit et des produits respectueux de l'environnement qui n'endommageront pas vos bardeaux ou les plantations environnantes.
      <br/><br/>
      Le processus commence par l'élimination manuelle des gros débris, suivie d'un nettoyage en profondeur avec des équipements spécialisés. Nous portons une attention particulière aux zones critiques comme les vallées et les noues où l'eau s'accumule.
      <br/><br/>
      Un toit propre n'est pas seulement plus beau - il dure plus longtemps! En éliminant les organismes qui dégradent vos matériaux de couverture, vous prolongez significativement la durée de vie de votre investissement tout en améliorant l'apparence générale de votre propriété.`
    },
    {
      icon: <Shield className="w-12 h-12 text-roofing-accent" />,
      title: "Traitement hydrofuge et anti-mousse – Préservez l'intégrité de votre toiture",
      content: `Une fois votre toiture parfaitement nettoyée, nous recommandons l'application d'un traitement hydrofuge et anti-mousse pour une protection optimale. Ce traitement préventif crée une barrière invisible qui empêche l'humidité excessive de pénétrer dans les matériaux de votre toit.
      <br/><br/>
      Notre solution anti-mousse spécialisée inhibe la croissance des mousses, algues et lichens, gardant ainsi votre toiture propre plus longtemps. Ce traitement est particulièrement recommandé pour les toits en pente douce ou les zones ombragées qui sont plus susceptibles de développer ces problèmes.
      <br/><br/>
      L'application est réalisée par nos techniciens formés qui s'assurent d'une couverture uniforme pour une efficacité maximale. Le produit pénètre en profondeur dans les matériaux poreux comme les bardeaux d'asphalte pour offrir une protection durable sans affecter l'apparence ou la respirabilité de votre toit.
      <br/><br/>
      Ce traitement représente un petit investissement qui vous évitera des nettoyages fréquents et coûteux, tout en prolongeant considérablement la durée de vie de votre toiture. Pour une protection complète, nous recommandons de renouveler ce traitement tous les 2 à 3 ans selon l'exposition de votre toit aux éléments.`
    },
    {
      icon: <PenTool className="w-12 h-12 text-roofing-accent" />,
      title: "Vérification complète des solins et joints d'étanchéité à – Prévenez les dommages à votre toiture",
      content: `Les solins et joints d'étanchéité sont des éléments critiques mais souvent négligés de votre système de toiture. Ces composants assurent l'étanchéité autour des cheminées, évents, lucarnes et autres pénétrations du toit, là où les fuites se produisent le plus fréquemment.
      <br/><br/>
      Notre service d'entretien comprend une inspection minutieuse de tous ces points sensibles. Nous vérifions l'état du calfeutrage et des solins métalliques, nous assurant qu'ils sont bien fixés et qu'ils ne présentent pas de signes d'oxydation ou de détérioration.
      <br/><br/>
      Si nous détectons des problèmes, nous procédons immédiatement aux réparations nécessaires, qu'il s'agisse de remplacer un solin rouillé ou d'appliquer un nouveau joint d'étanchéité. Ces petites interventions préventives peuvent éviter des infiltrations d'eau potentiellement désastreuses.
      <br/><br/>
      Chez Toiture Beloeil, nous utilisons des matériaux de haute qualité pour toutes nos <a href="https://toiturebeloeil.ca//services-de-couvreur/reparation-de-toiture-beloeil/" class="text-roofing-accent hover:underline">réparations</a>, garantissant ainsi une étanchéité parfaite même dans les conditions météorologiques les plus difficiles. Votre tranquillité d'esprit est notre priorité!`
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-roofing-primary mb-4">{service.title}</h3>
                  <div 
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: service.content }} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaintenanceServices;
