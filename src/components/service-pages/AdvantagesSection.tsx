
import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

interface AdvantagesSectionProps {
  title: string;
  content: string;
  imageUrl?: string;
}

const AdvantagesSection = ({ title, content, imageUrl }: AdvantagesSectionProps) => {
  return (
    <section className="py-16 bg-roofing-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="flex items-center mb-6">
              <Award className="text-roofing-accent mr-3" size={32} />
              <h2 className="text-3xl font-bold text-roofing-primary">{title}</h2>
            </div>
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
          
          {imageUrl && (
            <div className="lg:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-lg h-full">
                <img 
                  src={imageUrl} 
                  alt="Les avantages de nos services de toiture" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
