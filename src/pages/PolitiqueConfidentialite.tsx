
import { Helmet } from "react-helmet";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de confidentialité | Toiture Beloeil</title>
        <meta 
          name="description" 
          content="Découvrez notre politique de confidentialité et comment nous protégeons vos données personnelles chez Toiture Beloeil." 
        />
      </Helmet>

      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-roofing-primary mb-8">
            Politique de confidentialité
          </h1>

          <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
            <section className="mb-8">
              <p className="lead">
                Chez Toiture Beloeil, nous accordons une grande importance à la protection de vos renseignements personnels. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données, 
                conformément à la Loi 25 du Québec.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Collecte des renseignements personnels</h2>
              <p>Nous collectons les informations suivantes :</p>
              <ul>
                <li>Nom et prénom</li>
                <li>Adresse postale</li>
                <li>Numéro de téléphone</li>
                <li>Adresse courriel</li>
                <li>Détails concernant votre projet de toiture</li>
              </ul>
              <p>
                Ces informations sont recueillies lorsque vous nous contactez via notre formulaire en ligne, 
                par téléphone ou par courriel.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Utilisation des renseignements</h2>
              <p>Les renseignements collectés sont utilisés pour :</p>
              <ul>
                <li>Répondre à vos demandes d'information</li>
                <li>Préparer des estimations pour vos projets de toiture</li>
                <li>Assurer le suivi de nos services</li>
                <li>Améliorer nos services et communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Protection des renseignements</h2>
              <p>
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos renseignements 
                personnels contre tout accès, modification, divulgation ou destruction non autorisés.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Vos droits</h2>
              <p>Conformément à la Loi 25, vous avez le droit :</p>
              <ul>
                <li>D'accéder à vos renseignements personnels</li>
                <li>De faire corriger vos renseignements</li>
                <li>De retirer votre consentement</li>
                <li>De demander la suppression de vos données</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Cookies et outils de suivi</h2>
              <p>
                Notre site utilise des cookies essentiels pour assurer son bon fonctionnement. Ces cookies ne 
                collectent aucune information personnelle identifiable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Conservation des données</h2>
              <p>
                Nous conservons vos renseignements personnels aussi longtemps que nécessaire pour les fins 
                pour lesquelles ils ont été collectés, ou conformément aux exigences légales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
              <p>
                Pour toute question concernant cette politique ou pour exercer vos droits, vous pouvez nous 
                contacter :
              </p>
              <ul className="list-none pl-0">
                <li><strong>Entreprise :</strong> Toiture Beloeil</li>
                <li><strong>Téléphone :</strong> <a href="tel:+14506002538">+1 450 600 2538</a></li>
                <li><strong>Courriel :</strong> <a href="mailto:support@toiturebeloeil.ca">support@toiturebeloeil.ca</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications prendront effet dès leur publication sur ce site.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default PolitiqueConfidentialite;
