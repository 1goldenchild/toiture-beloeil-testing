
import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="flex items-center mb-6">
              <MapPin className="text-roofing-accent mr-3" size={24} />
              <h2 className="text-2xl font-bold text-roofing-primary">Nous sommes à votre service à Beloeil</h2>
            </div>
            <div className="prose mb-6">
              <p>
                Toiture Beloeil est fière de servir Beloeil et ses environs avec des services d'entretien de toiture de haute qualité. Notre équipe locale connaît parfaitement les conditions climatiques spécifiques à la région et les défis qu'elles représentent pour votre toiture.
              </p>
              <p>
                N'hésitez pas à nous contacter pour tous vos besoins en entretien, réparation ou installation de toiture.
              </p>
            </div>
            <div className="flex items-center text-roofing-primary">
              <Phone size={20} className="mr-2" />
              <a href="tel:+14506002538" className="font-bold hover:text-roofing-accent">+1 450 600 2538</a>
            </div>
          </div>
          
          <div className="lg:w-2/3 h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44672.91775738207!2d-73.266136002696!3d45.589391645266375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9aada71cbdde9%3A0x89fbc914ab406ddd!2sBeloeil%2C%20QC%2C%20Canada!5e0!3m2!1sen!2sma!4v1745008642283!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Beloeil, QC, Canada"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
