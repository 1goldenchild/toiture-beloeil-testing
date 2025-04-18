
import { Helmet } from "react-helmet";

const ConditionsUtilisation = () => {
  return (
    <>
      <Helmet>
        <title>Conditions d'utilisation | Toiture Beloeil</title>
        <meta 
          name="description" 
          content="Consultez les conditions d'utilisation de Toiture Beloeil. Informations importantes sur l'utilisation de notre site web et nos services de toiture." 
        />
      </Helmet>

      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-roofing-primary mb-8">
            Conditions d'utilisation
          </h1>

          <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Objet des conditions</h2>
              <p>
                Les présentes conditions générales d'utilisation régissent l'utilisation du site web de Toiture Beloeil. 
                En accédant à ce site, vous acceptez ces conditions sans réserve.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Accès au site</h2>
              <p>
                L'accès au site www.toiturebeloeil.ca est gratuit. Nous nous réservons le droit d'interrompre 
                temporairement l'accès pour des raisons de maintenance ou des problèmes techniques.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Services proposés</h2>
              <p>
                Notre site fournit des informations sur nos services de toiture et permet aux utilisateurs de nous 
                contacter. Ces informations sont fournies à titre indicatif et ne constituent pas une offre contractuelle.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, logos, vidéos, structure) est protégé par le droit 
                de la propriété intellectuelle. Toute reproduction ou utilisation sans autorisation préalable est interdite.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Responsabilité</h2>
              <p>
                Bien que nous nous efforcions de fournir des informations exactes, nous ne pouvons garantir 
                l'exactitude, l'exhaustivité ou la pertinence des informations fournies sur ce site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Données personnelles</h2>
              <p>
                Les données personnelles collectées sur ce site sont traitées conformément à notre{" "}
                <a href="/politique-de-confidentialité/" className="text-roofing-primary hover:underline">
                  Politique de confidentialité
                </a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Les modifications 
                prennent effet dès leur publication sur le site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Loi applicable</h2>
              <p>
                Ces conditions sont régies par les lois du Québec et du Canada. Tout litige relatif à l'utilisation 
                du site sera soumis à la juridiction des tribunaux compétents de la province de Québec.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p>Pour toute question concernant ces conditions, vous pouvez nous contacter :</p>
              <ul className="list-none pl-0">
                <li><strong>Entreprise :</strong> Toiture Beloeil</li>
                <li><strong>Téléphone :</strong> <a href="tel:+14506002538">+1 450 600 2538</a></li>
                <li><strong>Courriel :</strong> <a href="mailto:support@toiturebeloeil.ca">support@toiturebeloeil.ca</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default ConditionsUtilisation;
